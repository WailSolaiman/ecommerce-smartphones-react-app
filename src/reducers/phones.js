import _ from 'lodash';

const intialState = [];

export default (state = intialState, { type, payload }) => {
    switch(type) {
        case 'FETCH_PHONES_SUCCESS':
            return _.merge([], state, payload);
        case 'FILTER_PHONE_AFTER_NAME_SUCCESS':
            return payload
        default:
            return state;
    }
};