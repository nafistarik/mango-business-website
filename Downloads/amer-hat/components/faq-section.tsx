import { faqList } from "@/data/faq-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SlideInBottom from "./framer-motion/SlideInBottom";
import Header from "./texts/Header";
import Description from "./texts/Description";
import OneByOneAnimation from "./framer-motion/OneByOneAnimation";

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SlideInBottom>
            <Header>প্রশ্ন ও উত্তর</Header>
            <div className="flex justify-center">
              {" "}
              <Description>
                আমাদের সম্পর্কে আপনার যেকোনো প্রশ্নের উত্তর এখানে পাবেন। আরও
                কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন।
              </Description>
            </div>
          </SlideInBottom>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqList.map((faq, index) => (
              <OneByOneAnimation key={index} index={index}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border-2 border-leaf-100 rounded-lg mb-4 px-4"
                >
                  <AccordionTrigger className="text-lg font-medium text-leaf-800 hover:text-leaf-500 hover:no-underline transition-all duration-300 ease-in-out py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </OneByOneAnimation>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
