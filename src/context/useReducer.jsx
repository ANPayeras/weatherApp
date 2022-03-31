export default (state, action) => {

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
        default:
            return state;
    }
};