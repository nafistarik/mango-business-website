import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-mango-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo-white.png" alt="আমের হাট লোগো" width={50} height={50} className="w-10 h-10" />
              <span className="text-xl font-bold">আমের হাট</span>
            </div>
            <p className="text-mango-100 mb-4">
              বাংলাদেশের সেরা আম সরবরাহকারী। আমরা সরাসরি কৃষকদের কাছ থেকে আম সংগ্রহ করি এবং গ্রাহকদের কাছে পৌঁছে দেই।
            </p>
            <div className="flex gap-4">
              <Link href="#" className="bg-mango-700 p-2 rounded-full hover:bg-mango-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-mango-700 p-2 rounded-full hover:bg-mango-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-mango-700 p-2 rounded-full hover:bg-mango-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-mango-700 p-2 rounded-full hover:bg-mango-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-mango-100 hover:text-white transition-colors">
                  হোম
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-mango-100 hover:text-white transition-colors">
                  আমাদের কথা
                </Link>
              </li>
              <li>
                <Link href="#mangoes" className="text-mango-100 hover:text-white transition-colors">
                  আমাদের আম
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-mango-100 hover:text-white transition-colors">
                  প্রশ্ন ও উত্তর
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-mango-100 hover:text-white transition-colors">
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">আমাদের আম</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-mango-100 hover:text-white transition-colors">
                  হিমসাগর
                </Link>
              </li>
              <li>
                <Link href="#" className="text-mango-100 hover:text-white transition-colors">
                  ল্যাংড়া
                </Link>
              </li>
              <li>
                <Link href="#" className="text-mango-100 hover:text-white transition-colors">
                  গোপালভোগ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-mango-100 hover:text-white transition-colors">
                  আম্রপালি
                </Link>
              </li>
              <li>
                <Link href="#" className="text-mango-100 hover:text-white transition-colors">
                  ফজলি
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">যোগাযোগ</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <span className="text-mango-100">+৮৮০১৭১২৩৪৫৬৭৮</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <span className="text-mango-100">info@amerhat.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span className="text-mango-100">১২৩/এ, মিরপুর রোড, ঢাকা-১২১৬, বাংলাদেশ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mango-700 mt-8 pt-8 text-center">
          <p className="text-mango-100">&copy; {new Date().getFullYear()} আমের হাট। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  )
}
