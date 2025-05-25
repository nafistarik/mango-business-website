import Link from "next/link";
import Logo from "@/components/common/Logo";
import { socialLinks } from "@/data/social-links";
import { routeLinks } from "@/data/route-links";
import { mangoLinks } from "@/data/mango-links";
import { communicationLists } from "@/data/communication-list";

export default function Footer() {
  return (
    <footer className="bg-leaf-900 text-white">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="text-leaf-200 my-4">
              বাংলাদেশের সেরা আম সরবরাহকারী। আমরা সরাসরি কৃষকদের কাছ থেকে আম
              সংগ্রহ করি এবং গ্রাহকদের কাছে পৌঁছে দেই।
            </p>
            <div className="flex gap-4">
              {socialLinks?.map((link, index) => {
                const SocialLink = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="bg-leaf-700 p-2 rounded-full hover:bg-leaf-600 transition-colors"
                  >
                    <SocialLink className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-2">
              {routeLinks?.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-leaf-200 hover:text-mango-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">আমাদের আম</h3>
            <ul className="space-y-2">
              {mangoLinks?.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-leaf-200 hover:text-mango-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">যোগাযোগ</h3>
            <ul className="space-y-2">
              {communicationLists?.map((list, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span>{list.icon}</span>
                  <span className="text-leaf-200">{list.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-leaf-700 mt-8 pt-4 text-center">
          <p className="text-leaf-100">
            &copy; {new Date().getFullYear()} আমের হাট। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
}
