import React from "react";

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className=" text-lg md:text-xl text-gray-700 max-w-lg mx-auto lg:mx-0">
      {children}
    </p>
  );
};

export default Description;
