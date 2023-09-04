import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from "./Components/Header";
import MenuContainer from './Components/MenuContainer';
import { useEffect, useState } from 'react';
import BannerName from './Components/BannerName';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import ItemCard from './Components/ItemCard';
import burgerr from "./Components/images/burger3.jpg"
import hambuger from "./Components/images/hamburger.jpg"
import burger from "./Components/images/Burger2.jpg"
import deliveryy from "./Components/images/deliveryy-removebg-preview.png"
import chips from "./Components/images/fries-removebg-preview.png"
import pizza from "./Components/images/pizzaa.png"
import chicken from "./Components/images/Chicken-removebg-preview.png"
import drinks from "./Components/images/drink-removebg-preview.png"
import burger2 from './Components/images/Burger2.jpg'
import burger3 from './Components/images/burger3.jpg'
import burger4 from './Components/images/Burger4.jpg'
import Login from './Components/login';
import { BrowserRouter as Router,Routes,Route,uselocation } from 'react-router-dom';
import Landingpage from './pages/landingpage';
import{ Burger} from './pages/burger';
import {Pizzapage} from './pages/pizzapage';
import {Chips} from './pages/chips';
import {Chicken} from './pages/chicken'
import {Drinks} from './pages/drinks'
import { Provider } from 'react-redux';
import store from './Components/store';
import {createContext} from 'react'




export const TotalPriceContext=createContext()


function App() {

  const [totalPrice,setTotalPrice]=useState(0)
  function ChangeTotal(value){
   
    setTotalPrice(prevTotalPrice=>value)
  
  }
  function ChangeTotal2(value){
   
    setTotalPrice(prevTotalPrice=>totalPrice-value)
  
  }



  return (
    
    //sign In page//
  
    <Provider store={store}>
     <TotalPriceContext.Provider value={{totalPrice,ChangeTotal}} >
   <Router>
    <Routes>
      <Route exact Component={Landingpage} path='/home'>
        <Route Component={Burger} path='/home' />
        <Route  Component={Pizzapage} path='/home/pizza'/>
        <Route Component={Chips} path='/home/chips'/>
        <Route Component={Chicken} path='/home/chicken'/>
        <Route Component={Drinks} path='/home/drinks'/>
      </Route>
      <Route exact  Component={Login} path='/'/>
    

    //sign In page//
    </Routes>
    </Router>
    </TotalPriceContext.Provider>
    </Provider>

  );
}

export default App;
