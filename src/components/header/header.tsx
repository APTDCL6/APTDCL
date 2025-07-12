// components/header/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import { AccessibilityBar } from ".";
import { LogoSection } from "./logo-section";
import { SearchBar } from "./search-bar";
import { Navigation } from "./navigation";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100); // Make sticky after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Accessibility Bar */}
      <AccessibilityBar />

      {/* Main Header */}
      <header className={`w-full bg-white shadow-sm ${className}`}>
        {/* Top Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <LogoSection />
              <SearchBar />
            </div>
          </div>
        </div>

        {/* Navigation Section - Sticky */}
        <div
          className={`${
            isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-lg" : ""
          } transition-all duration-300`}
        >
          <Navigation />
        </div>

        {/* Spacer for fixed navigation */}
        {isSticky && <div className="h-12"></div>}
      </header>
    </>
  );
};
