import Image from "next/image";
import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { menuItems } from "@/constants";

const Header = () => {
  return (
    <header className="w-full  bg-[#131921]">
      {/* Top Navbar  */}
      <div className="flex items-center justify-between py-2 px-2 lg:px-4 ">
        <div className="  mr-2 mt-2 ">
          <Image
            src={"/amazon.png"}
            alt="icon"
            width={120}
            height={40}
            className="cursor-pointer"
          />
        </div>
        {/* Search  */}
        <div className="bg-yellow-300 flex-grow rounded-md h-10 items-center hover:bg-yellow-500 duration-150 sm:flex hidden ">
          <input
            type="text"
            className="p-2 h-full focus:outline-none flex-grow rounded-l-md"
          />
          <MagnifyingGlassIcon className="h-14 p-4 stroke-[2px]" />
        </div>
        {/* Right  */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap   ">
          <div className="cursor-pointer hover:underline ">
            <p>Hello Anubhav Agrawal</p>
            <p className="font-semibold md:text-sm">Account & List</p>
          </div>
          <div className="cursor-pointer hover:underline ">
            <p>Returens</p>
            <p className="font-semibold md:text-sm">& Orders</p>
          </div>
          <div className="cursor-pointer hover:underline relative flex   ">
            <div className="w-4 h-4 rounded-full bg-yellow-400 text-black font-bold text-center absolute md:right-5 right-0 -top-1">
              0
            </div>
            <ShoppingCartIcon className="h-10 " />

            <p className="font-semibold md:text-sm  mt-3 hidden md:block">
              Cart
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Navbar  */}
      <div className="flex items-center text-white text-sm py-2 overflow-hidden px-2 lg:px-4  bg-[#232F3E] whitespace-nowrap space-x-5 ">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} className="flex ">
            {item.name === "All" && <Bars3Icon className="h-5 mr-1" />}
            <span className="inline-block">{item.name}</span>
          </Link>
        ))}
        <Link href={"/"} className="flex ">
          <span className=" pr-2 inline-block ml-5">
            New Launches from Mobiles, Electronics & more | Shop now
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
