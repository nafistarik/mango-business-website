import Link from 'next/link';
import React from 'react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <div>
           <Link
            href={href}
            className="text-base font-medium hover:text-leaf-600 transition-colors"
          >
            {children}
          </Link>
        </div>
    );
};

export default NavLink;