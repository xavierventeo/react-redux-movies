import React, {Component} from 'react';
import { connect } from 'react-redux';
import './MoviesList.css';
import { Container, Row, Col} from 'react-bootstrap';


class MoviesList extends Component {

    render() {
        return (
            <Container>
                <Row>
                { (this.props.movies).map( (movie) => (
                    <Col lg={3} md={4} sm={6} xs={12}> 
                        <img className="card-img-top"  src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={`Poster of ${movie.title}`}/>    
                        <div className="card-body">
                            <h3 className="card-title">{movie.title}</h3>  
                        </div>
                    </Col>
                ))}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
});

const connectedMoviesList = connect(mapStateToProps, null)(MoviesList);

export default connectedMoviesList;
  