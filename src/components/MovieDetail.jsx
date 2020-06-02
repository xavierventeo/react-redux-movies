import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getMovieDetailAction } from '../actions/moviesAction';

class MovieDetail extends Component {
    constructor(props) {
        super(props); 
        this.state = { movie: this.props.getMovieDetail(this.props.match.params.id) }
    }   

/*
  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.props.getMovie(movieId);
  }
*/


    render() {
        console.log("movieDetail");
        console.log({...this.props.movie});

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">	← Ir a la página principal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>       
        );
    }
}

const mapStateToProps = (state) => ({
    movie: <state className="movie"></state>,
});
    
const mapDispatchToProps = (dispatch) => ({
    getMovieDetail : (movieID) => getMovieDetailAction(dispatch, movieID) 
});

const connectedMovieDetail = connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

export default connectedMovieDetail;
