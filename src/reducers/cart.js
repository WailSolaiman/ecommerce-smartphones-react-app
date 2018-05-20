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
            };
        case 'Remove_PHONE_FROM_CART':
            return _.pull(state, id);
        default :
            return state;
    }
};