// components/header/AccessibilityBar.tsx
import React from "react";
import { User } from "lucide-react";
import { useFontSize } from "@/hooks/useFontSize";

export const AccessibilityBar: React.FC = () => {
  const { fontSize, increaseFontSize, decreaseFontSize, resetFontSize } =
    useFontSize();

  const handleSkipToContent = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-800 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Left side - Skip to content and font controls */}
          <div className="flex items-center space-x-4">
            {/* Skip to content */}
            <button
              onClick={handleSkipToContent}
              className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2 py-1"
            >
              Skip to content
            </button>

            {/* Font size controls */}
            <div className="flex items-center space-x-1 border-l border-gray-600 pl-4">
              <span className="text-gray-300 mr-2">Text Size:</span>

              {/* Decrease font size */}
              <button
                onClick={decreaseFontSize}
                className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                title="Decrease font size"
                aria-label="Decrease font size"
              >
                A<sup>-</sup>
              </button>

              {/* Reset font size */}
              <button
                onClick={resetFontSize}
                className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                title="Reset font size to default"
                aria-label="Reset font size to default"
              >
                A
              </button>

              {/* Increase font size */}
              <button
                onClick={increaseFontSize}
                className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                title="Increase font size"
                aria-label="Increase font size"
              >
                A<sup>+</sup>
              </button>

              {/* Current font size indicator */}
              <span className="text-gray-400 text-xs ml-2">({fontSize}px)</span>
            </div>
          </div>

          {/* Right side - User access info */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-300">I am now accessing as a :</span>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition-colors duration-200 flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <User size={14} />
              <span>Citizen</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
