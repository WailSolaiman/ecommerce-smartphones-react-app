import phones from '../api/mockPhones';

export const calculatePriceWithAmount = (cart = []) => {
  let totalPrice = 0;
  cart.map(product => {
    phones.map(phone => {
      if (product.id === phone.id) {
        totalPrice = totalPrice + (phone.price * parseInt(product.quantity));
      }
    });
  });
  return totalPrice;
}

export const calculateDiscountWithAmount = (cart = []) => {
  let totalDiscount = 0;
  cart.map(product => {
    phones.map(phone => {
      if (product.id === phone.id) {
        totalDiscount = totalDiscount + (phone.discount * parseInt(product.quantity));
      }
    });
  });
  return totalDiscount.toFixed(2);
}

export const getTotalAmountInCart = (cart = []) => {
  let totalAmount = 0;
  cart.map(product => {
    phones.map(phone => {
      if (product.id === phone.id) {
        totalAmount = totalAmount + parseInt(product.quantity);
      }
    });
  });
  return totalAmount;
}