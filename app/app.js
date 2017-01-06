import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers';

import HandleApp from './containers/HandleApp';
import StorePage from './components/Store/StorePage';
import WelcomePage from './components/WelcomePage';

import RequireAuth from './containers/RequireAuth';
import CheckAuth from './containers/CheckAuth';
//import Perf from 'react-addons-perf';

require("../styles/bootstrap.min.css");
require("../styles/style.css");

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

//Perf.start();
render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={CheckAuth(HandleApp)}>
                <IndexRoute component={WelcomePage} />
                <Route path="store" component={RequireAuth(StorePage)} />
            </Route>
        </Router>
    </Provider>, document.getElementById('app')
);
//Perf.stop();
//Perf.printInclusive();
//Perf.printWasted();