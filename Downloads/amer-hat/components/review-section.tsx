"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviewList } from "@/data/review-data";
import SlideInBottom from "./framer-motion/SlideInBottom";
import Header from "./texts/Header";
import Description from "./texts/Description";
import Name from "./texts/Name";
import OneByOneAnimation from "./framer-motion/OneByOneAnimation";

export default function ReviewSection() {
  return (
    <section className="py-16 md:py-24 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SlideInBottom>
            <Header>গ্রাহকদের মতামত</Header>
            <div className="flex justify-center">
              {" "}
              <Description>
                আমাদের সন্তুষ্ট গ্রাহকদের অভিজ্ঞতা জানুন। তাদের মতামত আমাদের
                সেবা আরও উন্নত করতে সাহায্য করে।
              </Description>
            </div>
          </SlideInBottom>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewList.map((review, index) => (
            <div className="bg-gradient-to-r from-white to-yellow-50 p-6 rounded-2xl shadow-lg">
              <OneByOneAnimation key={index} index={index}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Name>{review.name}</Name>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <Description>{review.comment}</Description>
              </OneByOneAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
