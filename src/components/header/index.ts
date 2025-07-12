// components/header/index.ts

// Main Components
export { Header } from "./header";
export { AccessibilityBar } from "./accessibility-bar";
export { LogoSection } from "./logo-section";
export { SearchBar } from "./search-bar";
export { Navigation } from "./navigation";
export { NavigationItem } from "./navigation-item";
export { DropdownMenu } from "./dropdown-menu";

// Default export for easy importing
export { Header as default } from "./header";

// Re-export everything for convenience
export * from "./header";
export * from "./accessibility-bar";
export * from "./logo-section";
export * from "./search-bar";
export * from "./navigation";
export * from "./navigation-item";
export * from "./dropdown-menu";

// Version info
export const HEADER_VERSION = "1.0.0";

// Utility constants
export const HEADER_CONFIG_KEYS = {
  ORGANIZATION_NAME: "organizationName",
  DEPARTMENT_NAME: "departmentName",
  SUBTITLE: "subtitle",
  NAVIGATION_ITEMS: "navigationItems",
} as const;

export const NAVIGATION_SECTIONS = {
  INFO_SCHEMES: "infoSchemes",
  DOCUMENTS: "documents",
  ABOUT: "about",
  MORE: "more",
} as const;

export const USER_ROLES = {
  CITIZEN: "citizen",
  OFFICIAL: "official",
  ADMIN: "admin",
} as const;

// Font size constants
export const FONT_SIZE_LEVELS = [16, 17, 18, 20] as const;
export const DEFAULT_FONT_SIZE = 16;
