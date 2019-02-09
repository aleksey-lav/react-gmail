import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from "./store";
import {BrowserRouter} from 'react-browser-dom';
import {createStore} from 'redux';
import rootReducer from './reducers/index'

// ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(
    <Provider store ={store}>
        <BrowserRouter><App /></BrowserRouter>
    </Provider>
    , document.getElementById('root')
);