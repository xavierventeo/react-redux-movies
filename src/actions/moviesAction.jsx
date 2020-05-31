import {API_KEY, API_URL} from '../properties'
import {actionDispatch} from './actionsDefinition';
import axios from 'axios'

export const getPopularMoviesAction = async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`);
        console.log(res);
        const movies = await res.data.movies;
        console.log(movies);

        return dispatch({
            type: actionDispatch.GET_POPULAR_MOVIES,
            payload: movies, 
        });
    } catch (error) {
        console.error(error);
    }
}
