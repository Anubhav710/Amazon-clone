"use server";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: any; // Interface for rating details (optional)
}

export const fetchProduct = async () => {
  const resp = await fetch("https://fakestoreapi.com/products");

  const productData = await resp.json();

  return productData;
};
