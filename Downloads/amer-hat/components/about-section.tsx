import Image from "next/image";
import Header from "./texts/Header";
import SlideInLeft from "./framer-motion/SlideInLeft";
import SlideInRight from "./framer-motion/SlideInRight";
import Description from "./texts/Description";
import ViewCard from "./common/ViewCard";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Header>আমাদের কথা</Header>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <SlideInLeft>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/farmer.jpg"
                  alt="আম চাষি"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-mango-100 p-3 rounded-full shadow-lg">
                <Image
                  src="/mango-icon.png"
                  alt="আম আইকন"
                  width={60}
                  height={60}
                  className="w-16 h-16"
                />
              </div>
            </div>
          </SlideInLeft>

          <SlideInRight>
            <Description>
              আমের হাট শুরু হয়েছিল ২০১৮ সালে, যখন আমরা দেখলাম যে বাংলাদেশের
              অনেক কৃষক তাদের উৎপাদিত আম সঠিক মূল্যে বিক্রি করতে পারছেন না। আমরা
              সিদ্ধান্ত নিলাম যে আমরা কৃষকদের সাথে সরাসরি যোগাযোগ করে তাদের
              উৎপাদিত আম ভালো দামে কিনব এবং গ্রাহকদের কাছে সরাসরি পৌঁছে দেব।
            </Description>
            <Description>
              আমরা মূলত রাজশাহী, চাঁপাইনবাবগঞ্জ, সাতক্ষীরা এবং দিনাজপুর থেকে আম
              সংগ্রহ করি। আমাদের লক্ষ্য হল গ্রাহকদের কাছে সবচেয়ে তাজা এবং
              মিষ্টি আম পৌঁছে দেওয়া, যেন তারা বাংলাদেশের সেরা আমের স্বাদ উপভোগ
              করতে পারেন।
            </Description>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <ViewCard number="৫+" text="বছরের অভিজ্ঞতা" />
              <ViewCard number="১০০০+" text="সন্তুষ্ট গ্রাহক" />
              <ViewCard number="১৫+" text="আমের প্রজাতি" />
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
