import { MenuItem } from "@/types/menu";
import { Box, Home, LucideIcon, ShelvingUnit, SquareStack } from "lucide-react";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export interface MenuItemWithIcon extends Omit<MenuItem, 'icon'> {
  icon: LucideIcon;
}

export const BASE_MENU_ITEMS: MenuItemWithIcon[] = [
  {
    id: 'accueil',
    label: 'Accueil',
    icon: Home,
    href: '/dashboard',
  },
  {
    id: 'produit',
    label: 'Produit',
    icon: Box,
    href: '/produit'
  },
  {
    id: 'collection',
    label: 'Collection',
    icon: SquareStack,
    href: '/collection'
  },
  {
    id: 'inventaire',
    label: 'Inventaire',
    icon: ShelvingUnit,
    href: '/inventaire'
  }
];