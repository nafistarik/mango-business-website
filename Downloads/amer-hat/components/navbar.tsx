"use client";

import navLinks from "@/data/nav-links";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import GreenButton from "./buttons/GreenButton";
import MobileNavLink from "./buttons/MobileNavLink";
import NavLink from "./buttons/NavLink";
import Logo from "./common/Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
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
          <GreenButton size="default">অর্ডার করুন</GreenButton>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
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
