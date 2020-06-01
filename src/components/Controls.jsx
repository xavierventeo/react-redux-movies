import React from 'react';
import { connect } from 'react-redux';
import { getPopularMoviesAction, getSearchMoviesAction } from '../actions/moviesAction';


class Controls extends React.Component {
    searchMovies() {
        let fieldSearchCriteria = document.getElementById("search").value.trim();
        if (fieldSearchCriteria) {
            this.props.getSearchMovies(fieldSearchCriteria);
        }
        document.getElementById("search").value = "";
    }

    render() {
        return (
            <div className="nav-principal">
                <div>
                    <a key="butPoppularMovies" onClick={() => this.props.getPopularMovies()} href="/#">Películas Populares</a>
                </div>
                <div className="search">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search"/>
                    <button className="btn btn-outline-success rounded-pill" onClick={() => this.searchMovies()}>Buscar&nbsp;Películas</button>
                </div>
            </div>            
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getPopularMovies : () => getPopularMoviesAction(dispatch),
    getSearchMovies : (searchCriteria) => getSearchMoviesAction(dispatch, searchCriteria)
});

  const connectedControls = connect(null, mapDispatchToProps)(Controls);

export default connectedControls;
  