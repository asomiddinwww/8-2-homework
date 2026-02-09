"use client";

import React, { useState } from "react";
import {
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Input, Drawer } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const menuItems = ["About", "Shop", "Categories", "Help"];

  return (
    <header className="w-full py-4 md:py-8 md:pt-10 bg-white">
      <div className="w-[92.5%] m-auto flex items-center justify-between gap-2">
        <div className="flex-shrink-0">
          <h1 className="text-[20px] xs:text-[24px] sm:text-[28px] md:text-[31px] font-[700] m-0">
            ShopVerse
          </h1>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-10 text-[18px] xl:text-[20px] mb-0 list-none">
            {menuItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-blue-500 transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-5">
          <div className="hidden md:block w-[180px] lg:w-[250px]">
            <Input
              size="large"
              className="rounded-[50px]! px-3.5! bg-[#d9d9d9]! border-none!"
              prefix={<SearchOutlined />}
              placeholder="Search..."
            />
          </div>

          <div className="flex items-center gap-2.5 xs:gap-4 sm:gap-5">
            <SearchOutlined className="text-[20px] md:hidden! cursor-pointer" />
            <HeartOutlined className="text-[20px] sm:text-[25px]! cursor-pointer" />

            <div className="relative">
              <ShoppingOutlined className="text-[20px] sm:text-[25px]! cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>

            <div className="lg:hidden flex items-center">
              <MenuOutlined
                className="text-[22px]! cursor-pointer"
                onClick={showDrawer}
              />
            </div>
          </div>
        </div>
      </div>

      <Drawer
        title={<span className="font-bold text-lg">ShopVerse</span>}
        placement="right"
        onClose={onClose}
        open={open}
        closeIcon={<CloseOutlined />}
        styles={{
          header: { borderBottom: "1px solid #f0f0f0" },
          body: { padding: "24px" },
        }}
      >
        <div className="flex flex-col gap-6">
          <ul className="flex flex-col gap-5 text-[18px] font-medium p-0 m-0 list-none">
            {menuItems.map((item) => (
              <li
                key={item}
                className="border-b border-gray-100 pb-3 cursor-pointer hover:pl-2 transition-all active:text-blue-500"
                onClick={onClose}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <p className="text-gray-400 text-sm">Account Settings</p>
            <p className="text-gray-400 text-sm mt-2">Support Center</p>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
