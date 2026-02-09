import React from "react";
import Card from "./Card";
import pro1 from "../../img/pro1.png";
import pro2 from "../../img/pro2.png";
import pro3 from "../../img/pro3.png";
import pro4 from "../../img/pro4.png";
import pro5 from "../../img/pro5.png";
import pro6 from "../../img/pro6.png";
import pro7 from "../../img/pro7.png";
import pro8 from "../../img/pro8.png";

export interface ProductType {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: any;
}

const productsData: ProductType[] = [
  {
    id: 1,
    name: "Magnetic Case",
    price: 13.49,
    oldPrice: 18.99,
    rating: 5,
    image: pro1,
  },
  {
    id: 2,
    name: "UCOMX Nano 3 in 1",
    price: 39.99,
    oldPrice: 49.99,
    rating: 4,
    image: pro2,
  },
  {
    id: 3,
    name: "NB Fresh Foam",
    price: 71.99,
    oldPrice: 81.99,
    rating: 5,
    image: pro3,
  },
  {
    id: 4,
    name: "Bose QuietComfort",
    price: 379.0,
    oldPrice: 429.0,
    rating: 5,
    image: pro4,
  },
  {
    id: 5,
    name: "BUGANI BT Speaker",
    price: 59.93,
    oldPrice: 129.98,
    rating: 5,
    image: pro5,
  },
  {
    id: 6,
    name: "Galaxy Tab A9+",
    price: 169.99,
    oldPrice: 219.99,
    rating: 4,
    image: pro6,
  },
  {
    id: 7,
    name: "Acer Aspire 1",
    price: 228.27,
    oldPrice: 300.0,
    rating: 3,
    image: pro7,
  },
  {
    id: 8,
    name: "Redragon M810",
    price: 32.99,
    oldPrice: 39.99,
    rating: 3,
    image: pro8,
  },
];

const Products = () => {
  return (
    <section className="w-[93.5%] mx-auto py-12">
      <div className="w-full flex justify-between items-center px-2 mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Popular Products</h2>
        <a
          href="#"
          className="text-gray-600 hover:text-black flex items-center gap-2 font-medium"
        >
          div Show More <span className="text-xl">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
