import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise-middleware';
import {BrowserRouter} from 'react-router-dom';
import {logger} from 'redux-logger';


const store=createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk,logger,reduxPromise)));

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
