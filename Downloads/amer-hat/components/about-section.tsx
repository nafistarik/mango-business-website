"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="inline-block text-3xl md:text-4xl font-bold text-mango-800 relative">
              আমাদের কথা
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-mango-400 rounded-full"></span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image src="/farmer.jpg" alt="আম চাষি" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-mango-100 p-3 rounded-full shadow-lg">
              <Image src="/mango-icon.png" alt="আম আইকন" width={60} height={60} className="w-16 h-16" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-mango-700 mb-4">আমাদের গল্প</h3>
            <p className="text-gray-700 mb-4 text-lg">
              আমের হাট শুরু হয়েছিল ২০১৮ সালে, যখন আমরা দেখলাম যে বাংলাদেশের অনেক কৃষক তাদের উৎপাদিত আম সঠিক মূল্যে বিক্রি করতে পারছেন
              না। আমরা সিদ্ধান্ত নিলাম যে আমরা কৃষকদের সাথে সরাসরি যোগাযোগ করে তাদের উৎপাদিত আম ভালো দামে কিনব এবং গ্রাহকদের কাছে সরাসরি
              পৌঁছে দেব।
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              আমরা মূলত রাজশাহী, চাঁপাইনবাবগঞ্জ, সাতক্ষীরা এবং দিনাজপুর থেকে আম সংগ্রহ করি। আমাদের লক্ষ্য হল গ্রাহকদের কাছে সবচেয়ে তাজা এবং
              মিষ্টি আম পৌঁছে দেওয়া, যেন তারা বাংলাদেশের সেরা আমের স্বাদ উপভোগ করতে পারেন।
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-mango-600">৫+</p>
                <p className="text-gray-700">বছরের অভিজ্ঞতা</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-mango-600">১০০০+</p>
                <p className="text-gray-700">সন্তুষ্ট গ্রাহক</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-mango-600">১৫+</p>
                <p className="text-gray-700">আমের প্রজাতি</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
