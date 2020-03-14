import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import { addPost, updateNewPostText } from '../redux/state';
import { addBook } from '../redux/state'
import { BrowserRouter } from 'react-router-dom';




export let retireDom = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}
                updateNewPostText={updateNewPostText}
                addBook={addBook} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}