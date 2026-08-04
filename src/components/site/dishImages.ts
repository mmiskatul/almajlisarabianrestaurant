import mandi from "@/assets/dish-mandi.jpg";
import kebab from "@/assets/dish-kebab.jpg";
import tagine from "@/assets/dish-tagine.jpg";
import kunafa from "@/assets/dish-kunafa.jpg";
import coffee from "@/assets/dish-coffee.jpg";
import tawook from "@/assets/dish-tawook.jpg";
import drinks from "@/assets/dish-drinks.jpg";
import ouzi from "@/assets/gallery-3.jpg";
import mezze from "@/assets/gallery-2.jpg";
import booth from "@/assets/gallery-1.jpg";
import interior from "@/assets/hero-interior.jpg";
import founder from "@/assets/founder.jpg";

export const IMG = {
  mandi,
  kebab,
  tagine,
  kunafa,
  coffee,
  tawook,
  drinks,
  ouzi,
  mezze,
  booth,
  interior,
  founder,
};

export const DISH_IMAGE: Record<string, string> = {
  "lamb-mandi": mandi,
  "chicken-mandi": mandi,
  "lamb-kabsa": mandi,
  "mixed-grill": kebab,
  "shish-tawook": tawook,
  "lamb-kofta": kebab,
  "shish-kebab": kebab,
  "chicken-tagine": tagine,
  "lamb-tagine": tagine,
  "eqdah-lahm": tagine,
  "prawn-tagine": tagine,
  ouzi: ouzi,
  madfoon: ouzi,
  "lamb-haneeth": ouzi,
  "grilled-hammour": ouzi,
  kunafa: kunafa,
  "umm-ali": kunafa,
  baklava: kunafa,
  gahwa: coffee,
  karak: coffee,
  "mint-lemonade": drinks,
  pomegranate: drinks,
  hummus: mezze,
  mutabbal: mezze,
  khubz: mezze,
};

export const CATEGORY_IMAGE: Record<string, string> = {
  "kebab-grills": kebab,
  "tagine-eqdah": tagine,
  "chicken-meat": ouzi,
  "rice-sides": mandi,
  desserts: kunafa,
  "coffee-drinks": coffee,
};

export const GALLERY = [
  { src: interior, alt: "Almajlis main dining hall with carved mashrabiya screens and lanterns" },
  { src: ouzi, alt: "Whole roasted lamb ouzi presented on a brass platter" },
  { src: booth, alt: "Private majlis booth with cushioned seating at Almajlis Dhaka" },
  { src: kebab, alt: "Mixed charcoal grill platter of kofta and lamb skewers" },
  { src: mezze, alt: "Arabian mezze spread with hummus, mutabbal and fresh khubz" },
  { src: tagine, alt: "Chicken tagine steaming in a clay pot" },
  { src: kunafa, alt: "Kunafa dessert with pistachio and honey syrup" },
  { src: coffee, alt: "Arabic gahwa poured from a brass dallah with dates" },
];