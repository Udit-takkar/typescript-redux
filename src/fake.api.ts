import {Product} from './products/ProductsSlice'

const validateProduct=(product: Product) :Promise<Product> =>{
    return new Promise((resolve, reject) =>{
       setTimeout(() =>{
       if(product.title.length===0){
        reject('No title specified')
    }
    if(product.price<=0){
        reject('Invalid')
    }
    resolve(product)
       
      },500 )
   
    })
}

export default validateProduct