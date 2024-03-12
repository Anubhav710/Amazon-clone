import { fetchProduct } from "@/lib/actions/product";
import React from "react";
import ProductCard from "./shared/ProductCard";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: any; // Interface for rating details (optional)
}

const ProductFeed = async () => {
  const data = await fetchProduct();

  return (
    <div className="md:-mt-36">
      <div className=" grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid-cols-1">
        {data.map((product: ProductProps) => (
          <ProductCard
            key={product.id}
            id={product.id}
            category={product.category}
            description={product.description}
            image={product.image}
            price={product.price + 278}
            title={product.title}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductFeed;
