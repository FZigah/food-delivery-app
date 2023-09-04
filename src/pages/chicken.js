import React from 'react'
import chicken1 from '../Components/images/Chicken-removebg-preview.png'
import chicken2 from '../Components/images/chicken2-removebg-preview.png'
import chicken3 from '../Components/images/chicken3-removebg-preview.png'
import chicken4 from '../Components/images/chicken4-removebg-preview.png'
import chicken5 from '../Components/images/chicken5-removebg-preview.png'
import chicken6 from '../Components/images/chicken6-removebg-preview.png'
import chicken7 from '../Components/images/chicken7-removebg-preview.png'
import chicken20 from '../Components/images/chicken20-removebg-preview.png'
import chicken22 from '../Components/images/chicken22_jpg-removebg-preview.png'
import chicken23 from '../Components/images/chicken23-removebg-preview.png'
import chicken24 from '../Components/images/chicken24-removebg-preview.png'
import chicken25 from '../Components/images/chicken25-removebg-preview.png'
import chicken26 from '../Components/images/chicken26-removebg-preview.png'
import chicken27 from '../Components/images/chicken27-removebg-preview.png'
import chicken28 from '../Components/images/chicken28-removebg-preview.png'
import chicken29 from '../Components/images/chicken29-removebg-preview.png'
import chicken30 from '../Components/images/chicken30-removebg-preview.png'
import chicken31 from '../Components/images/chicken31-removebg-preview.png'
import '../App.css';
import ItemCard from '../Components/ItemCard';

const chicken=[
  {
    "name":"Extra Crusted Chicken",
    "picture":chicken1,
    "id":17,
    "ratings": 3,
    "price": 11
    
  },
  {
    "name":"Braised Chicken",
    "picture":chicken2,
    "id":18,
    "ratings": 3,
    "price": 6


  },
  {
    "name":"Crusted chicken",
    "picture":chicken3,
    "id":19,
    "ratings": 4,
    "price": 8


  },
  {
    "name":"1-piece chicken",
    "picture":chicken4,
    "id":20,
    "ratings": 5,
    "price": 15


  },
  {
    "name":"Chicken Bucket",
    "picture":chicken5,
    "id":21,
    "ratings": 4,
    "price": 12


  },
  {
    "name":"Chicken Bucket dip",
    "picture":chicken6,
    "id":22,
    "ratings": 4,
    "price": 13


  },
  {
    "name":"Maxi Antracht chicken",
    "picture":chicken7,
    "id":23,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Maxi Antracht chicken",
    "picture":chicken20,
    "id":24,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Maxi Antracht chicken",
    "picture":chicken22,
    "id":25,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Maxi Antracht chicken",
    "picture":chicken23,
    "id":26,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Maxi Antracht chicken",
    "picture":chicken24,
    "id":27,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Maxi Antracht chicken",
    "picture":chicken25,
    "id":28,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Maxi Antracht chicken",
    "picture":chicken26,
    "id":29,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Maxi Antracht chicken",
    "picture":chicken27,
    "id":30,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Maxi Antracht chicken",
    "picture":chicken28,
    "id":31,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Maxi Antracht chicken",
    "picture":chicken29,
    "id":32,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Maxi Antracht chicken",
    "picture":chicken30,
    "id":33,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Maxi Antracht chicken",
    "picture":chicken31,
    "id":34,
    "ratings": 3,
    "price": 10


  }
  
]
function Chicken() {
  
    
     
 
      return (
        <div className='dishitemContainer'>
    {
      chicken.map((e)=>{
        return(
          <ItemCard imgSrc={e.picture} name={e.name} ratings={e.ratings} price={e.price} ItemsId={e.id} />
        )

      })
    }
    </div> 
       )
}
  


export {chicken,Chicken} 
