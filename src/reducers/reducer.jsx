const initialState = {
    genres: [],
    movies:[]
}
    
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_GENRES':
            return {
                ...state,
                genres: action.payload,
            };

        default:
            return state;
    }
}

export default reducer;