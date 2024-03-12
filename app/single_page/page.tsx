"use client";
import { getSingleProduct } from "@/lib/actions/product";
import { addToCart } from "@/store/BasketSlice";
import { useAppDispatch } from "@/store/store";
import Image from "next/image";
import React from "react";

type props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ searchParams }: props) => {
  const id = searchParams?.id;
  const numId = Number(id);
  const dispach = useAppDispatch();

  const handleAddToCart = () => {
    const store = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    };
    dispach(addToCart(store));
  };

  const fetchProduct = async () => {
    const resp = await fetch(`https://fakestoreapi.com/products/${numId}`);

    if (!resp.ok) {
      throw new Error("Failed to fetch data");
    }

    const productData = await resp.json();

    return productData;
  };

  const product = await fetchProduct();

  return (
    <div className="w-full pt-32 bg-white grid grid-cols-5 h-screen ">
      {/* Left  */}
      <div className=" p-10 col-span-2">
        <Image src={product.image} alt="image" width={500} height={100} />
      </div>
      {/* Middle  */}
      <div className=" pt-10 col-span-2">
        <div className="border-b pb-3">
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <div className="py-3 space-y-1 border-b">
          <h1 className="text-xl font-semibold my-3">
            <span>₹</span> {product.price + 278}
          </h1>
          <h5 className="text-sm">Inclusive of all taxes</h5>
          <h5 className="text-sm">No Cost EMI available</h5>
        </div>
        <div>
          <h3 className="font-semibold">About this item</h3>
          <p className="max-w-[700px] capitalize">{product.description}</p>
        </div>
      </div>
      {/* Right  */}
      <div className="border p-3 m-10 h-[40vh] col-span-1 ">
        <div>
          <h5>Price</h5>
          <h1 className="text-xl font-semibold my-3">
            <span>₹</span> {product.price + 278}
          </h1>
        </div>
        <div>
          <p>
            Save extra with no cost EMI <br /> Get by October 7
          </p>
          <h6 className="font-semibold text-green-400">In Stock</h6>
        </div>
        <div>
          <div className="w-full mt-3">
            <button
              className="mt-auto  w-full  button"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
          <div className="w-full mt-3">
            <button className="p-2 w-full text-xs md:text-sm bg-gradient-to-b from-sky-200 to-sky-400 border border-sky-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-sky-500 active:to-sky-600 ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
