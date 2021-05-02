import React from 'react';


import ProductsList from './products/ProductsList';
import ProductsForm from './products/ProductsForm';
import Cart from './cart/cart';

function App() {
  return (
    <div className="App">
      <ProductsList />
      <ProductsForm />
      <Cart />
    </div>
  );
}

export default App;
