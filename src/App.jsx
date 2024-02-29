import { Card } from "./components/card/card";
import { StoreProducts } from "./components/store-products/store-products";
import { productss } from "./data/data-product";
import React from "react";


function App() {


  return (
    <div className="container relative">
      <StoreProducts/>
      <div className="grid grid-cols-4 gap-5">
        {productss.map((product) => (
          <Card key={product.id} image={product.image} title={product.title} id={product.id} price={product.price} count={product.count}/>
        ))}
      </div>
     
    </div>
  );
}

export default App;
