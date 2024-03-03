import Image from "next/image";
import React from "react";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: any; // Interface for rating details (optional)
}

const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
}: ProductProps) => {
  return (
    <div className=" rounded-sm relative  m-5 bg-white z-30 p-10  flex flex-col items-center ">
      <h5 className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </h5>
      <div className="relative w-full h-[40vh] ">
        <Image src={image} alt="image" fill className="object-contain" />
      </div>
      <title className="my-3">{title}</title>
      <div>⭐⭐⭐⭐</div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <h4>
        <span>₹</span> {price}
      </h4>
      <button className="mt-auto w-full  button">Add to Cart </button>
    </div>
  );
};

export default ProductCard;
