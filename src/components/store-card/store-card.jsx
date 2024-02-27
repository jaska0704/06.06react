import React from "react";
import { useDispatch } from "react-redux";
import { toggleAnmount, deletStoreCard } from "../../redux/reducers/product-reducer";


export const StoreCard = ({
  id,
  title,
  price,
  image,
  userCount,
  userPrice,
}) => {

    const dispatch = useDispatch()
   
  return (
    <div className="flex items-center gap-[40px] border mb-1 rounded-lg relative">
      <div className="w-[80px] h-[100px] flex items-center justify-center">
        <img src={image} alt="img" />
      </div>
      <div>
        <h2>{title.slice(0, 18)}</h2>
        <strong>$ {userPrice}</strong>
        <div className="flex items-center gap-5">
          <button onClick={()=> dispatch(toggleAnmount({type: "add", id}))} className="py-1 px-3 rounded-md bg-teal-800 text-white">
            +
          </button>
          <span>{userCount}</span>
          <button className="py-1 px-3 rounded-md bg-teal-800 text-white">
            -
          </button>
        </div>
      </div>
      <button onClick={deletStoreCard} className="py-1 px-2 rounded-lg bg-red-500 absolute top-[10px] right-[10px]">X</button>
    </div>
  );
};
