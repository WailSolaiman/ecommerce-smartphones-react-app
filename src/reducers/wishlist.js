import _ from 'lodash';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PHONE_TO_WISHLIAST':
      if(!_.includes(state, action.id)) {
        return [
          ...state,
          action.id
        ]
      } else {
        return state;
      }
    case 'REMOVE_PHONE_FROM_WISHLIAST':
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
}