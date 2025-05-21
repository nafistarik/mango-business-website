import React from "react";
import { Button } from "../ui/button";

const OutlineButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      size="lg"
      variant="outline"
      className="border-2 border-leaf-500 text-leaf-600 hover:text-leaf-800 hover:border-leaf-500 hover:bg-leaf-100 text-lg transition-all duration-300 ease-in-out"
    >
      {children}
    </Button>
  );
};

export default OutlineButton;
