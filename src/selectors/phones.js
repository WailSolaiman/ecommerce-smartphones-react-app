import phones from '../api/mockPhones';

export const getTotalCartPrice = (cart = []) => {
    let total = 0;
    cart.map(item => {
        phones.map(phone => {
            if (item === phone.id) {
                total = total + phone.price;
            }
        });
    });
    return total;
}

// export const filterPhonesAfterTitle = (products, searchedText = '') => {
//     return products.filter(phone => phone.name.toLowerCase().includes(searchedText.toLowerCase()));
// }