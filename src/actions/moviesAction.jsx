import {API_KEY, API_URL} from '../properties'
import {actionDispatch} from './actionsDefinition';
import axios from 'axios'

export const getPopularMoviesAction = async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`);
        const movies = await res.data.results.slice(0, 10);

        return dispatch({
            type: actionDispatch.SHOW_MOVIES,
            payload: movies, 
        });
    } catch (error) {
        console.error(error);
    }
}

export const getSearchMoviesAction = async (dispatch, searchCriteria) => {
    try {
        const res = await axios.get(`${API_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${searchCriteria}`);
        const movies = await res.data.results;

        return dispatch({
            type: actionDispatch.SHOW_MOVIES,
            payload: movies, 
        });
    } catch (error) {
        console.error(error);
    }
}

export const getMoviesByGenderAction = async (dispatch, genreID) => {
    try {
        const res = await axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=${genreID}`);
        const movies = await res.data.results;

        return dispatch({
            type: actionDispatch.SHOW_MOVIES,
            payload: movies, 
        });
    } catch (error) {
        console.error(error);
    }
}

export const getMovieDetailAction = async (dispatch, movieID) => {
    try {
        console.log(movieID);
        const res = await axios.get(`${API_URL}/movie/${movieID}?api_key=${API_KEY}&language=es-ES`);
        const movie = await res.data;
        console.log(movie);

        return dispatch({
            type: actionDispatch.SHOW_MOVIE_DETAIL,
            payload: movie, 
        });
    } catch (error) {
        console.error(error);
    }
}

