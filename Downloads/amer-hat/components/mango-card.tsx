import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Calendar } from "lucide-react";
import type { Mango } from "@/data/mango-data";
import OneByOneAnimation from "./framer-motion/OneByOneAnimation";
import GreenButton from "./buttons/GreenButton";
import Title from "./texts/Title";
import Description from "./texts/Description";

interface MangoCardProps {
  mango: Mango;
  index: number;
}

export default function MangoCard({ mango, index }: MangoCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <OneByOneAnimation index={index}>
        {" "}
        <div className="relative aspect-[5/3] bg-leaf-200">
          <Image
            src={mango.image || "/placeholder.svg"}
            alt={mango.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="p-6">
          <Title>{mango.name}</Title>
          <Description>{mango.description}</Description>
          <div className="flex items-center gap-2 my-2">
            <Calendar className="h-5 w-5 text-leaf-500" />
            <span className="text-gray-600">মৌসুম: {mango.season}</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-bold text-leaf-800">
              {mango.pricePerKg}{" "}
              <span className="text-sm font-normal">/কেজি</span>
            </p>

            <GreenButton size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              অর্ডার করুন
            </GreenButton>
          </div>
        </div>
      </OneByOneAnimation>
    </div>
  );
}
