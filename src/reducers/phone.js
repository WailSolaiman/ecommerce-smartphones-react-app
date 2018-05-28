const initialState = {};
export default (state = initialState, { type, id, phone }) => {
    switch(type) {
        case 'FETCH_PHONE_BY_ID_SUCCESS':
            return {
                id,
                ...phone
            };
        default:
            return state;
    }
};