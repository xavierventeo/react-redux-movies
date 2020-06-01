import React, {Component} from 'react';
import { connect } from 'react-redux';
import { showGenresAction } from '../actions/genresAction';
import { getMoviesByGenderAction } from '../actions/moviesAction';


class Genres extends Component {
    constructor(props) {
        super(props); 
        this.state = { genres: this.props.showGenres() };
    }

    render() {
        return (
            <div className="nav-genres">
                { (this.props.genres).map( (genre) => (
                    <button key={genre.name} className="btn btn-primary my-2 my-sm-0" onClick={() => this.props.getMoviesByGender(genre.id)}>{genre.name}</button>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    genres: state.genres,
});
    
const mapDispatchToProps = (dispatch) => ({
    showGenres : () => showGenresAction(dispatch),
    getMoviesByGenderAction : (genreID) => getMoviesByGenderAction(dispatch, genreID) 
});

const connectedGenres = connect(mapStateToProps, mapDispatchToProps)(Genres);

export default connectedGenres;
  