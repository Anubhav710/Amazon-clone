import { addToCart, removeFromCart } from "@/store/BasketSlice";
import { useAppDispatch } from "@/store/store";
import Image from "next/image";
import React from "react";

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: any; // Interface for rating details (optional)
}

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
}: ProductProps) => {
  const dispach = useAppDispatch();

  const handleAddToCart = () => {
    const store = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    dispach(addToCart(store));
  };

  const handleRemoveItem = (id: number) => {
    dispach(removeFromCart({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        alt="image"
        height={200}
        width={200}
        objectFit="contain"
      />
      {/* Middle  */}
      <div className="col-span-3 mx-5 mt-10">
        <p>{title}</p>
        <div>⭐⭐⭐</div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <h4>
          <span>₹</span> {price}
        </h4>
      </div>
      <div className="flex flex-col space-y-2 my-auto  ">
        <button
          className="mt-auto w-full  button"
          onClick={() => {
            handleAddToCart();
          }}
        >
          Add to Cart
        </button>
        <button
          className="mt-auto w-full  button"
          onClick={() => handleRemoveItem(id)}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
