import database from '../firebase/firebase';
/*export const saveToDB = () => {
    return async dispatch => {
        const phones = await fetchPhones();
        phones.map(phone => database.ref('phones').push(phone));
    };
};*/
const setPhones = (phones) => ({
    type: 'SET_PHONES_FROM_DATABASE',
    payload: phones
});
export const fetchPhonesFromDB = () => {
    return dispatch => {
        return database.ref('phones').once('value').then(snapshot => {
            let phones = [];
            snapshot.forEach(childSnapshot => {
                phones.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setPhones(phones));
        });
    }
};