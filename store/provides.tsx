"use client";

import React from "react";
import { Provider as Pro } from "react-redux";
import { store } from "./store";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Pro store={store}>{children}</Pro>;
};
