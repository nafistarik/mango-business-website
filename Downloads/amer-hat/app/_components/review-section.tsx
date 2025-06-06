import { reviewList } from "@/data/review-data";
import { Star } from "lucide-react";
import Image from "next/image";
import OneByOneAnimation from "../../components/framer-motion/OneByOneAnimation";
import SlideInBottom from "../../components/framer-motion/SlideInBottom";
import Description from "../../components/texts/Description";
import Header from "../../components/texts/Header";
import Name from "../../components/texts/Name";

export default function ReviewSection() {
  return (
    <section className="pt-24 min-h-screen">
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
            <div
              key={index}
              className="bg-gradient-to-b from-white to-leaf-100 p-6 rounded-xl border-2 border-leaf-200"
            >
              <OneByOneAnimation index={index}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
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
                          className={`h-6 w-6 ${
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
