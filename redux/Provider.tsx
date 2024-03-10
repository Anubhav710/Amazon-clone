"use client";
import React from "react";
import { Provider as MyProvider } from "react-redux";
import { store } from "./Store";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <MyProvider store={store}>{children}</MyProvider>;
};

export default Provider;
