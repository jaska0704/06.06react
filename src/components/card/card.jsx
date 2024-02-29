import React, { useEffect } from "react";
import {
  add_product,
  deletStoreCard,
} from "../../redux/reducers/product-reducer";
import { useDispatch, useSelector } from "react-redux";

export const Card = ({ image, id, title, price, count }) => {
  const [addbutton, setAddButton] = React.useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    setAddButton(products.find((item) => item.id === id));
  }, [products, id]);

  const addProduct = () => {
    dispatch(add_product({ id, title, price, image, count }));
    setAddButton(true);
  };

  const deleteItemCard = () => {
    dispatch(deletStoreCard({ type: "remove", id }));
    setAddButton(false);
  };

  return (
    <div className=" p-6 w-[260px] h-[450px] shadow-xl  flex flex-col justify-between items-center border rounded-lg">
      <div>
        <img className=" w-[99%] h-[260px]" src={image} alt="image" />
      </div>
      <h1 className="text-sky-600">{title.slice(0, 30)}</h1>
      <strong>$ {price}</strong>
      {addbutton ? (
        <button
          onClick={deleteItemCard}
          className="block bg-red-500 w-full py-2 rounded-md"
        >
          Remove
        </button>
      ) : (
        <button
          onClick={addProduct}
          className="block text-white bg-green-500 w-full py-2 rounded-md"
        >
          Add
        </button>
      )}
    </div>
  );
};

