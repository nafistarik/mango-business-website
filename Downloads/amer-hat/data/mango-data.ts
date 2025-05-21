import mango from "@/assets/images/mango/mango.jpg"
import { StaticImageData } from "next/image"
export interface Mango {
  name: string
  image: StaticImageData | string
  description: string
  pricePerKg: string
  season: string
}

export const mangoList: Mango[] = [
  {
    name: "হিমসাগর",
    image: mango,
    description: "রসে ভরা, সুগন্ধিযুক্ত ও আঁশবিহীন আম। মিষ্টি স্বাদের জন্য বিখ্যাত।",
    pricePerKg: "১২০ টাকা",
    season: "মে - জুন",
  },
  {
    name: "ল্যাংড়া",
    image: mango,
    description: "টক-মিষ্টি স্বাদের, সবার পছন্দের আম। এর সুগন্ধ অতুলনীয়।",
    pricePerKg: "১১০ টাকা",
    season: "জুন - জুলাই",
  },
  {
    name: "গোপালভোগ",
    image: mango,
    description: "মাঝারি আকারের, অতি মিষ্টি ও সুগন্ধযুক্ত আম। খুব জনপ্রিয়।",
    pricePerKg: "১৩০ টাকা",
    season: "জুন - জুলাই",
  },
  {
    name: "আম্রপালি",
    image: mango,
    description: "লাল-হলুদ রঙের, মিষ্টি ও সুস্বাদু আম। দেরিতে পাকে।",
    pricePerKg: "১০০ টাকা",
    season: "জুলাই - আগস্ট",
  },
  {
    name: "ফজলি",
    image: mango,
    description: "বড় আকারের, হালকা মিষ্টি স্বাদের আম। ওজনে ভারী।",
    pricePerKg: "৯০ টাকা",
    season: "জুলাই - আগস্ট",
  },
  {
    name: "আশ্বিনা",
    image: mango,
    description: "দেরিতে পাকা, মাঝারি মিষ্টি স্বাদের আম। মৌসুমের শেষে পাওয়া যায়।",
    pricePerKg: "৮০ টাকা",
    season: "আগস্ট - সেপ্টেম্বর",
  },
]
