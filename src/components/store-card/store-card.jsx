import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleAnmount,
  deletStoreCard,
} from "../../redux/reducers/product-reducer";

export const StoreCard = ({
  id,
  title,
  price,
  image,
  userCount,
  userPrice,
  count,
}) => {
  const dispatch = useDispatch();
  const [showBtn, setShowBtn] = React.useState(false);
  

  const addCount = () => {
    if (userCount <= count) {
      dispatch(toggleAnmount({ type: "add", id }));
    } else {
      setShowBtn(true);
    }
  };

  const removeProduct = () => {
      dispatch(toggleAnmount({ type: "remove", id }));
  };

  const deletProduct = () => dispatch(deletStoreCard({ type: "add", id }));

  return (
    <div className="flex items-center gap-[40px] border mb-1 rounded-lg relative">
      <div className="w-[80px] h-[100px] flex items-center justify-center">
        <img src={image} alt="img" />
      </div>
      <div>
        <h2>{title.slice(0, 9)}</h2>
        <strong>$ {userPrice}</strong>
        <div className="flex items-center gap-5">
          <button
            disabled={showBtn || userCount === count}
            onClick={addCount}
            className="py-1 px-3 rounded-md bg-teal-800 disabled:bg-red-500 text-white"
          >
            +
          </button>
          <span>{userCount}</span>
          {userCount > 1 ? (
            <button
              onClick={removeProduct}
              className={`py-1 px-3 rounded-md  text-white bg-teal-800`}
            >
              -
            </button>
          ) : (
            <button
              onClick={deletProduct}
              className={`py-1 px-3 rounded-md  text-white bg-red-500`}
            >
              Delet
            </button>
          )}
        </div>
      </div>
      <button
        onClick={() => dispatch(deletStoreCard({ type: "add", id }))}
        className="py-1 px-2 rounded-lg bg-red-500 absolute top-[10px] right-[10px]"
      >
        X
      </button>
    </div>
  );
};
