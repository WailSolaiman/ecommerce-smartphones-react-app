const initialState = [];
export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PHONE_TO_WISHLIST':
            const item = state.some(element => {
                return element.id === action.id;
            });
            if (item) return state;
            else return [...state, {id: action.id}];
        case 'REMOVE_PHONE_FROM_WISHLIST':
            return state.filter(element => element.id !== action.id);
        case 'LOAD_PHONE_DATA_TO_WISHLIST':
            return action.wishlist ;
        default:
            return state;
    }
}