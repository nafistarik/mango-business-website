import React from "react";
import { Button } from "../ui/button";

export default function GreenButton({
  children,
  size = "lg",
}: {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg" | "icon";
}) {
  return (
    <div>
      <Button
        size={size}
        className={`bg-leaf-500 hover:bg-leaf-600 w-full text-${size} text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out`}
      >
        {children}
      </Button>
    </div>
  );
}
