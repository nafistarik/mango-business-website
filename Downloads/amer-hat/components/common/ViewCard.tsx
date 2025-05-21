import React from "react";
import PulseInfiniteAnimation from "../framer-motion/PulseInfiniteAnimation";

const ViewCard = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className="bg-leaf-100 p-4 rounded-lg text-center border border-leaf-200 ">
      <PulseInfiniteAnimation>
        <p className="text-3xl font-bold text-leaf-600">{number}</p>
      </PulseInfiniteAnimation>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default ViewCard;
