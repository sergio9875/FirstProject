import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
//import Dialogs from './components/Dialogs/Dialogs'
import Advertissing from './components/Advertising/Ads';
import Products from './components/Products/Products'
import { Route } from 'react-router-dom';



const App = (props) => {


  return (
    <div className='app-wrapper'>

      <Header />
      <Navbar />
      <div className='app-wrapper-content'>

        {/* <Route path='/dialogs' render={() => < Dialogs messages={props.state.messagesPage.messages}
          dialogsData={props.state.profilePage.dialogsData} />} /> */}
        <Route path='/profile' render={() => < Profile posts={props.state.profilePage.posts}
          addPost={props.addPost} />} />
        <Route path='/products' render={() => < Products books={props.state.productsPage.books}
          addBook={props.addBook} />} />
      </div>
      <Advertissing />
      <Footer />
    </div>

  )
}

export default App;




