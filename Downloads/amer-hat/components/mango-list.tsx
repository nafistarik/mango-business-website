"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { mangoList } from "@/data/mango-data"
import MangoCard from "@/components/mango-card"

export default function MangoList() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="mangoes" className="py-16 md:py-24 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="inline-block text-3xl md:text-4xl font-bold text-mango-800 relative">
              আমাদের আম
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-mango-400 rounded-full"></span>
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              আমরা বাংলাদেশের বিভিন্ন অঞ্চল থেকে সংগৃহীত সেরা মানের আম সরবরাহ করি। আমাদের আম তাজা, রসালো এবং স্বাদে অতুলনীয়।
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mangoList.map((mango, index) => (
            <MangoCard key={mango.name} mango={mango} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-mango-500 hover:bg-mango-600 text-white text-lg">
            সব আম দেখুন
          </Button>
        </div>
      </div>
    </section>
  )
}
