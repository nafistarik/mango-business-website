"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Calendar } from "lucide-react"
import type { Mango } from "@/data/mango-data"

interface MangoCardProps {
  mango: Mango
  index: number
}

export default function MangoCard({ mango, index }: MangoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48 bg-yellow-100">
        <Image src={mango.image || "/placeholder.svg"} alt={mango.name} fill className="object-contain p-4" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-mango-700 mb-2">{mango.name}</h3>
        <p className="text-gray-700 mb-4">{mango.description}</p>
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-5 w-5 text-mango-500" />
          <span className="text-gray-600">মৌসুম: {mango.season}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold text-mango-800">
            {mango.pricePerKg} <span className="text-sm font-normal">/কেজি</span>
          </p>
          <Button size="sm" className="bg-mango-500 hover:bg-mango-600 text-white">
            <ShoppingCart className="h-4 w-4 mr-2" />
            অর্ডার করুন
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
