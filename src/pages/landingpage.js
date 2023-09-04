
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import '../App.css';
import Header from "../Components/Header";
import MenuContainer from '../Components/MenuContainer';
import { useEffect, useState,React,useContext  } from 'react';
import BannerName from '../Components/BannerName';
import SubMenuContainer from '../Components/SubMenuContainer';
import MenuCard from '../Components/MenuCard';
import debitCard from '../Components/DebitCard';
import CartItem from '../Components/CartItem';

import burgerr from "../Components/images/burger3.jpg"
import hambuger from "../Components/images/hamburger.jpg"
import burger from "../Components/images/Burger2.jpg"
import deliveryy from "../Components/images/deliveryy-removebg-preview.png"
import chips from "../Components/images/fries-removebg-preview.png"
import pizza from "../Components/images/pizzaa.png"
import chicken from "../Components/images/Chicken-removebg-preview.png"
import drinks from "../Components/images/drink-removebg-preview.png"
import burger2 from '../Components/images/Burger2.jpg'
import burger3 from '../Components/images/burger3.jpg'
import burger4 from '../Components/images/Burger4.jpg'
import burger5 from '../Components/images/burger5-removebg-preview.png'
import burger6 from '../Components/images/burger6-removebg-preview.png'
import burger7 from '../Components/images/burger_7-removebg-preview.png'
import burger8 from '../Components/images/burger8-removebg-preview.png'
import burger9 from '../Components/images/burger9-removebg-preview.png'
import burger10 from '../Components/images/burger10-removebg-preview.png'
import burger11 from '../Components/images/burger11-removebg-preview.png'
import burger12 from '../Components/images/burger12-removebg-preview.png'
import burger13 from '../Components/images/burger13-removebg-preview.png'
import burger14 from '../Components/images/burger14-removebg-preview.png'
import burger15 from '../Components/images/burger15-removebg-preview.png'
import burger16 from '../Components/images/burger16-removebg-preview.png'
import Pizza from './burger'
import Chips from './burger'
import {Outlet,Link,useLocation} from 'react-router-dom'
import DebitCard from '../Components/DebitCard';
import { useStateValue } from '../Components/StateProvider';
import {burgers} from './burger'

import { useSelector } from 'react-redux';
import { TotalPriceContext } from '../App';

function Landingpage() {
    const[signIn] = useState(true);
    const location=useLocation()
    const [toggle,setToggle]=useState(false)

    const [totalPrice1,setToggle1] = useState(0)
    localStorage.removeItem('total')
const totalPrice2 = useContext(TotalPriceContext)
  
useEffect(() => {
  var toggleMenu=null


   toggleMenu = document.querySelector(".toggleMenu");
  console.log(document.querySelector('.rightMenu'))


  toggleMenu.addEventListener('click', () => {

  
if (toggle){ 
document.querySelector('.rightMenu').classList.remove("active")
setToggle(false)

}
  else{
  document.querySelector('.rightMenu').classList.add("active")
    setToggle(true)

  }    

      
      
  })




}, [toggle]);
    



   
    //Main Dish state
   
  
      
    const categories=[
      {
        "name":"burger",
        "picture":burger,
        "id":1,
        'link':"/home"
        
      },
      {
        "name":"pizza",
        "picture":pizza,
        "id":2,
        "link":"/home/pizza"
      },
      {
        "name":"chips",
        "picture":chips,
        "id":3,
        'link':"/home/chips"
      },
      {
        "name":"chicken",
        "picture":chicken,
        "id":4,
        "link":"/home/chicken"
      },
      {
        "name":"drinks",
        "picture":drinks,
        "id":5,
        "link":"/home/drinks"
      }, ];
  
  
  
     
   
      const [isMainData, setMainData] = useState(
        burgers.filter((element) => element.itemId == "1")
      );
    
      const [{ cart, total }, dispatch] = useStateValue();
      const [totalPrice, setTotalPrice] = useState(0);
  console.log(cart)
      useEffect(() => {
        const menuLi = document.querySelectorAll("#menu li");
    
        function setMenuActive() {
          menuLi.forEach((n) => n.classList.remove("active"));
          this.classList.add("active");
        }
    
        menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
    
        // menu Card active class changer
        const menuCard = document
          .querySelector(".rowContainer")
          .querySelectorAll(".rowMenuCard");
    
        function setMenuCardActive() {
          menuCard.forEach((n) => n.classList.remove("active"));
          this.classList.add("active");
        }
    
        menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
      }, [isMainData, cart, total, totalPrice]);
    
      const setData = (itemId) => {
        setMainData(burgers.filter((element) => element.itemId == itemId));
      };
      
 
      const totalPric04e = useSelector(state => state.cart.totalPrice);  
      console.log(totalPric04e)

       
  return (
    <div>
         <div className="App">
    {/*Header Section*/}
      <Header/>
    {/*Main Container*/}
      <main>
        <div className='mainContainer'> 
        {/* Banner */}
        <div className='Banner'>
          <BannerName name={"Pablo"} discount={"20"} link={"#"}/>
          <img src={deliveryy}
           alt="" className="deliveryPic"/>
        </div>
       
        {/* Dish Container*/}
        <div className='dishContainer'>
        <div className='menuCard'>
          <SubMenuContainer name={"Menu Category"}/>
          
        </div>
        <div className='rowContainer'>
          {
            categories.map((category)=>{
              return(
                <Link to={category.link} key={category.id}>
                <MenuCard imgSrc={category.picture} 
                name={category.name}
                isActive = {category.link === location.pathname? true : false}  />
              </Link>

              )
            })
          }
       </div>
               
        </div>
      <Outlet />
        </div>
        <div className='rightMenu '>
        <div className='debitCardContainer'>
        <div className='debitCard'>
          <DebitCard/>
        </div>
        </div>
        <div className='cartCheckOutContainer'>
          <SubMenuContainer name={"Carts Items"}/>
          <div className='cartContainer'>
            <div className='CartItems'>
            {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.picture}
                        qty={"4"}
                        price={data.price}
                    />
                    ))}
            </div>
          </div>
          <div className='totalSection'>
            <h3>Total</h3>
          <p><span>$ </span>{totalPrice2.totalPrice}</p>
          </div>
          <button className='checkOut'>Check Out</button>
        </div>
        </div>
      </main>
    {/*Bottom Menu*/}
    <div className='bottomMenu'>
    <ul id="menu">
      {/*prettier ignore*/}
      <MenuContainer link={'#'} icon={<HomeRounded/>} isHome/>
      {/*prettier ignore*/}
      <MenuContainer link={'#'} icon={<Chat/>}/>
      {/*prettier ignore*/}
      <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded/>}/>
      {/*prettier ignore*/}
      <MenuContainer link={'#'} icon={<Favorite/>}/>
      {/*prettier ignore*/}
      <MenuContainer link={'#'} icon={<SummarizeRounded/>}/>
      {/*prettier ignore*/}
      <MenuContainer link={'#'} icon={<Settings/>}/>

      <div className='indicator'></div>
    </ul>
    </div>
  </div>
      
    </div>
  )
}

export default Landingpage
