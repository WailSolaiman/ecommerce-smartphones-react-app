import _ from 'lodash';

const intialState = {};

export default (state = intialState, { type, payload }) => {
    switch(type) {
        case 'FETCH_PHONE_BY_ID_SUCCESS':
            return _.assign({}, state, ...payload);
        default:
            return state;
    }
};