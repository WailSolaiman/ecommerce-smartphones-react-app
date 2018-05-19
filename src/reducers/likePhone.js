import _ from 'lodash';

const initialState = [];

export default (state = initialState, { type, id }) => {
    switch(type) {
        case 'LIKE_PHONE':
            if (!_.includes(state, id)) {
                return [
                    ...state,
                    id
                ];
            }
            else {
                return _.pull(state, id);
            }
        default :
            return state;
    }
};