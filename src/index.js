import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import store from './Data/store';


const repo = `/${window.location.pathname.split('/')[1]}`;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={repo}>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
