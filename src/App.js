import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import Advertissing from './components/Advertising/Ads';
import Products from './components/Products/Products'
import { Route } from 'react-router-dom';



const App = (props) => {

    debugger;

    return (
    <div className='app-wrapper'>

      <Header />
      <Navbar />
      <div className='app-wrapper-content'>

      <Route path='/dialogs' render={() => < Dialogs store = {props.store}
         dispatch = {props.dispatch} />} />

        <Route path='/profile' render={() => < Profile profilePage={props.state.profilePage}
          // updateNewPostText={props.updateNewPostText}
          dispatch={props.dispatch} />} />


         <Route path='/products' render={() => < Products books={props.state.productsPage.books}
          addBook={props.addBook} />} />
      </div>
      <Advertissing />
      <Footer />
    </div>

  )
}

export default App;




