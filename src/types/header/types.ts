// components/header/types.ts

export interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

export interface DropdownSection {
  title: string;
  items: NavigationItem[];
}

export interface HeaderConfig {
  logoUrl?: string;
  organizationName: string;
  departmentName: string;
  subtitle: string;
  navigationItems: {
    infoSchemes: NavigationItem[];
    documents: NavigationItem[];
    about: NavigationItem[];
    more: NavigationItem[];
  };
}

export interface SearchResult {
  id: string;
  title: string;
  url: string;
  description: string;
}

export interface UserRole {
  id: string;
  label: string;
  permissions: string[];
}
