import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers';
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);