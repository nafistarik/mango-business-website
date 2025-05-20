"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="আমের হাট লোগো" width={50} height={50} className="w-10 h-10 md:w-12 md:h-12" />
          <span className="text-xl md:text-2xl font-bold text-mango-700">আমের হাট</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-base font-medium hover:text-mango-600 transition-colors">
            হোম
          </Link>
          <Link href="#about" className="text-base font-medium hover:text-mango-600 transition-colors">
            আমাদের কথা
          </Link>
          <Link href="#mangoes" className="text-base font-medium hover:text-mango-600 transition-colors">
            আমাদের আম
          </Link>
          <Link href="#faq" className="text-base font-medium hover:text-mango-600 transition-colors">
            প্রশ্ন ও উত্তর
          </Link>
          <Link href="#contact" className="text-base font-medium hover:text-mango-600 transition-colors">
            যোগাযোগ
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-mango-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Button>

          <Button className="hidden md:flex bg-mango-500 hover:bg-mango-600 text-white">অর্ডার করুন</Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg font-medium py-2 hover:text-mango-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              হোম
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium py-2 hover:text-mango-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              আমাদের কথা
            </Link>
            <Link
              href="#mangoes"
              className="text-lg font-medium py-2 hover:text-mango-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              আমাদের আম
            </Link>
            <Link
              href="#faq"
              className="text-lg font-medium py-2 hover:text-mango-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              প্রশ্ন ও উত্তর
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium py-2 hover:text-mango-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              যোগাযোগ
            </Link>
            <Button className="w-full bg-mango-500 hover:bg-mango-600 text-white">অর্ডার করুন</Button>
          </div>
        </div>
      )}
    </header>
  )
}
