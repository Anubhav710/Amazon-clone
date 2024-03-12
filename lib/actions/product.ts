"use server";

export const fetchProduct = async () => {
  const resp = await fetch("https://fakestoreapi.com/products");

  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }

  const productData = await resp.json();

  return productData;
};

export const getSingleProduct = async (id: number) => {
  const item = await fetchProduct();
  const singleItem = await item.find((product: any) => product.id === id);
  return singleItem;
};
