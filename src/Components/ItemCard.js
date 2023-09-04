import { AddRounded, Category, Favorite } from '@mui/icons-material'
import { StarRounded } from '@mui/icons-material'
import React, {useEffect, useState} from 'react'
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';
import {burgers} from '../pages/burger'

import { chicken } from '../pages/./chicken';
import { chips } from '../pages/./chips';
import { drinks } from '../pages/./drinks';
import { pizza } from '../pages/./pizzapage';
let cartData = []

function ItemCard({imgSrc, name, ratings, price ,ItemsId}) {
    const [isFavorite, setFavorite] =useState(false);
    const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
    const [isCart, setCart] = useState(null);
    const [{}, dispatch]= useStateValue();
    
const mergedArray = [...burgers, ...chips, ...drinks, ...pizza];

    useEffect(() => {
        if(isCart){
            cartData.push(isCart)
            dispatch({
                type: actionType.SET_CART,
                cart: cartData,
            })
        }
    },[isCart])

    const handleClick=(value) =>{
        setCurrentValue(value)
    }



    
  return (
    <div className ="itemCard" id={ItemsId}>
        <div 
        className={`isFavorite ${isFavorite ? "active" : ""}`}
        onClick={() => setFavorite(!isFavorite)}
        >
            <Favorite/>
        </div>
        <div className="imgBox">
            <img src={imgSrc} alt="" className="itemImg"/>
        </div>
        <div className="itemContent">
            <h3 className="itemName">{name}</h3>
        <div className="bottom">
        <div className="ratings">
            {Array.apply(null, {length : 5}).map((e,i) => (
                <i key={i} className={`rating ${currentValue > i ? "orange" : "gray"}`}
                onClick={() => handleClick(i + 1)}
                >
                    <StarRounded/>
                </i>
            )) }
            <h3 className="price"><span>$ </span>{price}</h3>
        </div>
        <i className="addtoCart"  onClick={()=>{setCart(mergedArray.find((n)=>n.id===ItemsId  ))}}>
            <AddRounded/>
        </i>
        </div>
        </div>
    </div>
  )
}

export default ItemCard
