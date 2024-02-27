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
          <Card key={product.id} {...product} />
        ))}
      </div>
     
    </div>
  );
}

export default App;
