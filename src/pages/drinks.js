import React from 'react'
import drink1 from '../Components/images/drinks1-removebg-preview.png'
import drink2 from '../Components/images/drink-removebg-preview.png'
import drink3 from '../Components/images/drinks3-removebg-preview.png'
import drink4 from '../Components/images/drinksssss-removebg-preview.png'
import drink5 from '../Components/images/drinks5-removebg-preview.png'
import drink6 from '../Components/images/drinks6-removebg-preview.png'
import drink7 from '../Components/images/drinks7-removebg-preview.png'
import drink8 from '../Components/images/drinks8-removebg-preview.png'
import drink10 from '../Components/images/drinks10-removebg-preview.png'
import drink11 from '../Components/images/drinks11-removebg-preview.png'
import drink12 from '../Components/images/drinks12-removebg-preview.png'
import drink13 from '../Components/images/drinks13-removebg-preview.png'
import drink14 from '../Components/images/drinks14-removebg-preview.png'
import drink15 from '../Components/images/drinks15-removebg-preview.png'
import drink20 from '../Components/images/drinks20-removebg-preview.png'
import drink21 from '../Components/images/drinks21-removebg-preview.png'
import drink22 from '../Components/images/drinks22-removebg-preview.png'
import drink23 from '../Components/images/drinks23-removebg-preview.png'
import drink24 from '../Components/images/drinks24-removebg-preview.png'
import drink25 from '../Components/images/drinks25-removebg-preview.png'
import drink26 from '../Components/images/drinks26-removebg-preview.png'
import '../App.css';
import ItemCard from '../Components/ItemCard';

const drinks=[
  {
    "name":"Large Coca Cola",
    "picture":drink1,
    "id":53,
    "ratings": 3,
    "price": 11
    
  },
  {
    "name":"Strawberry drink",
    "picture":drink2,
    "id":54,
    "ratings": 3,
    "price": 6


  },
  {
    "name":"Large Sprite",
    "picture":drink3,
    "id":55,
    "ratings": 4,
    "price": 8


  },
  {
    "name":"Large Fanta",
    "picture":drink4,
    "id":57,
    "ratings": 5,
    "price": 15


  },
  {
    "name":"Mojito Virgin",
    "picture":drink5,
    "id":56,
    "ratings": 4,
    "price": 12


  },
  {
    "name":"Diamond Tequila",
    "picture":drink6,
    "id":58,
    "ratings": 4,
    "price": 13


  },
  {
    "name":"D'Orange Juice",
    "picture":drink7,
    "id":59,
    "ratings": 3,
    "price": 10


  }

  ,
  {
    "name":"Special Sobolo",
    "picture":drink8,
    "id":60,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Keizer Apple Juice",
    "picture":drink10,
    "id":61,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Refresh Coconut Drink",
    "picture":drink11,
    "id":62,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Red Notice",
    "picture":drink12,
    "id":63,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Strawberry Juice",
    "picture":drink13,
    "id":64,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Mango Juice",
    "picture":drink14,
    "id":65,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Watermelon Juice",
    "picture":drink15,
    "id":67,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Moet Champagne",
    "picture":drink20,
    "id":68,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Baileys",
    "picture":drink21,
    "id":69,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Chandon",
    "picture":drink22,
    "id":70,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Shandy",
    "picture":drink23,
    "id":71,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Luc Belaire",
    "picture":drink24,
    "id":72,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Hennessy",
    "picture":drink25,
    "id":73,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Ice Cream",
    "picture":drink26,
    "id":74,
    "ratings": 3,
    "price": 10


  }
  
  
]


function Drinks() {

     
 
      return (
        <div className='dishitemContainer'>
    {
      drinks.map((e)=>{
        return(
          <ItemCard imgSrc={e.picture} name={e.name} ratings={e.ratings} price={e.price} ItemsId={e.id}/>
        )

      })
    }
    </div> 
       )
}


export {drinks,Drinks}
