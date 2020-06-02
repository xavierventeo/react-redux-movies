import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getMovieDetailAction } from '../actions/moviesAction';
import { Container, Row, Col, Card} from 'react-bootstrap';


class MovieDetail extends Component {
    
    constructor(props) {
        super(props); 
        this.state = { movieDetail: this.props.getMovieDetail(this.props.match.params.id) }
    }   

    render() {
        return (
            <div key="main" id="main">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">	← Ir a la página principal  {this.props.movieDetail.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Navbar>     
                <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500${this.props.movieDetail.poster_path}`} />
                <div>Título: {this.props.movieDetail.title}</div>
                <div>Original Title: {this.props.movieDetail.original_title}</div>
                <div>Overview: {this.props.movieDetail.overview}</div>
                <div>Número de votos: {this.props.movieDetail.vote_count}</div>
                <div>Nota media votos: {this.props.movieDetail.vote_average}</div>
                <div>Fecha de Lanzamiento: {this.props.movieDetail.release_date}</div>
                <div>Duración: {this.props.movieDetail.runtime} min</div>

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
