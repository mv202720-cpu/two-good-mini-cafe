export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  prices: { label?: string; amount: number }[];
  category: MenuCategory;
  isVeg: boolean;
  isBestseller?: boolean;
  subSection?: string;
}

export type MenuCategory =
  | "pizza"
  | "burger"
  | "wraps"
  | "sandwiches"
  | "chinese"
  | "momos"
  | "pasta"
  | "rolls"
  | "combos"
  | "south-indian"
  | "waffles"
  | "french-fries"
  | "mini-pancakes"
  | "shakes"
  | "cold-coffee"
  | "beverages";

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  selectedPriceIndex: number;
}

export interface NavLink {
  label: string;
  href: string;
}
