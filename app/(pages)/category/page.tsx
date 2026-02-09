import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";

import cate1 from "../../img/cate1.png";
import cate2 from "../../img/cate2.png";
import cate3 from "../../img/cate3.png";
import cate4 from "../../img/cate4.png";
import cate5 from "../../img/cate5.png";
import cate6 from "../../img/cate6.png";
import cate7 from "../../img/cate7.png";
import Card from "./card";

interface CategoryItem {
  id: number;
  title: string;
  price?: string;
  img: string | StaticImageData;
}

const Category = async () => {
  const categories: CategoryItem[] = [
    { id: 1, title: "Mobiles", img: cate1 },
    { id: 2, title: "Laptops", img: cate2 },
    { id: 3, title: "Headphones", img: cate3 },
    { id: 4, title: "Monitors & TVs", img: cate4 },
    { id: 5, title: "Speakers", img: cate5 },
    { id: 6, title: "Nike, Adidas", price: "MIN 40% OFF", img: cate6 },
    { id: 7, title: "PlayStation 5", price: "MIN 25% OFF", img: cate7 },
  ];

  return (
    <section className="w-[93.5%] mx-auto py-12">
      <div className="flex justify-between items-center mb-10 border-b pb-4 px-3">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Trending Categories
        </h2>
        <Link
          href="/categories"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Show More <RightOutlined className="text-xs" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {categories.slice(0, 5).map((item) => (
          <Card
            key={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 items-center justify-center w-full mt-20 p-5 gap-10 ">
        {categories.slice(5, 7).map((items) => (
          <div
            key={items.id}
            className="flex items-center justify-center flex-col gap-2 bg-[#fafafa] rounded-3xl h-[370]"
          >
            <h1>{items.title}</h1>
            <p>{items.price}</p>
            <Image src={items.img} alt="" />
          </div>
        ))}
        <div></div>
      </div>
    </section>
  );
};

export default Category;
