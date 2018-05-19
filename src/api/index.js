import phones from './mockPhones';

export const fetchPhones = async () => {
    return new Promise( (resolve, reject) => {
        resolve(phones);
    });
};

export const fetchPhone = async (id) => {
    return new Promise( (resolve, reject) => {
        const phone = phones.filter((phone) => phone.id === id);
        resolve(phone);
    });
};

export const getTotalCartPrice = async (cart = []) => {
    return new Promise(resolve => {
        let total = 0;
        cart.map(item => {
            phones.map(phone => {
                if (item === phone.id) {
                    total = total + phone.price;
                }
            });
        });
        resolve(total);
    });
};

export const filterPhonesAfterName = async (searchedText) => {
    return new Promise(resolve => {
        resolve(phones.filter(phone => phone.name.toLowerCase().includes(searchedText.toLowerCase())));
    });
};