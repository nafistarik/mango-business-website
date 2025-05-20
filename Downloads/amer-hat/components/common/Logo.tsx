import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="আমের হাট লোগো"
            width={50}
            height={50}
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <span className="text-xl md:text-2xl font-bold text-leaf-700">
            আমের হাট
          </span>
        </Link>
    );
};

export default Logo;