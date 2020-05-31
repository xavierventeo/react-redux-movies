import {actionDispatch} from './../actions/actionsDefinition';

const initialState = {
    genres: [],
    movies:[]
}
    
function reducer(state = initialState, action) {
    switch (action.type) {
        case actionDispatch.SHOW_GENRES:
            return {
                ...state,
                genres: action.payload,
            };

        case actionDispatch.GET_POPULAR_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };

        default:
            return state;
    }
}

export default reducer;