import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './redux/state'
import { BrowserRouter } from 'react-router-dom';


//import state from './redux/state'

let retireDom = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                dispatch={store.dispatch.bind(store)}
            // updateNewPostText={store.updateNewPostText.bind(store)}
            // addBook={store.addBook.bind(store)} 
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


retireDom(store.getState());
store.subscribe(retireDom);