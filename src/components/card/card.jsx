import React from "react";
import { add_product } from "../../redux/reducers/product-reducer";
import { useDispatch } from "react-redux";

export const Card = (product) => {
  const [addbutton, setAddButton] = React.useState(true);
  const dispatch = useDispatch();
  const addProduct = () => {
    dispatch(add_product(product));
  };

  return (
    <div className=" p-6 w-[260px] h-[450px] shadow-xl  flex flex-col justify-between items-center border rounded-lg">
      <div>
        <img className=" w-[99%] h-[260px]" src={product.image} alt="image" />
      </div>
      <h1 className="text-sky-600">{product.title}</h1>
      <strong>$ {product.price}</strong>
      {addbutton ? (
        <button
          onClick={() => {
            addProduct();
            setAddButton(false);
          }}
          className="block bg-green-500 w-full py-2 rounded-md"
        >
          Add
        </button>
      ) : (
        <button
          onClick={() => {
            setAddButton(true);
          }}
          className="block text-white bg-red-500 w-full py-2 rounded-md"
        >
          Remove
        </button>
      )}
    </div>
  );
};
