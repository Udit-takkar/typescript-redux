import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addToCart } from '../cart/cartSlice';
import { useAppDispatch } from '../storehooks';
import { getProductsSelector,deleteProduct } from './ProductsSlice';

interface ProductsListProps{

}



const ProductsList: React.FC<ProductsListProps> =({})=>{
    const dispatch=useAppDispatch()
    const products=useSelector(getProductsSelector)
    return (
        <div>
          <h2>Games List</h2>
          {products.map((product)=>{
             return <li key={product.id} >{product.title}  - {product.price} <button onClick={(e)=>dispatch(deleteProduct(product.id))}>Delete</button>
             <button onClick={(e)=>dispatch(addToCart(product))} >Add to Cart</button>
             </li>
          })}

        </div>
    )
}


export default ProductsList 
