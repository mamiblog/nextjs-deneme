import React from "react";
import Post from "@/components/card";

const products = [
  {
    id: 1,
    title: "Ürün 1",
    description: "Açıklama 1",
  },
  {
    id: 2,
    title: "Ürün 2",
    description: "Açıklama 2",
  },
  {
    id: 2,
    title: "Ürün 2",
    description: "Açıklama 2",
  },
  {
    id: 2,
    title: "Ürün 2",
    description: "Açıklama 2",
  },
  {
    id: 2,
    title: "Ürün 2",
    description: "Açıklama 2",
  },
];

export default function Page() {
  return (
    <>
      <div className="flex justify-center text-5xl mt-12 mb-8 text-[#F5A524]">
        ÜRÜNLER
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 mt-8">
        {products.map((product) => (
          <Post
            key={product.id}
            title={product.title}
            description={product.description}
            imagr={product.image}
          />
        ))}
      </div>
    </>
  );
}
