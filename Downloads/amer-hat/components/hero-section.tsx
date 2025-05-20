import Image from "next/image";
import GreenButton from "./buttons/GreenButton";
import OutlineButton from "./buttons/OutlineButton";
import Description from "./texts/Description";
import SlideInLeft from "./framer-motion/SlideInLeft";
import SlideInBottom from "./framer-motion/SlideInBottom";
import LeftInfiniteAnimation from "./framer-motion/LeftInfiniteAnimation";
import RightInfiniteAnimation from "./framer-motion/RightInfiniteAnimation";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-yellow-100 pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <SlideInLeft>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-leaf-800 leading-tight">
              <span className="block">বাংলাদেশের সেরা</span>
              <span className="text-leaf-600">আমের হাট</span>
            </h1>
            <Description>
              সরাসরি কৃষকের বাগান থেকে সংগৃহীত তাজা, রসালো এবং মিষ্টি আম এখন
              আপনার হাতের নাগালে।
            </Description>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <GreenButton>আম কিনুন</GreenButton>
              <OutlineButton>আমাদের সম্পর্কে জানুন</OutlineButton>
            </div>
          </SlideInLeft>

          <SlideInBottom>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
              <Image
                src="/mango-hero.png"
                alt="তাজা আম"
                fill
                className="object-contain"
                priority
              />
            </div>

            <RightInfiniteAnimation>
              <Image
                src="/mango-slice.png"
                alt="আম টুকরা"
                width={100}
                height={100}
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </RightInfiniteAnimation>

            <LeftInfiniteAnimation>
              <Image
                src="/mango-leaf.png"
                alt="আমের পাতা"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </LeftInfiniteAnimation>
          </SlideInBottom>
        </div>
      </div>

      {/* <div className="wave-shape">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
    </section>
  );
}
