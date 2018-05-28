export const calculatePriceWithAmount = (cart = [], phones = []) => {
  let totalPrice = 0;
  cart.map(product => {
    phones.map(phone => {
      if (product.id === phone.id) {
        totalPrice = totalPrice + (phone.price * parseInt(product.quantity));
      }
    });
  });
  return totalPrice;
};
export const calculateDiscountWithAmount = (cart = [], phones = []) => {
  let totalDiscount = 0;
  cart.map(product => {
    phones.map(phone => {
      if (product.id === phone.id) {
        totalDiscount = totalDiscount + (phone.discount * parseInt(product.quantity));
      }
    });
  });
  return totalDiscount.toFixed(2);
};