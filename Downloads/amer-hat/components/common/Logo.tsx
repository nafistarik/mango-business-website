import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/home/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src={logo}
        alt="আমের হাট লোগো"
        width={1000}
        height={1000}
        className="w-auto h-12"
      />
    </Link>
  );
};

export default Logo;
