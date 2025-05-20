import Link from "next/link";
import React from "react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Link
        href={href}
        className="text-xl font-medium hover:text-leaf-600 transition-all duration-300 ease-in-out"
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
