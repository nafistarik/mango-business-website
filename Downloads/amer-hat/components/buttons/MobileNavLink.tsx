import Link from "next/link";
import React from "react";

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-2 px-4 text-base font-medium hover:bg-leaf-200 rounded-sm transition-all duration-300 ease-in-out"
    >
      {children}
    </Link>
  );
};

export default MobileNavLink;
