import React from 'react'
import '../App.css';
import ItemCard from '../Components/ItemCard';
import burger3 from '../Components/images/burger3.jpg'
import burger2 from '../Components/images/Burger2.jpg'
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
import burgerr from "../Components/images/Burger2.jpg"
import { useOutletContext } from 'react-router-dom';


const burgers=[
  {
    "name":"Crux burger",
    "picture":burger2,
    "id":1,
    "ratings": 3,
    "price": 11
    
  },
  {
    "name":"Mini burger",
    "picture":burger3,
    "id":2,
    "ratings": 3,
    "price": 6


  },
  {
    "name":"Mini Cheese",
    "picture":burger4,
    "id":3,
    "ratings": 4,
    "price": 8


  },
  {
    "name":"Large burger",
    "picture":burger5,
    "id":4,
    "ratings": 5,
    "price": 15


  },
  {
    "name":"Veggie burger",
    "picture":burger6,
    "id":5,
    "ratings": 4,
    "price": 12


  },
  {
    "name":"Brisket burger",
    "picture":burger7,
    "id":6,
    "ratings": 4,
    "price": 13


  },
  {
    "name":"Kubie burger",
    "picture":burger8,
    "id":7,
    "ratings": 3,
    "price": 10


  },
  {
    "name":"Cheese burger",
    "picture":burger9,
    "id":8,
    "ratings": 3,
    "price": 5


  },
  {
    "name":"Fluff Screamer",
    "picture":burger10,
    "id":9,
    "ratings": 5,
    "price": 11


  },
  {
    "name":"Theta burger",
    "picture":burger11,
    "id":10,
    "ratings": 4,
    "price": 8


  },
  {
    "name":"Slaw burger",
    "picture":burger12,
    "id":11,
    "ratings": 4,
    "price": 6


  },
  {
    "name":"Beef burger",
    "picture":burger13,
    "id":12,
    "ratings": 5,
    "price": 8


  },
  {
    "name":"Luther burger",
    "picture":burger14,
    "id":13,
    "ratings": 4,
    "price": 6


  },
  {
    "name":"Chimichurri ",
    "picture":burger15,
    "id":14,
    "ratings": 4,
    "price": 12


  },
  {
    "name":"Slug burger",
    "picture":burger16,
    "id":15,
    "ratings": 4,
    "price": 15


  },
  {
    "name":"Pimento burger",
    "picture":burger4,
    "id":16,
    "ratings": 4,
    "price": 8


  },
]



function Burger(props) {

      const location=useOutletContext()
      console.log(location)
  return (
    <div className='dishitemContainer'>
    {
      burgers.map((e,index)=>{
        return(
          <ItemCard imgSrc={e.picture} name={e.name} ratings={e.ratings} price={e.price} ItemsId={e.id} />
        )

      })
    }

    </div> 
  )
}

export { Burger,burgers}

