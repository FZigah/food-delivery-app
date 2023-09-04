import React from 'react'
import fries1 from '../Components/images/fries1-removebg-preview.png'
import fries2 from '../Components/images/fries2-removebg-preview.png'
import fries3 from '../Components/images/fries-removebg-preview.png'
import fries4 from '../Components/images/fries4-removebg-preview.png'
import fries5 from '../Components/images/fries5-removebg-preview.png'
import fries6 from '../Components/images/fries6-removebg-preview.png'
import fries7 from '../Components/images/fries7-removebg-preview.png'
import fries8 from '../Components/images/fries8-removebg-preview.png'
import fries9 from '../Components/images/fries9-removebg-preview.png'
import fries10 from '../Components/images/fries10-removebg-preview.png'
import fries11 from '../Components/images/fries11-removebg-preview.png'
import fries12 from '../Components/images/fries9-removebg-preview.png'
import fries13 from '../Components/images/fries13-removebg-preview.png'
import fries14 from '../Components/images/fries14-removebg-preview.png'
import fries15 from '../Components/images/fries15-removebg-preview.png'
import fries20 from '../Components/images/fries20-removebg-preview.png'
import fries21 from '../Components/images/fries21-removebg-preview.png'
import fries22 from '../Components/images/fries22-removebg-preview.png'
import '../App.css';
import ItemCard from '../Components/ItemCard';


const chips=[
  {
    "name":"McDonald's fries",
    "picture":fries1,
    "id":35,
    "ratings": 3,
    "price": 11
    
  },
  {
    "name":"McPablo's fries",
    "picture":fries2,
    "id":36,
    "ratings": 3,
    "price": 6


  },
  {
    "name":"Maxi fries",
    "picture":fries3,
    "id":37,
    "ratings": 4,
    "price": 8


  },
  {
    "name":"Fries with Burger and Coke",
    "picture":fries4,
    "id":38,
    "ratings": 5,
    "price": 15


  },
  {
    "name":"Deroniz fries",
    "picture":fries5,
    "id":39,
    "ratings": 4,
    "price": 12


  },
  {
    "name":"Hendricks fries",
    "picture":fries6,
    "id":40,
    "ratings": 4,
    "price": 13


  },
  {
    "name":"Fries Bonanza",
    "picture":fries7,
    "id":41,
    "ratings": 3,
    "price": 10


  }

  ,
  {
    "name":"Hendricks with Chicken Nuggets",
    "picture":fries8,
    "id":42,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Palazzo fries",
    "picture":fries9,
    "id":43,
    "ratings": 3,
    "price": 10
   }
   ,
   {
    "name":"Fries with Icecream",
    "picture":fries10,
    "id":44,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"KFC Bonanza",
    "picture":fries11,
    "id":45,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Basquait fries",
    "picture":fries12,
    "id":46,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Crazy fries",
    "picture":fries13,
    "id":47,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Chicken Streetwise",
    "picture":fries14,
    "id":48,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Dancehall Asake Fries",
    "picture":fries15,
    "id":49,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Dancehall Asake Fries",
    "picture":fries20,
    "id":50,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Dancehall Asake Fries",
    "picture":fries21,
    "id":51,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Dancehall Asake Fries",
    "picture":fries22,
    "id":52,
    "ratings": 3,
    "price": 10


  }
  
]
function  Chips() {
    
    
     
 
      return (
        <div className='dishitemContainer'>
    {
      chips.map((e)=>{
        return(
          <ItemCard imgSrc={e.picture} name={e.name} ratings={e.ratings} price={e.price} ItemsId={e.id} />
        )

      })
    }
    </div> 
       )
}

export {chips,Chips}
