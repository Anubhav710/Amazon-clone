import Image from "next/image";

import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Banner />
      <ProductFeed />
    </main>
  );
}
