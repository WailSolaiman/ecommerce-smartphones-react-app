import database from '../firebase/firebase';
const addPhoneToCart = (product) => ({
    type: 'ADD_PHONE_TO_CART',
    product
});
export const startAddPhoneToCart = (productData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {id = '', color='', quantity=0} = productData;
        const product = {id, color, quantity};
        return database.ref(`users/${uid}/shoppingCart/${product.id}`).set(product).then(() => {
            dispatch(addPhoneToCart(product));
        });
    };
};
const editPhoneInCart = (id, update) => ({
    type: 'EDIT_PHONE_IN_CART',
    id,
    update
});
export const startEditPhoneInCart = (id = '', updates = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/shoppingCart/${id}`).update(updates).then(() => {
            dispatch(editPhoneInCart(id, updates));
        });
    };
};
const removePhoneFromCart = id => ({
    type: 'REMOVE_PHONE_FROM_CART',
    id
});
export const startRemovePhoneFromCart = (id = '') => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/shoppingCart/${id}`).remove().then(() => {
            dispatch(removePhoneFromCart(id));
        });
    }
};
const loadPhoneToCart = (cart) => ({
    type: 'LOAD_PHONE_DATA_TO_CART',
    cart
});
export const startLoadPhoneToCart = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const cart = [];
        return database.ref(`users/${uid}/shoppingCart`).once('value').then(snapshot => {
            snapshot.forEach(childSnapshot => {
                cart.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(loadPhoneToCart(cart));
        });
    };
};