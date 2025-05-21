import { mangoList } from "@/data/mango-data";
import MangoCard from "@/components/mango-card";
import SlideInBottom from "./framer-motion/SlideInBottom";
import Header from "./texts/Header";
import Description from "./texts/Description";

export default function MangoList() {
  return (
    <section
      id="mangoes"
      className="py-16 md:py-24 "
      // bg-gradient-to-b from-yellow-50 to-white
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SlideInBottom>
            <Header>আমাদের আম</Header>
            <div className="flex justify-center">
              {" "}
              <Description>
                আমরা বাংলাদেশের বিভিন্ন অঞ্চল থেকে সংগৃহীত সেরা মানের আম সরবরাহ
                করি। আমাদের আম তাজা, রসালো এবং স্বাদে অতুলনীয়।
              </Description>
            </div>
          </SlideInBottom>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mangoList.map((mango, index) => (
            <MangoCard key={mango.name} mango={mango} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
