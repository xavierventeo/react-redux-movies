import {API_KEY, API_URL} from '../properties'
import axios from 'axios'
export const SHOW_GENRES = 'SHOW_GENRES';


/*
export function showGenresAction() {
    return (dispatch, getState) => {
        axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=es-ES`)
            .then((response) => {
                dispatch( { type: SHOW_GENRES, payload: response.data } ) 
            }) 
    }   
}
*/



export const showGenresAction = async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=es-ES`);
        const genres = await res.data.results;
        return dispatch({
            type: SHOW_GENRES,
            payload: genres, 
        });

    } catch (error) {
        console.error(error);
    }
}
