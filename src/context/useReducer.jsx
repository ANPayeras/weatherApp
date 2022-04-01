const wheatherReducer = (state, action) => {

    const { payload, type } = action

    switch (type) {
        case 'CURRENT_CITY': {
            return {
                ...state,
                currentCity: payload
            }
        }
        case 'SELECTED_CITY': {
            return {
                ...state,
                selectedCity: payload
            }
        }
        case 'SET_ERROR': {
            return {
                ...state,
                error: payload
            }
        }
        default:
            return state;
    }
};

export default wheatherReducer