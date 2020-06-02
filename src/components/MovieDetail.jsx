import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getMovieDetailAction } from '../actions/moviesAction';

class MovieDetail extends Component {
    
    constructor(props) {
        super(props); 
        this.state = { movieDetail: this.props.getMovieDetail(this.props.match.params.id) }
    }   

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">	← Ir a la página principal  {this.props.movieDetail.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>       
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
