import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import phonesReducer from '../reducers/phones';
import phoneReducer from '../reducers/phone';
import CartReducer from '../reducers/cart';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      phones: phonesReducer,
      phone: phoneReducer,
      cart: CartReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
