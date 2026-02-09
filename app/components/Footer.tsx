import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12 px-6 border-t border-gray-100">
      <div className="w-[93.5%] mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col space-y-8 min-w-[200px]">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Shopverse
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-medium">
              @ 2024 Shopverse All Rights Reserved
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 px-3 border border-black rounded-full hover:bg-black hover:text-white transition-all"
            >
              <FacebookOutlined size={30} />
            </a>
            <a
              href="#"
              className="p-2 px-3 border border-black rounded-full hover:bg-black hover:text-white transition-all"
            >
              <InstagramOutlined size={20} />
            </a>
            <a
              href="#"
              className="p-2 px-3 border border-black rounded-full hover:bg-black hover:text-white transition-all"
            >
              <TwitterOutlined size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-12 sm:gap-24 md:gap-32">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
              Download
            </h3>
            <ul className="space-y-3 text-gray-700 text-base md:text-xl font-medium">
              <li className="hover:text-black cursor-pointer transition-colors">
                Windows
              </li>
              <li className="hover:text-black cursor-pointer transition-colors">
                Mac OS
              </li>
              <li className="hover:text-black cursor-pointer transition-colors">
                Android
              </li>
              <li className="hover:text-black cursor-pointer transition-colors">
                iOS
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
              Resources
            </h3>
            <ul className="space-y-3 text-gray-700 text-base md:text-xl font-medium">
              <li className="hover:text-black cursor-pointer transition-colors">
                About
              </li>
              <li className="hover:text-black cursor-pointer transition-colors">
                Shop
              </li>
              <li className="hover:text-black cursor-pointer transition-colors">
                Categories
              </li>
              <li className="hover:text-black cursor-pointer transition-colors">
                Help
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
