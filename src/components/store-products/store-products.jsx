import React from 'react'
import { Modal } from '../modal/modal';
import { useSelector } from 'react-redux';
import { StoreCard } from '../store-card/store-card';

export const StoreProducts = () => {
    let [isOpen, setIsOpen] = React.useState(false);
    const {products} = useSelector((state) => state.productReducer);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="py-2 px-10 rounded-lg fixed top-0 right-10 bg-gray-500 text-white"
      >
        Open Cart
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {products.map((item) =>(
            <StoreCard key={item.id} {...item}/>
        ))}
      </Modal>
    </>
  );
}
