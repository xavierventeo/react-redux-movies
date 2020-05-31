import {API_KEY, API_URL} from '../properties'
import {actionDispatch} from './actionsDefinition';
import axios from 'axios'

export const getPopularMoviesAction = async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`);
        const movies = await res.data.results.slice(0, 10);

        return dispatch({
            type: actionDispatch.GET_POPULAR_MOVIES,
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
        console.log(movies);

        return dispatch({
            type: actionDispatch.GET_SEARCH_MOVIES,
            payload: movies, 
        });
    } catch (error) {
        console.error(error);
    }
}
