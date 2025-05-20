"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { faqList } from "@/data/faq-data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="inline-block text-3xl md:text-4xl font-bold text-mango-800 relative">
              প্রশ্ন ও উত্তর
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-mango-400 rounded-full"></span>
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              আমাদের সম্পর্কে আপনার যেকোনো প্রশ্নের উত্তর এখানে পাবেন। আরও কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন।
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqList.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border border-mango-100 rounded-lg mb-4 px-4">
                  <AccordionTrigger className="text-lg font-medium text-mango-800 hover:text-mango-600 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
