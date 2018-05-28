const initialState = [];
export default (state = initialState, { type, payload }) => {
    switch(type) {
        case 'FETCH_PHONES_SUCCESS':
            return [
                ...state,
                payload
            ];
        case 'SET_PHONES_FROM_DATABASE':
            return payload;
        default:
            return state;
    }
};