"use client";

import navLinks from "@/data/nav-links";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import GreenButton from "../buttons/GreenButton";
import MobileNavLink from "../buttons/MobileNavLink";
import NavLink from "../buttons/NavLink";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <GreenButton size="default">অর্ডার করুন</GreenButton>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6 text-leaf-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-y border-leaf-200 ">
          <div className="container mx-auto px-4 pt-4 pb-6 flex flex-col gap-4 ">
            {navLinks.map((link) => (
              <MobileNavLink
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </MobileNavLink>
            ))}

            <GreenButton size="default">অর্ডার করুন</GreenButton>
            
          </div>
        </div>
      )}
    </header>
  );
}
