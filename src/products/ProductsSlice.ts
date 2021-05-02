
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../store"
import ValidateProduct from '../fake.api'

export interface Product{
    title:string;
    price:number;
    id:string;
 } 

 export enum ValidationState{
     Fulfilled,
     Rejected,
     Pending
 }

interface ProductSliceState {
    products:Product[],
    validationState?:ValidationState,
    errorMessage?:string
}

export const addProductAsync=createAsyncThunk('products/addProduct',async(initalProduct:Product)=>{
    const product=await ValidateProduct(initalProduct)
    return product
})

const initalProduct:Product[] =[
    { title:"venom",price:500,id:'v'},
    { title:"mercy",price:600,id:'m'},
    { title:"peaches",price:700,id:'p'},
 ]

const initialState:ProductSliceState={
    products:initalProduct,
    validationState:undefined,
    errorMessage:undefined,
}

 const ProductsSlice=createSlice({
     name:'Products',
     initialState,
     reducers:{
         addProduct: (state,action:PayloadAction<Product>)=>{
            state.products.push(action.payload)
         
        },
        deleteProduct: (state,action:PayloadAction<string>)=>{
           
           return ({
               ...state,
               products:state.products.filter((product:Product) =>{
                return product.id!==action.payload
            })
           })
        }
     },
     extraReducers:builder=>{
         builder.addCase(addProductAsync.fulfilled,(state,action)=>({
            ...state,
            validationState:ValidationState.Fulfilled,
            errorMessage:undefined,
            products:[...state.products,action.payload],
         }))
         builder.addCase(addProductAsync.pending,(state,action)=>({
          ...state,
          validationState:ValidationState.Pending,
          errorMessage:undefined
         }))
         builder.addCase(addProductAsync.rejected,(state,action)=>({
            ...state,
            validationState:ValidationState.Rejected,
            errorMessage:action.error.message
         }))
     }
 })

 export default ProductsSlice.reducer
 export const {addProduct} =ProductsSlice.actions
 export const {deleteProduct} = ProductsSlice.actions
 export const getProductsSelector=(state:RootState)=>state.products.products
 export const getErrorMessageSelector=(state:RootState)=>state.products.errorMessage