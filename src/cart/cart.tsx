import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../storehooks';
import { getCartProductsSelector, getTotalPrice, removeFromCart } from './cartSlice';

interface CartProps{

}

const Cart: React.FC<CartProps> =({})=>{
    const dispatch=useAppDispatch()
    const cartProducts=useSelector(getCartProductsSelector)
    const handleDeleteCartProduct=((id :string)=>dispatch(removeFromCart(id)))
    return(
        <>
        <h3>Cart</h3>
        <h2>{getTotalPrice}</h2>
        {cartProducts.map((product)=>{
            return <li key={product.id} >{product.title} {product.amount} <button onClick={() =>handleDeleteCartProduct(product.id)} >Remove from Cart</button> </li> 
        })}
        </>
    )
}


export default Cart 
