import React, {Component} from 'react';
import { connect } from 'react-redux';
import './MoviesList.css';

class MoviesList extends Component {

    render() {
        return (
            <div className="movies">
                { (this.props.movies).map( (movie) => (
                    <div className="card">
                        <img className="card-img-top"  src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={`Poster of ${movie.title}`}/>    
                        <div className="card-body">
                            <h3 className="card-title">{movie.title}</h3>  
                        </div>
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
  