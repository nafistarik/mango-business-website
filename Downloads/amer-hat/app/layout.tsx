import type React from "react"
import type { Metadata } from "next"
import { Hind_Siliguri } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
})

export const metadata: Metadata = {
  title: "আমের হাট - দেশের সেরা আম",
  description: "বাংলাদেশের সেরা আম কিনুন আমের হাট থেকে। হিমসাগর, ল্যাংড়া, গোপালভোগ সহ বিভিন্ন প্রজাতির আম পাওয়া যায়।",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn">
      <body className={`${hindSiliguri.variable} font-hind-siliguri`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
