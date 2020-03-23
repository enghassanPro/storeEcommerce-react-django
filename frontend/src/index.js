import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import { createStore } from 'redux';
import reducer from './store/reducer';

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true

const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById("root"))