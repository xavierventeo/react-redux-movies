import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './MoviesList.css';
import { Container, Row, Col, Card} from 'react-bootstrap';


class MoviesList extends Component {

    render() {
        return (
            <Container>
                <Row>
                { (this.props.movies).map( (movie) => (
                    <Col lg={3} md={4} sm={6} xs={12}> 
                        <Link to={`/movie/${movie.id}`}>
                            <Card className="bg-dark text-white">
                                <Card.Body>
                                    <Card.Title>{(movie.title.length>50) ? (movie.title.substr(0, 49)+'...') : movie.title}</Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} />
                            </Card>
                        </Link>
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
  