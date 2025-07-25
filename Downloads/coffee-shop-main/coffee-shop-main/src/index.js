import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import axios from "axios"
import {RequestProvider} from "react-request-hook"


let instance = axios.create({
  baseUrl: 'https://localhost:3004'
})

const store = configureStore()

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>       
    <RequestProvider value={instance}>
        <App />
    </RequestProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

