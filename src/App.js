import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

function App() {
  return (
    <div className="App">
      <Header />
     <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route path='/shop' component={ShopPage}/>
       <Route path='/signin' component={SignInAndSignUp}/>
     </Switch>
    </div>
  );
}

export default App;
