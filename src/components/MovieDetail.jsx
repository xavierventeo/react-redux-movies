import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getMovieDetailAction } from '../actions/moviesAction';
import { Container, Row, Col, Image} from 'react-bootstrap';


const getGenresString = (genreObject) => {
    let genreString = "";
    if (genreObject != null) {
        let numGenres = Object.entries(genreObject).length;
        genreString = Object.entries(genreObject).map((genre, i) => (numGenres-1 === i) ? genre[1].name : genre[1].name+', ');
    }
    return genreString;
}

class MovieDetail extends Component {
    
    constructor(props) {
        super(props); 
        this.state = { movieDetail: this.props.getMovieDetail(this.props.match.params.id) }
    }   

    render() {

        return (
            <div key="main" id="main">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">	← Ir a la página principal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Navbar>     

                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                        <Image src={`http://image.tmdb.org/t/p/w342${this.props.movieDetail.poster_path}`} rounded />
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                        <div>Título: {this.props.movieDetail.title}</div>
                <div>Original Title: {this.props.movieDetail.original_title}</div>
                <div>Overview: {this.props.movieDetail.overview}</div>
                <div>Número de votos: {this.props.movieDetail.vote_count}</div>
                <div>Nota media votos: {this.props.movieDetail.vote_average}</div>
                <div>Fecha de Lanzamiento: {this.props.movieDetail.release_date}</div>
                <div>Duración: {this.props.movieDetail.runtime} min</div>
                <div>Género: {getGenresString(this.props.movieDetail.genres)}</div>
                        </Col>
                    </Row>
                </Container>


            </div> 
        );
    }
}

const mapStateToProps = (state) => ({
    movieDetail: state.movieDetail
});
    
const mapDispatchToProps = (dispatch) => ({
    getMovieDetail : (movieID) => getMovieDetailAction(dispatch, movieID) 
});

const connectedMovieDetail = connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

export default connectedMovieDetail;
