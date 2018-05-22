import { 
    fetchPhones as fetchPhonesApi, 
    fetchPhone as fetchPhoneApi,
    getTotalCartPrice as getTotalCartPriceApi,
    filterPhonesAfterName as filterPhonesAfterNameApi
} from '../api';

export const fetchPhones = () => async dispatch => {
    dispatch({type: 'FETCH_PHONES_START'});
    try {
        const phones = await fetchPhonesApi();
        dispatch({
            type: 'FETCH_PHONES_SUCCESS',
            payload: phones
        });
    }
    catch(error) {
        dispatch({
            type: 'FETCH_PHONES_FAILURE',
            payload: error,
            error: true
        });
    }
};

export const fetchPhone = (id) => async dispatch => {
    dispatch({type: 'FETCH_PHONE_BY_ID_START'});
    try {
        const phone = await fetchPhoneApi(id);
        dispatch({
            type: 'FETCH_PHONE_BY_ID_SUCCESS',
            payload: phone
        });
    }
    catch(error) {
        dispatch({
            type: 'FETCH_PHONE_BY_ID_FAILURE',
            payload: error,
            error: true
        });
    }
};

export const addPhoneToCart = (product) => ({
  type: 'ADD_PHONE_TO_CART',
  product
});

export const editPhoneInCart = (id, update) => ({
  type: 'EDIT_PHONE_IN_CART',
  id,
  update
});

export const removePhoneFromCart = id => ({
  type: 'REMOVE_PHONE_FROM_CART',
  id
});

export const filterPhonesAfterName = (searchedText = '') => async dispatch => {
    dispatch({type: 'FILTER_PHONE_AFTER_NAME_START'});
    try {
        const phones = await filterPhonesAfterNameApi(searchedText);
        dispatch({
            type: 'FILTER_PHONE_AFTER_NAME_SUCCESS',
            payload: phones
        });
    }
    catch(error) {
        dispatch({
            type: 'FILTER_PHONE_AFTER_NAME_FAILURE',
            payload: error,
            error: true
        });
    }
};