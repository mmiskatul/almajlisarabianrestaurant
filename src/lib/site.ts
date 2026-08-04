export const RESTAURANT = {
  name: "Almajlis Arabian Restaurant",
  nameAr: "مطعم المجلس العربي",
  phone: "+8801830000233",
  phoneDisplay: "+880 1830 000233",
  whatsapp: "8801830000233",
  email: "info@almajlisarabianrestaurant.com",
  address: "27 C/A Faisal Tower, 2nd Floor, Road 52, Gulshan-2, Dhaka 1212, Bangladesh",
  hours: "Open Daily · 11:00 AM – 2:00 AM",
  established: "2019",
  mapEmbed:
    "https://www.google.com/maps?q=Faisal+Tower+Road+52+Gulshan+2+Dhaka&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Faisal+Tower+Road+52+Gulshan+2+Dhaka",
  social: {
    instagram: "https://www.instagram.com/almajlisarabianrestaurant",
    facebook: "https://www.facebook.com/almajlisarabianrestaurant",
    snapchat: "https://www.snapchat.com/add/almajlisdhaka",
  },
};

export function wa(message: string) {
  return `https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_RESERVE = wa("Hi, I want to Reserve a Table");
export const WA_PICKUP = wa("Hi, I would like to Order for Pickup from Almajlis");
export const WA_CATERING = wa("Hi, I would like a Catering Quote from Almajlis");

export type MenuItem = {
  id: string;
  name: string;
  nameAr: string;
  desc: string;
  price: number;
  category: CategoryId;
  veg?: boolean;
};

export type CategoryId =
  | "kebab-grills"
  | "tagine-eqdah"
  | "chicken-meat"
  | "rice-sides"
  | "desserts"
  | "coffee-drinks";

export const CATEGORIES: { id: CategoryId; label: string; labelAr: string; blurb: string }[] = [
  {
    id: "kebab-grills",
    label: "Kebab & Grills",
    labelAr: "الكباب والمشاوي",
    blurb: "Charcoal-fired skewers, minced kofta and mixed grills",
  },
  {
    id: "tagine-eqdah",
    label: "Tagine & Eqdah",
    labelAr: "الطاجن والعقدة",
    blurb: "Clay-pot stews simmered low and slow",
  },
  {
    id: "chicken-meat",
    label: "Chicken & Meat",
    labelAr: "الدجاج واللحوم",
    blurb: "Roasted, grilled and spice-rubbed mains",
  },
  {
    id: "rice-sides",
    label: "Rice & Sides",
    labelAr: "الأرز والمقبلات",
    blurb: "Mandi, kabsa, mezze and fresh-baked khubz",
  },
  {
    id: "desserts",
    label: "Desserts",
    labelAr: "الحلويات",
    blurb: "Kunafa, umm ali and pistachio sweets",
  },
  {
    id: "coffee-drinks",
    label: "Coffee & Drinks",
    labelAr: "القهوة والمشروبات",
    blurb: "Gahwa, karak and cold-pressed juices",
  },
];

export const MENU: MenuItem[] = [
  { id: "lamb-mandi", name: "Lamb Mandi", nameAr: "مندي لحم", desc: "Smoke-pit lamb rested over saffron rice with raisins and toasted nuts.", price: 1450, category: "rice-sides" },
  { id: "chicken-mandi", name: "Chicken Mandi", nameAr: "مندي دجاج", desc: "Half chicken slow-cooked in the underground taboon, served on mandi rice.", price: 890, category: "rice-sides" },
  { id: "lamb-kabsa", name: "Lamb Kabsa", nameAr: "كبسة لحم", desc: "Tomato-spiced Najdi rice with tender lamb shoulder and daqoos.", price: 1390, category: "rice-sides" },
  { id: "khubz", name: "Arabic Khubz Basket", nameAr: "خبز عربي", desc: "Blistered flatbread pulled straight from the stone oven.", price: 120, category: "rice-sides", veg: true },
  { id: "hummus", name: "Hummus Beiruti", nameAr: "حمص بيروتي", desc: "Whipped chickpea, tahini and lemon finished with green olive oil.", price: 320, category: "rice-sides", veg: true },
  { id: "mutabbal", name: "Mutabbal", nameAr: "متبل", desc: "Fire-roasted aubergine folded with tahini and pomegranate.", price: 340, category: "rice-sides", veg: true },
  { id: "mixed-grill", name: "Almajlis Mixed Grill", nameAr: "مشاوي مشكلة", desc: "Kofta, shish tawook and lamb cubes over charcoal, for two.", price: 1690, category: "kebab-grills" },
  { id: "shish-tawook", name: "Shish Tawook", nameAr: "شيش طاووق", desc: "Yoghurt-marinated chicken skewers with garlic toum.", price: 780, category: "kebab-grills" },
  { id: "lamb-kofta", name: "Lamb Kofta Kebab", nameAr: "كفتة لحم", desc: "Hand-minced lamb with parsley and Aleppo pepper.", price: 850, category: "kebab-grills" },
  { id: "shish-kebab", name: "Lamb Shish Kebab", nameAr: "شيش كباب", desc: "Cubed lamb loin, onion and capsicum, grilled to a blush.", price: 940, category: "kebab-grills" },
  { id: "chicken-tagine", name: "Chicken Tagine", nameAr: "طاجن دجاج", desc: "Clay-pot chicken with preserved lemon, green olive and coriander.", price: 820, category: "tagine-eqdah" },
  { id: "lamb-tagine", name: "Lamb & Apricot Tagine", nameAr: "طاجن لحم بالمشمش", desc: "Three-hour lamb braise sweetened with apricot and cinnamon.", price: 1180, category: "tagine-eqdah" },
  { id: "eqdah-lahm", name: "Eqdah Lahm", nameAr: "عقدة لحم", desc: "Yemeni pot roast of lamb, tomato and hawaij, bubbling at the table.", price: 1250, category: "tagine-eqdah" },
  { id: "prawn-tagine", name: "Prawn Tagine", nameAr: "طاجن روبيان", desc: "Bay prawns in chermoula with tomato and coriander.", price: 1090, category: "tagine-eqdah" },
  { id: "ouzi", name: "Lamb Ouzi", nameAr: "عوزي لحم", desc: "Whole slow-roasted lamb leg on spiced rice — a majlis centrepiece.", price: 6500, category: "chicken-meat" },
  { id: "madfoon", name: "Chicken Madfoon", nameAr: "مدفون دجاج", desc: "Buried-pit chicken, smoked over embers, falling off the bone.", price: 920, category: "chicken-meat" },
  { id: "lamb-haneeth", name: "Lamb Haneeth", nameAr: "حنيذ لحم", desc: "Hadhrami-style lamb steamed for six hours with black lime.", price: 1520, category: "chicken-meat" },
  { id: "grilled-hammour", name: "Grilled Hammour", nameAr: "هامور مشوي", desc: "Whole fish rubbed with bezar spice and grilled over charcoal.", price: 1350, category: "chicken-meat" },
  { id: "kunafa", name: "Kunafa Nabulsiyah", nameAr: "كنافة نابلسية", desc: "Warm cheese kunafa under crisp pastry, drenched in rose syrup.", price: 420, category: "desserts", veg: true },
  { id: "umm-ali", name: "Umm Ali", nameAr: "أم علي", desc: "Baked milk pudding with pistachio, almond and coconut.", price: 380, category: "desserts", veg: true },
  { id: "baklava", name: "Pistachio Baklava", nameAr: "بقلاوة فستق", desc: "Forty layers of filo, clarified butter and Aleppo pistachio.", price: 350, category: "desserts", veg: true },
  { id: "gahwa", name: "Arabic Gahwa", nameAr: "قهوة عربية", desc: "Cardamom-scented coffee poured from the dallah with dates.", price: 220, category: "coffee-drinks", veg: true },
  { id: "karak", name: "Karak Chai", nameAr: "شاي كرك", desc: "Strong milk tea boiled with cardamom and saffron.", price: 160, category: "coffee-drinks", veg: true },
  { id: "mint-lemonade", name: "Mint Lemonade", nameAr: "ليمون بالنعناع", desc: "Iced lemon and crushed mint, blended to order.", price: 240, category: "coffee-drinks", veg: true },
  { id: "pomegranate", name: "Fresh Pomegranate Juice", nameAr: "عصير رمان", desc: "Cold-pressed pomegranate, nothing added.", price: 290, category: "coffee-drinks", veg: true },
];

export const TESTIMONIALS = [
  {
    name: "M Jasim Nahid",
    text: "The atmosphere is genuinely Arabian — the food quality and the staff hospitality both stood out. It feels like dining in the Gulf without leaving Dhaka.",
    rating: 5,
  },
  {
    name: "Nasib Khan",
    text: "Highly recommended for families and friends. Spacious seating, warm service and portions built for sharing around one table.",
    rating: 5,
  },
  {
    name: "Ahmed Alsakkaf",
    text: "The only real Arabic restaurant in Bangladesh. The mandi and haneeth taste exactly the way they should back home.",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "Do you take walk-ins or only reservations?",
    a: "Both. Walk-in guests are always welcome, though weekend evenings fill quickly — a WhatsApp reservation guarantees your majlis seating.",
  },
  {
    q: "Is your meat halal-certified?",
    a: "Yes. All meat and poultry served at Almajlis is 100% halal, sourced from certified suppliers and prepared in a fully halal kitchen.",
  },
  {
    q: "Is there parking available?",
    a: "Yes — Faisal Tower has on-site parking for guests, with valet assistance during peak dinner hours.",
  },
  {
    q: "Do you cater weddings and large events?",
    a: "We do. From ouzi platters for a family gathering to full Arabian buffets for weddings and corporate events, message us on WhatsApp for a tailored quote.",
  },
  {
    q: "Do you offer vegetarian options?",
    a: "Yes. Our mezze table — hummus, mutabbal, fattoush, falafel, stone-oven khubz — is entirely vegetarian, alongside vegetable tagines.",
  },
  {
    q: "What are your opening hours?",
    a: `${RESTAURANT.hours}. The same hours apply to dine-in, takeaway pickup and catering enquiries.`,
  },
];