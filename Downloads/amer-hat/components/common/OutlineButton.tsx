import React from "react";
import { Button } from "../ui/button";

const OutlineButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      size="lg"
      variant="outline"
      className="border-leaf-500 text-leaf-700 hover:border-leaf-300 hover:bg-leaf-50 text-lg transition-all duration-300 ease-in-out"
    >
      {children}
    </Button>
  );
};

export default OutlineButton;
