import React from 'react'
import pizza1 from '../Components/images/pepperonipizza-removebg-preview.png'
import pizza2 from '../Components/images/pizza2-removebg-preview.png'
import pizza3 from '../Components/images/pizzaa.png'
import pizza4 from '../Components/images/pizza5-removebg-preview.png'
import pizza5 from '../Components/images/pizza6-removebg-preview.png'
import pizza6 from '../Components/images/pizza7-removebg-preview.png'
import pizza7 from '../Components/images/pizza8-removebg-preview.png'
import pizza8 from '../Components/images/pizza9-removebg-preview.png'
import pizza9 from '../Components/images/pizza10-removebg-preview.png'
import pizza14 from '../Components/images/pizza14-removebg-preview.png'
import pizza15 from '../Components/images/pizza15-removebg-preview.png'
import pizza16 from '../Components/images/pizza16-removebg-preview.png'
import pizza17 from '../Components/images/pizza17-removebg-preview.png'
import pizza18 from '../Components/images/pizza18-removebg-preview.png'
import pizza19 from '../Components/images/pizza19-removebg-preview.png'
import pizza20 from '../Components/images/pizza20-removebg-preview.png'
import pizza22 from '../Components/images/pizza22-removebg-preview.png'
import pizza23 from '../Components/images/pizza23-removebg-preview.png'
import pizza24 from '../Components/images/pizza24-removebg-preview.png'
import '../App.css';
import ItemCard from '../Components/ItemCard';

const pizza=[
  {
    "name":"Crux pizza",
    "picture":pizza1,
    "id":75,
    "ratings": 3,
    "price": 11
    
  },
  {
    "name":"Mini pizza",
    "picture":pizza2,
    "id":76,
    "ratings": 3,
    "price": 6


  },
  {
    "name":"Mini Cheese",
    "picture":pizza3,
    "id":78,
    "ratings": 4,
    "price": 8


  },
  {
    "name":"Large pizza ",
    "picture":pizza4,
    "id":79,
    "ratings": 5,
    "price": 15


  },
  {
    "name":"Veggie pizza",
    "picture":pizza5,
    "id":80,
    "ratings": 4,
    "price": 12


  },
  {
    "name":"Brisket pizza",
    "picture":pizza6,
    "id":81,
    "ratings": 4,
    "price": 13


  },
  {
    "name":"Kubie pizza",
    "picture":pizza7,
    "id":82,
    "ratings": 3,
    "price": 10


  }

  ,
  {
    "name":"Kubie pizza",
    "picture":pizza8,
    "id":83,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Kubie ",
    "picture":pizza9,
    "id":84,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Kubie ",
    "picture":pizza14,
    "id":85,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Kubie ",
    "picture":pizza15,
    "id":86,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Kubie ",
    "picture":pizza16,
    "id":87,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Kubie ",
    "picture":pizza17,
    "id":88,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Kubie ",
    "picture":pizza18,
    "id":89,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Kubie ",
    "picture":pizza19,
    "id":90,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Kubie ",
    "picture":pizza20,
    "id":91,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Kubie ",
    "picture":pizza22,
    "id":92,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Kubie ",
    "picture":pizza23,
    "id":93,
    "ratings": 3,
    "price": 10


  }
  ,
  {
    "name":"Kubie ",
    "picture":pizza24,
    "id":94,
    "ratings": 3,
    "price": 10


  }


]


function Pizzapage() {

 
 
      return (
        <div className='dishitemContainer'>
    {
      pizza.map((e)=>{
        return(
          <ItemCard imgSrc={e.picture} name={e.name} ratings={e.ratings} price={e.price}  ItemsId={e.id}/>
        )

      })
    }
    </div> 
       )
}

export {Pizzapage,pizza}
