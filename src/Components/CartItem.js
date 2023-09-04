import { AddRounded, Height, RemoveRounded } from '@mui/icons-material'
import React, { useState,useEffect,useContext } from 'react'
import { actionType } from './reducer';
import { useStateValue } from './StateProvider';
import { borderBottomColor, height } from '@mui/system';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './cartactions'
import { TotalPriceContext } from '../App';

let cartItems = [];

function CartItem({ItemId,name,imgSrc,price}) {
  const totalPrice = useContext (TotalPriceContext)
    const [qty, setQty] = useState(1);
    const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
    totalPrice.ChangeTotal(itemPrice)


   
  const [{ cart, total }, dispatch] = useStateValue();
  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price));
    totalPrice.ChangeTotal(itemPrice)
  }, [qty]);

  const updateQty = (action, id) => {
    if (action == "add") {
      setQty(qty + 1);
   
    
    } 

        
  
    else if (action=='remove') {

  if (qty == 1) {
        // initial state value is one so you need to check if 1 then remove it
        setItemPrice(0);
        totalPrice.ChangeTotal(0)
     
          cartItems.pop(id);
          dispatch({
            type: actionType.SET_CART,
            cart: cartItems,
          });
  
          dispatch({
              type: actionType.SET_TOTAL,
              total: 0,
            });
      


    }
    else{
      setQty(qty - 1);
    
    }
  }
  };

  
   
    

    

  return (
    <div className="cartItem" id={ItemId}>
    <div className="imgBox">
    <img src={imgSrc} alt=""  style={{height:150 ,width:150,}}/>
    </div>
    <div className="itemSection">
      <h2 className="itemName">{name}</h2>
      <div className="itemQuantity">
        <span>x {qty}</span>
        <div className="quantity">
          <RemoveRounded
            className="itemRemove"
            onClick={() => updateQty("remove", ItemId)}
          />
          <AddRounded
            className="itemAdd"
            onClick={() => updateQty("add", ItemId)}
          />
        </div>
      </div>
    </div>
    <p className="itemPrice">
      <span className="dolorSign">$</span>{" "}
      <span className="itemPriceValue">{itemPrice}</span>
    </p>
  </div>
  )
}

export default CartItem
