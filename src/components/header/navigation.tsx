// components/header/Navigation.tsx
"use client";

import React, { useState } from "react";
import { Home, ChevronDown, Menu, X } from "lucide-react";
import { NavigationItem } from "./navigation-item";
import { DropdownMenu } from "./dropdown-menu";

const infoSchemesItems = [
  { label: "PMVDY", href: "/pmvdy" },
  { label: "Development Schemes", href: "/development-schemes" },
];

const moreItems = [
  { label: "FAQ", href: "/faq" },
  { label: "Feedback", href: "/feedback" },
];

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          {/* Navigation Items */}
          <div className="flex items-center space-x-0">
            {/* Home */}
            <NavigationItem href="/" className="hover:bg-blue-700">
              {/* <Home size={18} /> */}
              <span>Home</span>
            </NavigationItem>

            {/* Info and Schemes */}
            <DropdownMenu
              trigger={
                <NavigationItem className="hover:bg-blue-700 flex items-center justify-center">
                  <span>Info and Schemes</span>
                  <ChevronDown size={16} />
                </NavigationItem>
              }
              items={infoSchemesItems}
            />

            {/* Documents */}
            <NavigationItem href="/" className="hover:bg-blue-700">
              {/* <Home size={18} /> */}
              <span>Documents</span>
            </NavigationItem>

            {/* About Us */}
            <NavigationItem href="/" className="hover:bg-blue-700">
              {/* <Home size={18} /> */}
              <span>About Us</span>
            </NavigationItem>

            {/* Contact Us */}
            <NavigationItem href="/contact" className="hover:bg-blue-700">
              <span>Contact Us</span>
            </NavigationItem>

            {/* Gallery */}
            <NavigationItem href="/gallery" className="hover:bg-blue-700">
              <span>Gallery</span>
            </NavigationItem>

            {/* More */}
            <DropdownMenu
              trigger={
                <NavigationItem className="hover:bg-blue-700 flex items-center justify-center gap-1">
                  <span>More</span>
                  <Menu size={18} />
                </NavigationItem>
              }
              items={moreItems}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3">
          <div className="bg-red-600 text-white px-4 py-2 rounded font-semibold">
            Main
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 rounded hover:bg-blue-700 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-blue-700 border-t border-blue-500">
            <div className="px-4 py-2 space-y-1">
              <NavigationItem
                href="/"
                className="w-full justify-start hover:bg-blue-600"
              >
                <Home size={18} />
                <span>Home</span>
              </NavigationItem>

              <div className="border-t border-blue-500 pt-2">
                <div className="text-white font-semibold px-4 py-2">
                  Info and Schemes
                </div>
                {infoSchemesItems.map((item, index) => (
                  <NavigationItem
                    key={index}
                    href={item.href}
                    className="w-full justify-start pl-8 hover:bg-blue-600"
                  >
                    {item.label}
                  </NavigationItem>
                ))}
              </div>

              <div className="border-t border-blue-500 pt-2">
                <div className="text-white font-semibold px-4 py-2">
                  Documents
                </div>
              </div>

              <div className="border-t border-blue-500 pt-2">
                <div className="text-white font-semibold px-4 py-2">
                  About Us
                </div>
              </div>

              <NavigationItem
                href="/contact"
                className="w-full justify-start hover:bg-blue-600"
              >
                Contact Us
              </NavigationItem>

              <NavigationItem
                href="/gallery"
                className="w-full justify-start hover:bg-blue-600"
              >
                Gallery
              </NavigationItem>

              <div className="border-t border-blue-500 pt-2">
                <div className="text-white font-semibold px-4 py-2">More</div>
                {moreItems.map((item, index) => (
                  <NavigationItem
                    key={index}
                    href={item.href}
                    className="w-full justify-start pl-8 hover:bg-blue-600"
                  >
                    {item.label}
                  </NavigationItem>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
