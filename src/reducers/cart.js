import _ from 'lodash';

const initialState = [];

export default (state = initialState, { type, id }) => {
    switch(type) {
        case 'ADD_PHONE_TO_CART':
            if (!_.includes(state, id)) {
                return [
                    ...state,
                    id
                ];
            }
            else {
                return state;
            }
        default :
            return state;
    }
};