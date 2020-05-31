import React, {Component} from 'react';
import { connect } from 'react-redux';
import { showGenresAction } from '../actions/genresAction';


class MoviesList extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div className="movies">
                { (this.props.movies).map( (movie) => (
                    <div>{movie.title}</div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
});

const connectedMoviesList = connect(mapStateToProps, null)(MoviesList);

export default connectedMoviesList;
  