import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Facebook, Send } from "lucide-react";
import SlideInLeft from "./framer-motion/SlideInLeft";
import SlideInRight from "./framer-motion/SlideInRight";
import SlideInBottom from "./framer-motion/SlideInBottom";
import Header from "./texts/Header";
import Description from "./texts/Description";
import Title from "./texts/Title";
import ContactInfoItem from "./common/ContactInfoItem";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SlideInBottom>
            <Header>যোগাযোগ করুন</Header>
            <div className="flex justify-center">
              {" "}
              <Description>
                আমাদের সাথে যোগাযোগ করুন। আমরা আপনার যেকোনো প্রশ্নের উত্তর দিতে
                সর্বদা প্রস্তুত।
              </Description>
            </div>
          </SlideInBottom>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <SlideInLeft>
            <div className=" p-8 rounded-xl bg-white border-2 border-leaf-100">
              <Title>আমাদের ঠিকানা</Title>

              <div className="space-y-6 pt-3">
                <ContactInfoItem
                  Icon={Phone}
                  title="ফোন নম্বর"
                  info1="+৮৮০১৭১২৩৪৫৬৭৮"
                  info2="+৮৮০১৮১২৩৪৫৬৭৮"
                />

                <ContactInfoItem
                  Icon={MapPin}
                  title="ঠিকানা"
                  info1="১২৩/এ, মিরপুর রোড, ঢাকা-১২১৬"
                  info2="বাংলাদেশ"
                />

                <ContactInfoItem
                  Icon={Facebook}
                  title="সোশ্যাল মিডিয়া"
                  info1="facebook.com/amerhat"
                  info2="instagram.com/amerhat"
                />
              </div>
            </div>
          </SlideInLeft>

          <SlideInRight>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-leaf-700 mb-6">
                আমাদের মেসেজ পাঠান
              </h3>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      নাম
                    </label>
                    <Input
                      id="name"
                      placeholder="আপনার নাম"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ফোন নম্বর
                    </label>
                    <Input
                      id="phone"
                      placeholder="আপনার ফোন নম্বর"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ইমেইল
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="আপনার ইমেইল"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    মেসেজ
                  </label>
                  <Textarea
                    id="message"
                    placeholder="আপনার মেসেজ লিখুন"
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-leaf-500 hover:bg-leaf-600 text-white"
                >
                  <Send className="h-4 w-4 mr-2" />
                  মেসেজ পাঠান
                </Button>
              </form>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
