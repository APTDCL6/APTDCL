// components/header/hooks/useFontSize.ts
"use client";

import { useState, useEffect } from "react";

type FontSizeLevel = 16 | 17 | 18 | 20;

const FONT_SIZES: FontSizeLevel[] = [16, 17, 18, 20];
const DEFAULT_FONT_SIZE: FontSizeLevel = 16;
const STORAGE_KEY = "aptdcl-font-size";

export const useFontSize = () => {
  const [fontSize, setFontSize] = useState<FontSizeLevel>(DEFAULT_FONT_SIZE);

  // Load font size from localStorage on mount
  useEffect(() => {
    const savedFontSize = localStorage.getItem(STORAGE_KEY);
    if (savedFontSize) {
      const parsedSize = parseInt(savedFontSize) as FontSizeLevel;
      if (FONT_SIZES.includes(parsedSize)) {
        setFontSize(parsedSize);
        applyFontSizeToDocument(parsedSize);
      }
    }
  }, []);

  // Apply font size to document
  const applyFontSizeToDocument = (size: FontSizeLevel) => {
    document.documentElement.style.fontSize = `${size}px`;
  };

  // Save font size to localStorage and apply to document
  const updateFontSize = (newSize: FontSizeLevel) => {
    setFontSize(newSize);
    localStorage.setItem(STORAGE_KEY, newSize.toString());
    applyFontSizeToDocument(newSize);
  };

  // Increase font size
  const increaseFontSize = () => {
    const currentIndex = FONT_SIZES.indexOf(fontSize);
    if (currentIndex < FONT_SIZES.length - 1) {
      const newSize = FONT_SIZES[currentIndex + 1];
      updateFontSize(newSize);
    }
  };

  // Decrease font size
  const decreaseFontSize = () => {
    const currentIndex = FONT_SIZES.indexOf(fontSize);
    if (currentIndex > 0) {
      const newSize = FONT_SIZES[currentIndex - 1];
      updateFontSize(newSize);
    }
  };

  // Reset to default font size
  const resetFontSize = () => {
    updateFontSize(DEFAULT_FONT_SIZE);
  };

  // Check if we can increase/decrease
  const canIncrease = fontSize < Math.max(...FONT_SIZES);
  const canDecrease = fontSize > Math.min(...FONT_SIZES);

  return {
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    canIncrease,
    canDecrease,
  };
};
