// components/header/NavigationItem.tsx
import React from "react";
import Link from "next/link";

interface NavigationItemProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  children,
  className = "",
  onClick,
}) => {
  const baseClasses =
    "flex items-center space-x-1 px-4 py-3 text-white font-medium transition-colors duration-200 cursor-pointer";
  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  );
};
