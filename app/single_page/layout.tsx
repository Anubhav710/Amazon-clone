import React, { ReactNode } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full h-screen bg-white ">{children}</div>;
};

export default layout;
