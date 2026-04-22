import { r as reactExports, j as jsxRuntimeExports, u as useCart } from "./index-JAF6-6qf.js";
import { m as motion } from "./proxy-bYZ_owAr.js";
import { A as AnimatePresence } from "./index-DqgVw44B.js";
const WA_BASE = "https://wa.me/919958658589?text=Hi%2C%20I%20want%20to%20order%20";
const CATEGORIES = [
  { id: "pizza", label: "Pizza", emoji: "🍕" },
  { id: "burger", label: "Burger", emoji: "🍔" },
  { id: "wraps", label: "Wraps", emoji: "🌯" },
  { id: "sandwiches", label: "Sandwiches", emoji: "🥪" },
  { id: "chinese", label: "Chinese", emoji: "🥡" },
  { id: "momos", label: "Momos", emoji: "🥟" },
  { id: "pasta", label: "Pasta", emoji: "🍝" },
  { id: "rolls", label: "Rolls", emoji: "🌀" },
  { id: "combos", label: "Combos", emoji: "🎯" },
  { id: "south-indian", label: "South Indian", emoji: "🫓" },
  { id: "waffles", label: "Waffles", emoji: "🧇" },
  { id: "french-fries", label: "French Fries", emoji: "🍟" },
  { id: "mini-pancakes", label: "Mini Pancakes", emoji: "🥞" },
  { id: "shakes", label: "Shakes", emoji: "🥤" },
  { id: "cold-coffee", label: "Cold Coffee", emoji: "☕" },
  { id: "beverages", label: "Beverages", emoji: "🍹" }
];
const MENU_ITEMS = [
  // ─── PIZZA ───
  {
    id: "p1",
    name: "Margherita",
    description: "Classic tomato sauce with fresh mozzarella",
    prices: [
      { label: "Small", amount: 90 },
      { label: "Medium", amount: 180 },
      { label: "Large", amount: 270 }
    ],
    category: "pizza",
    isVeg: true
  },
  {
    id: "p2",
    name: "Simply Veg",
    description: "Garden veggies on herbed tomato base",
    prices: [
      { label: "Small", amount: 100 },
      { label: "Medium", amount: 200 },
      { label: "Large", amount: 300 }
    ],
    category: "pizza",
    isVeg: true
  },
  {
    id: "p3",
    name: "Tandoori",
    description: "Tandoori spiced toppings, smoky flavor",
    prices: [
      { label: "Small", amount: 110 },
      { label: "Medium", amount: 210 },
      { label: "Large", amount: 310 }
    ],
    category: "pizza",
    isVeg: true
  },
  {
    id: "p4",
    name: "Paneer Loaded",
    description: "Loaded with spiced cottage cheese",
    prices: [
      { label: "Small", amount: 120 },
      { label: "Medium", amount: 220 },
      { label: "Large", amount: 320 }
    ],
    category: "pizza",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "p5",
    name: "Makhni Paneer",
    description: "Creamy makhani sauce with paneer",
    prices: [
      { label: "Small", amount: 150 },
      { label: "Medium", amount: 250 },
      { label: "Large", amount: 350 }
    ],
    category: "pizza",
    isVeg: true
  },
  {
    id: "p6",
    name: "Two Good Special",
    description: "Our signature secret recipe",
    prices: [
      { label: "Small", amount: 160 },
      { label: "Medium", amount: 260 },
      { label: "Large", amount: 360 }
    ],
    category: "pizza",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "p7",
    name: "Veggie Lover",
    description: "Extra loaded with fresh vegetables",
    prices: [
      { label: "Small", amount: 180 },
      { label: "Medium", amount: 280 },
      { label: "Large", amount: 380 }
    ],
    category: "pizza",
    isVeg: true
  },
  {
    id: "p8",
    name: "Double Cheese",
    description: "Double cheese pull on every slice",
    prices: [
      { label: "Small", amount: 200 },
      { label: "Medium", amount: 300 },
      { label: "Large", amount: 400 }
    ],
    category: "pizza",
    isVeg: true
  },
  {
    id: "p9",
    name: "Mini Veg",
    description: "Personal mini pizza, pure veg",
    prices: [{ amount: 60 }],
    category: "pizza",
    isVeg: true
  },
  {
    id: "p10",
    name: "Mini Paneer",
    description: "Personal mini pizza with paneer",
    prices: [{ amount: 70 }],
    category: "pizza",
    isVeg: true
  },
  // ─── BURGER ───
  {
    id: "b1",
    name: "Aloo Crunchy",
    description: "Crispy aloo patty with crunchy slaw",
    prices: [{ amount: 40 }],
    category: "burger",
    isVeg: true
  },
  {
    id: "b2",
    name: "Onion Crunchy",
    description: "Golden onion rings stacked high",
    prices: [{ amount: 50 }],
    category: "burger",
    isVeg: true
  },
  {
    id: "b3",
    name: "Veggie Club",
    description: "Fresh veggies, mayo, and cheese",
    prices: [{ amount: 70 }],
    category: "burger",
    isVeg: true
  },
  {
    id: "b4",
    name: "Double Patty",
    description: "Double the patty, double the flavor",
    prices: [{ amount: 80 }],
    category: "burger",
    isVeg: true
  },
  {
    id: "b5",
    name: "Makhani",
    description: "Smoky makhani glazed patty",
    prices: [{ amount: 90 }],
    category: "burger",
    isVeg: true
  },
  {
    id: "b6",
    name: "Punjabi Masala",
    description: "Spicy Punjab-style masala patty",
    prices: [{ amount: 90 }],
    category: "burger",
    isVeg: true
  },
  {
    id: "b7",
    name: "Tandoori",
    description: "Char-grilled tandoori spiced patty",
    prices: [{ amount: 100 }],
    category: "burger",
    isVeg: true
  },
  {
    id: "b8",
    name: "Cheese Burst",
    description: "Oozing cheese inside every bite",
    prices: [{ amount: 110 }],
    category: "burger",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "b9",
    name: "Paneer",
    description: "Juicy paneer patty, grilled to perfection",
    prices: [{ amount: 120 }],
    category: "burger",
    isVeg: true
  },
  // ─── WRAPS ───
  {
    id: "wr1",
    name: "Aloo Crunchy",
    description: "Crispy aloo filling in a soft tortilla",
    prices: [{ amount: 40 }],
    category: "wraps",
    isVeg: true
  },
  {
    id: "wr2",
    name: "Onion Crunchy",
    description: "Crunchy onion rings wrapped tight",
    prices: [{ amount: 50 }],
    category: "wraps",
    isVeg: true
  },
  {
    id: "wr3",
    name: "Veg Wrap",
    description: "Fresh mixed veg with tangy chutney",
    prices: [{ amount: 70 }],
    category: "wraps",
    isVeg: true
  },
  {
    id: "wr4",
    name: "Makhani Wrap",
    description: "Makhani sauce with spiced filling",
    prices: [{ amount: 90 }],
    category: "wraps",
    isVeg: true
  },
  {
    id: "wr5",
    name: "Tandoori Wrap",
    description: "Tandoori flavored wrap, smoky & bold",
    prices: [{ amount: 100 }],
    category: "wraps",
    isVeg: true
  },
  {
    id: "wr6",
    name: "Cheese Burst",
    description: "Melted cheese with every bite",
    prices: [{ amount: 110 }],
    category: "wraps",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "wr7",
    name: "Paneer",
    description: "Grilled paneer with mint chutney",
    prices: [{ amount: 120 }],
    category: "wraps",
    isVeg: true
  },
  // ─── SANDWICHES ───
  {
    id: "sw1",
    name: "Creamy",
    description: "Creamy spread with fresh vegetables",
    prices: [{ amount: 40 }],
    category: "sandwiches",
    isVeg: true
  },
  {
    id: "sw2",
    name: "Tandoori Grilled",
    description: "Tandoori grilled sandwich, smoky flavors",
    prices: [{ amount: 70 }],
    category: "sandwiches",
    isVeg: true
  },
  {
    id: "sw3",
    name: "Pizza Sandwich",
    description: "Pizza toppings on toasted bread",
    prices: [{ amount: 80 }],
    category: "sandwiches",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "sw4",
    name: "Cheese",
    description: "Melted cheese on every layer",
    prices: [{ amount: 90 }],
    category: "sandwiches",
    isVeg: true
  },
  {
    id: "sw5",
    name: "Paneer",
    description: "Grilled paneer with herbed spread",
    prices: [{ amount: 100 }],
    category: "sandwiches",
    isVeg: true
  },
  // ─── CHINESE ───
  {
    id: "c1",
    name: "Chowmein",
    description: "Stir-fried noodles with crunchy veggies",
    prices: [
      { label: "Half", amount: 50 },
      { label: "Full", amount: 90 }
    ],
    category: "chinese",
    isVeg: true
  },
  {
    id: "c2",
    name: "Chilli Garlic",
    description: "Bold chilli garlic noodles, fiery kick",
    prices: [
      { label: "Half", amount: 70 },
      { label: "Full", amount: 110 }
    ],
    category: "chinese",
    isVeg: true
  },
  {
    id: "c3",
    name: "Hakka Noodles",
    description: "Indo-Chinese style hakka noodles",
    prices: [
      { label: "Half", amount: 80 },
      { label: "Full", amount: 120 }
    ],
    category: "chinese",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "c4",
    name: "Paneer Chowmein",
    description: "Noodles tossed with soft paneer",
    prices: [
      { label: "Half", amount: 90 },
      { label: "Full", amount: 130 }
    ],
    category: "chinese",
    isVeg: true
  },
  {
    id: "c5",
    name: "Fried Rice",
    description: "Classic Indo-Chinese fried rice",
    prices: [
      { label: "Half", amount: 80 },
      { label: "Full", amount: 120 }
    ],
    category: "chinese",
    isVeg: true
  },
  {
    id: "c6",
    name: "Manchurian",
    description: "Crispy veg balls in tangy Manchurian sauce",
    prices: [
      { label: "Half", amount: 100 },
      { label: "Full", amount: 140 }
    ],
    category: "chinese",
    isVeg: true
  },
  {
    id: "c7",
    name: "Chilli Paneer",
    description: "Tossed paneer in spicy chilli sauce",
    prices: [
      { label: "Half", amount: 150 },
      { label: "Full", amount: 200 }
    ],
    category: "chinese",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "c8",
    name: "Chilli Potato",
    description: "Crispy potato in bold chilli sauce",
    prices: [
      { label: "Half", amount: 70 },
      { label: "Full", amount: 120 }
    ],
    category: "chinese",
    isVeg: true
  },
  // ─── MOMOS ───
  {
    id: "m1",
    name: "Veg",
    description: "Steamed veg dumplings with chilli dip",
    prices: [
      { label: "Half", amount: 30 },
      { label: "Full", amount: 50 }
    ],
    category: "momos",
    isVeg: true
  },
  {
    id: "m2",
    name: "Paneer",
    description: "Steamed paneer dumplings",
    prices: [
      { label: "Half", amount: 40 },
      { label: "Full", amount: 70 }
    ],
    category: "momos",
    isVeg: true
  },
  {
    id: "m3",
    name: "Fried",
    description: "Crispy golden fried dumplings",
    prices: [
      { label: "Half", amount: 40 },
      { label: "Full", amount: 70 }
    ],
    category: "momos",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "m4",
    name: "Kurkure",
    description: "Crunchy kurkure-coated fried momos",
    prices: [
      { label: "Half", amount: 60 },
      { label: "Full", amount: 110 }
    ],
    category: "momos",
    isVeg: true
  },
  {
    id: "m5",
    name: "Gravy Momos",
    description: "Steamed momos in spicy red gravy",
    prices: [
      { label: "Half", amount: 70 },
      { label: "Full", amount: 140 }
    ],
    category: "momos",
    isVeg: true
  },
  {
    id: "m6",
    name: "Tandoori Momos",
    description: "Smoky char-grilled tandoori momos",
    prices: [
      { label: "Half", amount: 100 },
      { label: "Full", amount: 180 }
    ],
    category: "momos",
    isVeg: true
  },
  {
    id: "m7",
    name: "Makhani Momos",
    description: "Momos simmered in creamy makhani sauce",
    prices: [
      { label: "Half", amount: 120 },
      { label: "Full", amount: 200 }
    ],
    category: "momos",
    isVeg: true
  },
  // ─── PASTA ───
  {
    id: "pa1",
    name: "White Sauce",
    description: "Creamy béchamel sauce with herbs",
    prices: [
      { label: "Half", amount: 80 },
      { label: "Full", amount: 140 }
    ],
    category: "pasta",
    isVeg: true
  },
  {
    id: "pa2",
    name: "Red Sauce",
    description: "Tangy tomato marinara sauce",
    prices: [
      { label: "Half", amount: 80 },
      { label: "Full", amount: 140 }
    ],
    category: "pasta",
    isVeg: true
  },
  {
    id: "pa3",
    name: "Mix Sauce",
    description: "Best of white and red, blended",
    prices: [
      { label: "Half", amount: 90 },
      { label: "Full", amount: 160 }
    ],
    category: "pasta",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "pa4",
    name: "Paneer Makhani",
    description: "Rich makhani sauce with paneer chunks",
    prices: [
      { label: "Half", amount: 120 },
      { label: "Full", amount: 220 }
    ],
    category: "pasta",
    isVeg: true
  },
  // ─── ROLLS ───
  {
    id: "r1",
    name: "Spring Roll",
    description: "Crispy spring rolls with veggie filling",
    prices: [
      { label: "Half", amount: 40 },
      { label: "Full", amount: 70 }
    ],
    category: "rolls",
    isVeg: true
  },
  {
    id: "r2",
    name: "Paneer Roll",
    description: "Soft paneer in a crispy roll",
    prices: [
      { label: "Half", amount: 50 },
      { label: "Full", amount: 90 }
    ],
    category: "rolls",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "r3",
    name: "Kurkure Roll",
    description: "Crunchy kurkure-coated roll",
    prices: [
      { label: "Half", amount: 60 },
      { label: "Full", amount: 110 }
    ],
    category: "rolls",
    isVeg: true
  },
  // ─── COMBOS ───
  {
    id: "co1",
    name: "Momos Platter",
    description: "Assorted momos platter for one",
    prices: [{ amount: 99 }],
    category: "combos",
    isVeg: true
  },
  {
    id: "co2",
    name: "Combo Meal Small",
    description: "Burger + fries + drink",
    prices: [{ amount: 150 }],
    category: "combos",
    isVeg: true
  },
  {
    id: "co3",
    name: "Combo Meal Medium",
    description: "Pizza slice + momos + drink",
    prices: [{ amount: 199 }],
    category: "combos",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "co4",
    name: "Combo Meal Large",
    description: "Full meal deal — best value",
    prices: [{ amount: 250 }],
    category: "combos",
    isVeg: true
  },
  // ─── SOUTH INDIAN ───
  {
    id: "si1",
    name: "Masala Dosa",
    description: "Crispy rice crepe with spiced potato filling, served with sambar & chutney",
    prices: [
      { label: "Regular", amount: 70 },
      { label: "Full", amount: 120 }
    ],
    category: "south-indian",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "si2",
    name: "Plain Dosa",
    description: "Classic thin crispy rice crepe with sambar & coconut chutney",
    prices: [
      { label: "Regular", amount: 50 },
      { label: "Full", amount: 90 }
    ],
    category: "south-indian",
    isVeg: true
  },
  {
    id: "si3",
    name: "Onion Dosa",
    description: "Golden rice crepe topped with caramelized onions",
    prices: [
      { label: "Regular", amount: 60 },
      { label: "Full", amount: 100 }
    ],
    category: "south-indian",
    isVeg: true
  },
  {
    id: "si4",
    name: "Paneer Dosa",
    description: "Crispy dosa stuffed with spiced cottage cheese filling",
    prices: [
      { label: "Regular", amount: 80 },
      { label: "Full", amount: 130 }
    ],
    category: "south-indian",
    isVeg: true
  },
  {
    id: "si5",
    name: "Uttapam",
    description: "Soft thick rice pancake with onion, tomato & green chilli toppings",
    prices: [
      { label: "Regular", amount: 70 },
      { label: "Full", amount: 120 }
    ],
    category: "south-indian",
    isVeg: true
  },
  {
    id: "si6",
    name: "Idli (2 pcs)",
    description: "Fluffy steamed rice cakes, served with sambar & fresh coconut chutney",
    prices: [{ amount: 40 }],
    category: "south-indian",
    isVeg: true
  },
  {
    id: "si7",
    name: "Vada (2 pcs)",
    description: "Crispy savory lentil donuts, served with sambar & chutney",
    prices: [{ amount: 50 }],
    category: "south-indian",
    isVeg: true
  },
  {
    id: "si8",
    name: "Idli Vada Combo",
    description: "Best of both worlds — 2 idlis + 1 vada with sambar & chutney",
    prices: [{ amount: 80 }],
    category: "south-indian",
    isVeg: true
  },
  {
    id: "si9",
    name: "Medu Vada",
    description: "Classic fluffy lentil vada, crispy outside, soft inside",
    prices: [{ amount: 50 }],
    category: "south-indian",
    isVeg: true
  },
  {
    id: "si10",
    name: "Sambhar Vada",
    description: "Soft vada soaked in hot tangy sambar",
    prices: [{ amount: 60 }],
    category: "south-indian",
    isVeg: true
  },
  {
    id: "si11",
    name: "Mini Dosa (3 pcs)",
    description: "Bite-sized mini dosas, perfect for a light snack",
    prices: [{ amount: 60 }],
    category: "south-indian",
    isVeg: true
  },
  // ─── WAFFLES ───
  {
    id: "wf1",
    name: "Classic Waffle",
    description: "Golden crispy waffle with maple syrup",
    prices: [{ amount: 70 }],
    category: "waffles",
    isVeg: true
  },
  {
    id: "wf2",
    name: "Peanut Butter Waffle",
    description: "Rich peanut butter drizzle on fluffy waffle",
    prices: [{ amount: 120 }],
    category: "waffles",
    isVeg: true
  },
  {
    id: "wf3",
    name: "Nutella Waffle",
    description: "Generous Nutella spread on warm waffle",
    prices: [{ amount: 90 }],
    category: "waffles",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "wf4",
    name: "All White Waffle",
    description: "White chocolate and cream waffle",
    prices: [{ amount: 120 }],
    category: "waffles",
    isVeg: true
  },
  {
    id: "wf5",
    name: "Strawberry Waffle",
    description: "Fresh strawberry sauce on crispy waffle",
    prices: [{ amount: 90 }],
    category: "waffles",
    isVeg: true
  },
  {
    id: "wf6",
    name: "Lotus Biscoff Waffle",
    description: "Caramelized Biscoff spread with waffle",
    prices: [{ amount: 150 }],
    category: "waffles",
    isVeg: true
  },
  {
    id: "wf7",
    name: "Coffee Crave Buster Waffle",
    description: "Coffee-infused waffle for caffeine lovers",
    prices: [{ amount: 120 }],
    category: "waffles",
    isVeg: true
  },
  {
    id: "wf8",
    name: "Kitkat Waffle",
    description: "Crushed Kitkat with chocolate drizzle",
    prices: [{ amount: 120 }],
    category: "waffles",
    isVeg: true
  },
  {
    id: "wf9",
    name: "Nutella Brownie",
    description: "Warm brownie waffle with Nutella topping",
    prices: [{ amount: 150 }],
    category: "waffles",
    isVeg: true
  },
  {
    id: "wf10",
    name: "Red Velvet Waffle",
    description: "Velvety red waffle with cream cheese drizzle",
    prices: [{ amount: 150 }],
    category: "waffles",
    isVeg: true
  },
  // ─── FRENCH FRIES ───
  {
    id: "ff1",
    name: "French Fries",
    description: "Crispy golden fries, salted to perfection",
    prices: [
      { label: "Small", amount: 60 },
      { label: "Medium", amount: 90 },
      { label: "Large", amount: 120 }
    ],
    category: "french-fries",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "ff2",
    name: "Cheese French Fries",
    description: "Loaded with melted cheese sauce",
    prices: [
      { label: "Small", amount: 90 },
      { label: "Medium", amount: 120 },
      { label: "Large", amount: 160 }
    ],
    category: "french-fries",
    isVeg: true
  },
  // ─── MINI PANCAKES ───
  {
    id: "mp1",
    name: "Classic",
    description: "Fluffy mini pancakes with maple syrup",
    prices: [
      { label: "5 pcs", amount: 70 },
      { label: "12 pcs", amount: 110 }
    ],
    category: "mini-pancakes",
    isVeg: true
  },
  {
    id: "mp2",
    name: "Nutella",
    description: "Mini pancakes with Nutella and hazelnuts",
    prices: [
      { label: "5 pcs", amount: 90 },
      { label: "12 pcs", amount: 120 }
    ],
    category: "mini-pancakes",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "mp3",
    name: "Two Good",
    description: "Our signature pancake with secret topping",
    prices: [
      { label: "5 pcs", amount: 120 },
      { label: "12 pcs", amount: 200 }
    ],
    category: "mini-pancakes",
    isVeg: true
  },
  {
    id: "mp4",
    name: "Red Velvet",
    description: "Velvet red mini pancakes with cream",
    prices: [
      { label: "5 pcs", amount: 120 },
      { label: "12 pcs", amount: 200 }
    ],
    category: "mini-pancakes",
    isVeg: true
  },
  {
    id: "mp5",
    name: "Oreo Cream",
    description: "Oreo crumble with cream cheese drizzle",
    prices: [
      { label: "5 pcs", amount: 120 },
      { label: "12 pcs", amount: 200 }
    ],
    category: "mini-pancakes",
    isVeg: true
  },
  // ─── SHAKES — Thick Shakes ───
  {
    id: "sh1",
    name: "Strawberry Shake",
    description: "Classic creamy strawberry thick shake",
    prices: [{ amount: 80 }],
    category: "shakes",
    isVeg: true,
    subSection: "Thick Shakes"
  },
  {
    id: "sh2",
    name: "Butter Scotch",
    description: "Rich butterscotch with caramel swirl",
    prices: [{ amount: 80 }],
    category: "shakes",
    isVeg: true,
    subSection: "Thick Shakes"
  },
  {
    id: "sh3",
    name: "Vanilla",
    description: "Pure creamy vanilla thick shake",
    prices: [{ amount: 80 }],
    category: "shakes",
    isVeg: true,
    subSection: "Thick Shakes"
  },
  {
    id: "sh4",
    name: "Bubble Tea",
    description: "Boba pearls in your choice of flavor",
    prices: [{ amount: 80 }],
    category: "shakes",
    isVeg: true,
    subSection: "Thick Shakes"
  },
  {
    id: "sh5",
    name: "Chocolate",
    description: "Rich dark chocolate thick shake",
    prices: [{ amount: 70 }],
    category: "shakes",
    isVeg: true,
    subSection: "Thick Shakes"
  },
  // SHAKES — Special Shaker
  {
    id: "sh6",
    name: "Oreo Mint Shake",
    description: "Crushed Oreos with refreshing mint",
    prices: [{ amount: 120 }],
    category: "shakes",
    isVeg: true,
    subSection: "Special Shaker",
    isBestseller: true
  },
  {
    id: "sh7",
    name: "Kitkat Shake",
    description: "Blended Kitkat with creamy milk",
    prices: [{ amount: 100 }],
    category: "shakes",
    isVeg: true,
    subSection: "Special Shaker"
  },
  {
    id: "sh8",
    name: "Belgian Brownie Shake",
    description: "Belgian chocolate brownie blended shake",
    prices: [{ amount: 100 }],
    category: "shakes",
    isVeg: true,
    subSection: "Special Shaker"
  },
  {
    id: "sh9",
    name: "Chocolate Hazelnut Shake",
    description: "Hazelnut praline chocolate shake",
    prices: [{ amount: 100 }],
    category: "shakes",
    isVeg: true,
    subSection: "Special Shaker"
  },
  {
    id: "sh10",
    name: "Lotus Biscoff Shake",
    description: "Biscoff cookie blended shake",
    prices: [{ amount: 80 }],
    category: "shakes",
    isVeg: true,
    subSection: "Special Shaker"
  },
  {
    id: "sh11",
    name: "Nutella Shake",
    description: "Creamy Nutella blended shake",
    prices: [{ amount: 100 }],
    category: "shakes",
    isVeg: true,
    subSection: "Special Shaker"
  },
  // ─── COLD COFFEE — Classic Base ───
  {
    id: "cc1",
    name: "Belgian Chocolate",
    description: "Cold coffee with Belgian chocolate base",
    prices: [{ amount: 90 }],
    category: "cold-coffee",
    isVeg: true,
    subSection: "Classic Base"
  },
  {
    id: "cc2",
    name: "Kit-Kat",
    description: "Cold coffee blended with Kitkat",
    prices: [{ amount: 110 }],
    category: "cold-coffee",
    isVeg: true,
    subSection: "Classic Base"
  },
  {
    id: "cc3",
    name: "Strawberry Cream Cheese",
    description: "Strawberry cream cheese cold coffee",
    prices: [{ amount: 110 }],
    category: "cold-coffee",
    isVeg: true,
    subSection: "Classic Base"
  },
  {
    id: "cc4",
    name: "Two Good",
    description: "Our signature cold coffee blend",
    prices: [{ amount: 110 }],
    category: "cold-coffee",
    isVeg: true,
    subSection: "Classic Base",
    isBestseller: true
  },
  // COLD COFFEE — Chocolate Base
  {
    id: "cc5",
    name: "Chocolate Overload",
    description: "Triple chocolate cold coffee",
    prices: [{ amount: 90 }],
    category: "cold-coffee",
    isVeg: true,
    subSection: "Chocolate Base"
  },
  {
    id: "cc6",
    name: "Dark and White Fantasy",
    description: "Dark and white chocolate swirled",
    prices: [{ amount: 90 }],
    category: "cold-coffee",
    isVeg: true,
    subSection: "Chocolate Base"
  },
  {
    id: "cc7",
    name: "Triple Chocolate",
    description: "Three layers of pure chocolate",
    prices: [{ amount: 110 }],
    category: "cold-coffee",
    isVeg: true,
    subSection: "Chocolate Base"
  },
  {
    id: "cc8",
    name: "Cream N Cookies",
    description: "Cookies and cream cold coffee",
    prices: [{ amount: 110 }],
    category: "cold-coffee",
    isVeg: true,
    subSection: "Chocolate Base"
  },
  {
    id: "cc9",
    name: "Two Good Special",
    description: "Our ultimate signature cold coffee",
    prices: [{ amount: 120 }],
    category: "cold-coffee",
    isVeg: true,
    subSection: "Chocolate Base",
    isBestseller: true
  },
  // COLD COFFEE — Simple
  {
    id: "cc10",
    name: "Cold Coffee with Ice Cream",
    description: "Classic cold coffee with a scoop of ice cream",
    prices: [{ amount: 80 }],
    category: "cold-coffee",
    isVeg: true,
    subSection: "Simple Cold Coffee"
  },
  {
    id: "cc11",
    name: "Hazelnut Cold Coffee",
    description: "Cold coffee with hazelnut syrup",
    prices: [{ amount: 80 }],
    category: "cold-coffee",
    isVeg: true,
    subSection: "Simple Cold Coffee"
  },
  // ─── BEVERAGES ───
  {
    id: "bv1",
    name: "Lemon Ice Tea",
    description: "Chilled lemon-infused iced tea",
    prices: [{ amount: 70 }],
    category: "beverages",
    isVeg: true
  },
  {
    id: "bv2",
    name: "Kala Khatta Lemonade",
    description: "Tangy kala khatta with lemon fizz",
    prices: [{ amount: 70 }],
    category: "beverages",
    isVeg: true
  },
  {
    id: "bv3",
    name: "Blue Curacao Mojito",
    description: "Refreshing blue curacao mocktail",
    prices: [{ amount: 70 }],
    category: "beverages",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "bv4",
    name: "Watermelon Mojito",
    description: "Fresh watermelon with mint mojito",
    prices: [{ amount: 70 }],
    category: "beverages",
    isVeg: true
  },
  {
    id: "bv5",
    name: "Virgin Mojito",
    description: "Classic lime and mint mojito",
    prices: [{ amount: 70 }],
    category: "beverages",
    isVeg: true
  },
  {
    id: "bv6",
    name: "Green Apple Mojito",
    description: "Crisp green apple mojito",
    prices: [{ amount: 70 }],
    category: "beverages",
    isVeg: true
  }
];
function MenuCard({ item, index }) {
  const { addToCart } = useCart();
  const isMulti = item.prices.length > 1;
  const [selectedIdx, setSelectedIdx] = reactExports.useState(0);
  const [addedPulse, setAddedPulse] = reactExports.useState(false);
  const waText = `${WA_BASE}${encodeURIComponent(item.name)}`;
  function handleAddToCart() {
    addToCart(item, selectedIdx);
    setAddedPulse(true);
    setTimeout(() => setAddedPulse(false), 600);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `menu.item.${index + 1}`,
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index % 8 * 0.06, duration: 0.35 },
      className: "group glass glass-hover rounded-2xl p-4 flex flex-col gap-3 shadow-soft",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `h-3 w-3 rounded-full shrink-0 border-2 ${item.isVeg ? "border-green-500 bg-green-500/20" : "border-red-500 bg-red-500/20"}`,
                "aria-label": item.isVeg ? "Vegetarian" : "Non-vegetarian"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-white text-sm leading-snug line-clamp-2", children: item.name }),
            item.isBestseller && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 rounded-full bg-primary/20 border border-primary/40 px-2 py-0.5 text-[10px] font-bold text-primary", children: "Bestseller" })
          ] }),
          item.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/45 text-xs mt-1.5 leading-relaxed line-clamp-2", children: item.description })
        ] }) }),
        isMulti ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex flex-wrap gap-1.5",
            "data-ocid": `menu.size_selector.${index + 1}`,
            children: item.prices.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setSelectedIdx(i),
                "data-ocid": `menu.size_pill.${index + 1}.${i}`,
                className: `flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold border transition-all duration-200 ${selectedIdx === i ? "bg-primary border-primary text-white shadow-glow-orange" : "bg-primary/10 border-primary/20 text-primary hover:bg-primary/20"}`,
                children: [
                  p.label && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `font-normal ${selectedIdx === i ? "text-white/80" : "text-white/50"}`,
                      children: [
                        p.label,
                        ":"
                      ]
                    }
                  ),
                  "₹",
                  p.amount
                ]
              },
              p.label ?? i
            ))
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 rounded-lg bg-primary/10 border border-primary/20 px-2.5 py-1 text-xs font-semibold text-primary", children: [
          "₹",
          item.prices[0].amount
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleAddToCart,
              "data-ocid": `menu.add_to_cart.${index + 1}`,
              className: `w-full rounded-xl py-2.5 text-xs font-bold transition-all duration-200 border ${addedPulse ? "bg-primary text-white border-primary scale-[0.97] shadow-glow-orange" : "bg-primary/90 text-white border-primary/80 hover:bg-primary hover:shadow-glow-orange active:scale-[0.97]"}`,
              children: addedPulse ? "✓ Added!" : "🛒 Add to Cart"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: waText,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": `menu.order_button.${index + 1}`,
              className: "w-full rounded-xl bg-primary/15 border border-primary/25 py-2.5 text-center text-xs font-bold text-primary transition-smooth hover:bg-primary hover:text-white group-hover:shadow-glow-orange",
              children: "📲 Order on WhatsApp"
            }
          )
        ] })
      ]
    }
  );
}
function SubSectionedGrid({ items }) {
  const sections = items.reduce((acc, item) => {
    const key = item.subSection ?? "__default__";
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
  const hasSubSections = Object.keys(sections).length > 1 || !sections.__default__;
  if (!hasSubSections) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "menu.items_grid",
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
        children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCard, { item, index: i }, item.id))
      }
    );
  }
  let globalIndex = 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: Object.entries(sections).map(([section, sectionItems]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    section !== "__default__" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-white/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-primary/30 bg-primary/10", children: section }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-white/10" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": `menu.items_grid.${section.toLowerCase().replace(/\s+/g, "_")}`,
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
        children: sectionItems.map((item) => {
          const idx = globalIndex++;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCard, { item, index: idx }, item.id);
        })
      }
    )
  ] }, section)) });
}
function Menu() {
  var _a;
  const [active, setActive] = reactExports.useState("pizza");
  const filtered = MENU_ITEMS.filter((i) => i.category === active);
  const activeLabel = ((_a = CATEGORIES.find((c) => c.id === active)) == null ? void 0 : _a.label) ?? "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "min-h-screen pt-20 pb-16 text-white",
      style: { background: "oklch(0.10 0 0)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "text-center py-12",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl font-extrabold mb-3", children: [
                "Our ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-orange", children: "Menu" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 max-w-sm mx-auto text-sm", children: "Fresh, bold, affordable — pick your craving." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "data-ocid": "menu.category_tabs",
            className: "flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-thin scrollbar-thumb-white/10 snap-x",
            style: { WebkitOverflowScrolling: "touch", scrollbarWidth: "none" },
            children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": `menu.tab.${cat.id}`,
                onClick: () => setActive(cat.id),
                className: `snap-start shrink-0 flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-smooth whitespace-nowrap border ${active === cat.id ? "bg-primary text-white shadow-glow-orange border-primary" : "glass text-white/70 hover:text-white hover:bg-white/10 border-white/10"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cat.emoji }),
                  cat.label
                ]
              },
              cat.id
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.p,
          {
            initial: { opacity: 0, x: -10 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0 },
            transition: { duration: 0.2 },
            className: "text-white/40 text-xs font-semibold uppercase tracking-widest mb-5",
            children: [
              activeLabel,
              " — ",
              filtered.length,
              " items"
            ]
          },
          `label-${active}`
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -6 },
            transition: { duration: 0.25 },
            children: filtered.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(SubSectionedGrid, { items: filtered }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "menu.empty_state",
                className: "text-center py-24 text-white/40",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-4", children: "🍽️" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Coming soon!" })
                ]
              }
            )
          },
          active
        ) })
      ] })
    }
  );
}
export {
  Menu as default
};
