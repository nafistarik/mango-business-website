import SlideInLeft from "./framer-motion/SlideInLeft";
import SlideInRight from "./framer-motion/SlideInRight";
import SlideInBottom from "./framer-motion/SlideInBottom";
import Header from "./texts/Header";
import Description from "./texts/Description";
import Title from "./texts/Title";
import ContactItem from "./common/ContactItem";
import { contactItems } from "@/data/contact-data";

export default function ContactSection() {
  return (
    <section id="contact" className="pt-24 pb-12 min-h-screen">
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

              <div className="space-y-6 pt-3 text-start">
                {contactItems.map((item, index) => (
                  <ContactItem
                    key={index}
                    Icon={item.icon}
                    title={item.title}
                    infos={item.infos}
                  />
                ))}
              </div>
            </div>
          </SlideInLeft>

          <SlideInRight>
            <div className="h-[394px] overflow-hidden rounded-lg">
              <iframe
                title="Purana Paltan, Dhaka Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28991.6542445214!2d88.15054149319674!3d24.728364002041186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbad348feb4703%3A0x960f879a969b262d!2zS2Fuc2F0IE1hbmdvIE1hcmtldCjgppXgpr7gpqjgprjgpr7gpp8g4KaG4KauIOCmrOCmvuCmnOCmvuCmsCk!5e0!3m2!1sen!2sbd!4v1747914377997!5m2!1sen!2sbd"
                width="100%"
                height="394"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </SlideInRight>
          {/* <div className="bg-white p-6 rounded-2xl shadow-lg">
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
            </div> */}
        </div>
      </div>
    </section>
  );
}
