import { LucideIcon } from "lucide-react";
export interface MenuItem {
  id: string;
  label: string;
  icon: string | LucideIcon;
  href: string;
  badge?: string;
  roles?: string[]; // Which user roles can see this
}

export interface MenuSection {
  title?: string;
  items: MenuItem[];
}