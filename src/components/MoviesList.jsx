import React, {Component} from 'react';
import { connect } from 'react-redux';

class MoviesList extends Component {

    render() {
        return (
            <div className="movies">
                { (this.props.movies).map( (movie) => (
                    <div className="movie">
                        <img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} />    
                        <h3>{movie.title}</h3>  
                    </div>
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
  