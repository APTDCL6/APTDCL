// components/header/config.ts
import { HeaderConfig } from "@/types/header/types";

export const headerConfig: HeaderConfig = {
  organizationName: "ASSAM PLAINS TRIBES DEVELOPMENT CORPORATION LIMITED",
  departmentName: "DEPARTMENT OF TRIBAL DEVELOPMENT",
  subtitle: "A GOVERNMENT OF ASSAM UNDERTAKING",
  navigationItems: {
    infoSchemes: [
      { label: "Schemes", href: "/schemes" },
      { label: "Programs", href: "/programs" },
      { label: "Initiatives", href: "/initiatives" },
      { label: "Policies", href: "/policies" },
      { label: "Guidelines", href: "/guidelines" },
      { label: "Benefits", href: "/benefits" },
    ],
    documents: [
      { label: "Annual Reports", href: "/documents/annual-reports" },
      { label: "Guidelines", href: "/documents/guidelines" },
      { label: "Circulars", href: "/documents/circulars" },
      { label: "Forms", href: "/documents/forms" },
      { label: "Notifications", href: "/documents/notifications" },
      { label: "Policies", href: "/documents/policies" },
    ],
    about: [
      { label: "About Corporation", href: "/about/corporation" },
      { label: "Organization Chart", href: "/about/organization" },
      { label: "Board Members", href: "/about/board" },
      { label: "History", href: "/about/history" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Achievements", href: "/about/achievements" },
    ],
    more: [
      { label: "RTI", href: "/rti" },
      { label: "Tenders", href: "/tenders" },
      { label: "Budget", href: "/budget" },
      { label: "Grievance Redressal", href: "/grievance" },
      { label: "Media Gallery", href: "/media" },
      { label: "Events", href: "/events" },
      { label: "Feedback", href: "/feedback" },
      { label: "Contact Directory", href: "/contact-directory" },
      { label: "Citizen Charter", href: "/citizen-charter" },
    ],
  },
};

export const userRoles = [
  { id: "citizen", label: "Citizen", permissions: ["view"] },
  { id: "official", label: "Official", permissions: ["view", "edit"] },
  { id: "admin", label: "Admin", permissions: ["view", "edit", "manage"] },
];
