import React from "react";
import Image from "next/image";
import { ProductType } from "./page";

interface CardProps {
  product: ProductType;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="bg-[#F8F9FA] rounded-3xl p-6 flex flex-col items-center transition-all hover:shadow-lg h-full border border-transparent hover:border-gray-100">
      <div className="h-44 w-full relative flex items-center justify-center mb-4">
        <Image
          src={product.image}
          alt={product.name}
          className="max-h-full w-auto object-contain mix-blend-multiply"
          priority={product.id <= 4}
        />
      </div>

      <div className="text-center">
        <div className="flex justify-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={
                i < product.rating ? "text-yellow-400" : "text-gray-300"
              }
            >
              ★
            </span>
          ))}
        </div>

        <h3 className="text-sm font-semibold text-gray-800 mb-2 min-h-[40px]">
          {product.name}
        </h3>

        <div className="flex items-center justify-center gap-2">
          <span className="text-orange-600 font-bold text-lg">
            ${product.price}
          </span>
          {product.oldPrice && (
            <span className="text-gray-400 text-sm line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
