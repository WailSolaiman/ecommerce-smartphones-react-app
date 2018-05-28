import database from '../firebase/firebase';
const addPhoneToWishlist = (id) => ({
    type: 'ADD_PHONE_TO_WISHLIST',
    id
});
export const startAddPhoneToWishlist = (id = '') => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/wishlist/${id}`).set(id).then(() => {
            dispatch(addPhoneToWishlist(id));
        });
    };
};
const removePhoneFromWishlist = (id) => ({
    type: 'REMOVE_PHONE_FROM_WISHLIST',
    id
});
export const startRemovePhoneFromWishlist = (id = '') => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/wishlist/${id}`).remove().then(() => {
            dispatch(removePhoneFromWishlist(id));
        });
    };
};
const loadPhoneToWishlist = (wishlist) => ({
    type: 'LOAD_PHONE_DATA_TO_WISHLIST',
    wishlist
});
export const startLoadPhoneToWishlist = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const wishlist = [];
        return database.ref(`users/${uid}/wishlist`).once('value').then(snapshot => {
            snapshot.forEach(childSnapshot => {
                wishlist.push({
                    id: childSnapshot.key
                });
            });
            dispatch(loadPhoneToWishlist(wishlist));
        });
    };
};