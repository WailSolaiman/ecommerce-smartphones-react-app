import { combineReducers } from 'redux';
import wishlistReducer from "./wishlist";
import phoneReducer from "./phone";
import authReducer from "./auth";
import cartReducer from "./cart";
import phonesReducer from "./phones";
export default combineReducers ({
    auth: authReducer,
    phones: phonesReducer,
    phone: phoneReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
});