import MangoCard from "@/components/cards/mango-card";
import { mangoList } from "@/data/mango-data";
import SlideInBottom from "../../components/framer-motion/SlideInBottom";
import Description from "../../components/texts/Description";
import Header from "../../components/texts/Header";

export default function MangoList() {
  return (
    <section id="mangoes" className="pt-24 min-h-screen">
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
