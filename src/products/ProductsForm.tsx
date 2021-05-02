import React, {ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../storehooks';
import {addProduct, addProductAsync, Product,getErrorMessageSelector} from "./ProductsSlice"


interface ProductsFormProps{

}


const ProductsForm: React.FC<ProductsFormProps> =({})=>{
  const dispatch=useAppDispatch()
  const errorMessage=useSelector(getErrorMessageSelector)
   const[products,setProducts]=useState<Product>({
     title:"",price:0,id:""
   })
   const handleChange=({target:{name,value}}:React.ChangeEvent<HTMLInputElement>)=>{
     setProducts(prev=>{
       
       (prev as any)[name] = value
       const newValue={...prev}
    
       return newValue

     })
   }
   const handleSubmit=(e:React.FormEvent)=>{
     e.preventDefault();
     dispatch(addProductAsync(products))
     setProducts({
      title:"",price:0,id:""
    })

   }
   const {title,price,id} =products
    return (
      <div>
        <h2>Add Game to the store</h2>
        {errorMessage &&  <span>"error :" {errorMessage}</span>}
        <form onSubmit={handleSubmit}>
          <input value={title} onChange={handleChange} type="text" placeholder="title" name="title" />
          <input value={price} onChange={handleChange} type="number" placeholder="price"  name="price" />
          <input value={id}  onChange={handleChange} type="text" placeholder="id" name="id" />
          <button type="submit" > Submit</button>
        </form>
      
      </div>
    );
}


export default ProductsForm 