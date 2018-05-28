import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter, { history } from './routers/AppRouter';
import { persistor, store } from './store/configureStore';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
const jsx = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};
ReactDOM.render(<LoadingPage />, document.getElementById('app'));
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login({
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL
    }));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/phones');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
