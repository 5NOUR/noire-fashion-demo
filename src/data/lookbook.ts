import type { LookbookItem } from "@/types";

export const lookbookItems: LookbookItem[] = [
  {
    id: "look-1",
    title: "Shadow Play",
    description: "Layering textures in monochrome.",
    image: "/images/lookbook/look-1.jpg",
    productIds: ["1", "2"],
    position: { x: 70, y: 30 },
  },
  {
    id: "look-2",
    title: "Quiet Strength",
    description: "Structured tailoring meets soft drape.",
    image: "/images/lookbook/look-2.jpg",
    productIds: ["7", "3"],
    position: { x: 30, y: 60 },
  },
  {
    id: "look-3",
    title: "Urban Noir",
    description: "Denim and leather for the city.",
    image: "/images/lookbook/look-3.jpg",
    productIds: ["5", "8"],
    position: { x: 60, y: 70 },
  },
  {
    id: "look-4",
    title: "Soft Minimalism",
    description: "Neutral tones and natural light.",
    image: "/images/lookbook/look-4.jpg",
    productIds: ["6", "9"],
    position: { x: 40, y: 40 },
  },
];
