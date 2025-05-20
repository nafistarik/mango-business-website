"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Facebook, Send } from "lucide-react"

export default function ContactSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="inline-block text-3xl md:text-4xl font-bold text-mango-800 relative">
              যোগাযোগ করুন
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-mango-400 rounded-full"></span>
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              আমাদের সাথে যোগাযোগ করুন। আমরা আপনার যেকোনো প্রশ্নের উত্তর দিতে সর্বদা প্রস্তুত।
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-mango-700 mb-6">আমাদের ঠিকানা</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-mango-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-mango-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-mango-800 mb-1">ফোন নম্বর</h4>
                    <p className="text-gray-700">+৮৮০১৭১২৩৪৫৬৭৮</p>
                    <p className="text-gray-700">+৮৮০১৮১২৩৪৫৬৭৮</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-mango-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-mango-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-mango-800 mb-1">ইমেইল</h4>
                    <p className="text-gray-700">info@amerhat.com</p>
                    <p className="text-gray-700">contact@amerhat.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-mango-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-mango-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-mango-800 mb-1">ঠিকানা</h4>
                    <p className="text-gray-700">১২৩/এ, মিরপুর রোড, ঢাকা-১২১৬</p>
                    <p className="text-gray-700">বাংলাদেশ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-mango-100 p-3 rounded-full">
                    <Facebook className="h-6 w-6 text-mango-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-mango-800 mb-1">সোশ্যাল মিডিয়া</h4>
                    <p className="text-gray-700">facebook.com/amerhat</p>
                    <p className="text-gray-700">instagram.com/amerhat</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-mango-700 mb-6">আমাদের মেসেজ পাঠান</h3>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      নাম
                    </label>
                    <Input id="name" placeholder="আপনার নাম" className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      ফোন নম্বর
                    </label>
                    <Input id="phone" placeholder="আপনার ফোন নম্বর" className="w-full" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    ইমেইল
                  </label>
                  <Input id="email" type="email" placeholder="আপনার ইমেইল" className="w-full" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    মেসেজ
                  </label>
                  <Textarea id="message" placeholder="আপনার মেসেজ লিখুন" className="w-full min-h-[120px]" />
                </div>

                <Button type="submit" className="w-full bg-mango-500 hover:bg-mango-600 text-white">
                  <Send className="h-4 w-4 mr-2" />
                  মেসেজ পাঠান
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
