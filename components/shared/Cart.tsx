import { useAppSelector } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CheckoutProduct from "../CheckoutProduct";

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: any; // Interface for rating details (optional)
}

const Cart = () => {
  const items = useAppSelector((store) => store.cartStore.stores);
  return (
    <div className="max-w-screen-2xl lg:flex mx-auto  mt-20 min-h-[91vh] ">
      {/* Left  */}
      <div className="flex-grow m-5 shadow-sm">
        <Image
          loading="lazy"
          src={"/3.jpg"}
          alt="image-1"
          width={1020}
          height={100}
          className="w-full h-[400px] mb-3"
        />

        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 className="text-3xl border-b pb-4">
            {items.length === 0 ? "Your Cart is empty" : "Shopping Cart"}
          </h1>
          {items.map((item, i) => {
            return (
              <CheckoutProduct
                id={item.id}
                category={item.category}
                description={item.description}
                image={item.image}
                price={item.price}
                title={item.title}
                key={i}
              />
            );
          })}
        </div>
      </div>
      {/* Right Side  */}
    </div>
  );
};

export default Cart;
