import React from "react";

const Name = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-xl font-bold text-leaf-700 mb-2">{children}</h1>;
};

export default Name;
