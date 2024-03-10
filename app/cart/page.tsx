"use client";
import Cart from "@/components/shared/Cart";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <Cart />
    </div>
  );
};

export default page;
