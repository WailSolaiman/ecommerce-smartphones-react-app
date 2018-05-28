import database from '../firebase/firebase';
export const fetchPhoneFormDB = (id = '') => (
    dispatch => {
        return database.ref(`phones/${id}`).once('value').then((snapshot) => {
            const phone = snapshot.val();
            dispatch({
                type: 'FETCH_PHONE_BY_ID_SUCCESS',
                id,
                phone
            })
        }).catch(error => {
            dispatch({
                type: 'FETCH_PHONE_BY_ID_FAILURE',
                payload: error,
                error: true
            });
        });
    }
);