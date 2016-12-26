import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers';

import App from './components/App';
import StorePage from './components/Store/StorePage';
import WelcomePage from './components/WelcomePage';
import WeatherPage from './components/Weather/WeatherPage';
import ChatPage from './components/Chat/ChatPage';
import GithubSearchPage from './components/GithubSearch/GithubSearchPage';

import RequireAuth from './containers/RequireAuth';
import CheckAuth from './containers/CheckAuth';

require("../styles/bootstrap.min.css");
require("../styles/style.css");

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={CheckAuth(App)}>
                <IndexRoute component={WelcomePage} />
                <Route path="store" component={RequireAuth(StorePage)} />
                <Route path="weather" component={RequireAuth(WeatherPage)} />
                <Route path="chat" component={RequireAuth(ChatPage)} />
                <Route path="github" component={RequireAuth(GithubSearchPage)} />
            </Route>
        </Router>
    </Provider>, document.getElementById('app')
);