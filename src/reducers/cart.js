const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PHONE_TO_CART':
      return [
        ...state,
        action.product
      ];
    case 'EDIT_PHONE_IN_CART':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            ...action.update
          }
        }
        else {
          return item;
        }
      });
    case 'REMOVE_PHONE_FROM_CART':
        return state.filter(item => item.id !== action.id);
    default :
        return state;
  }
};