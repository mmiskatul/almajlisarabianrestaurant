import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

const dict = {
  nav_home: ["Home", "الرئيسية"],
  nav_menu: ["Menu", "القائمة"],
  nav_about: ["About", "عن المجلس"],
  nav_gallery: ["Gallery", "المعرض"],
  nav_contact: ["Contact", "اتصل بنا"],
  reserve: ["Reserve a Table", "احجز طاولة"],
  view_menu: ["View Menu", "تصفح القائمة"],
  hero_eyebrow: ["Authentic Arabian Dining in the Heart of Dhaka", "أصالة عربية في قلب دكا"],
  hero_title: ["Where Tradition Meets Taste", "حيث يلتقي التراث بالمذاق"],
  hero_sub: [
    "Charcoal-fired kebabs, slow-smoked mandi and Arabian hospitality, served nightly in Gulshan-2.",
    "كباب على الفحم، ومندي مدخّن ببطء، وكرم ضيافة عربي كل ليلة في غلشان ٢.",
  ],
  scroll: ["Scroll", "مرر للأسفل"],
  signature: ["Signature Dishes", "أطباقنا المميزة"],
  explore_menu: ["Explore Full Menu", "استعرض القائمة كاملة"],
  our_story: ["Our Story", "قصتنا"],
  discover_story: ["Discover Our Story", "اكتشف قصتنا"],
  enjoy: ["How You Can Enjoy Us", "كيف تستمتع بالمجلس"],
  categories: ["Menu Categories", "أقسام القائمة"],
  gallery: ["Gallery", "المعرض"],
  view_gallery: ["View Full Gallery", "شاهد المعرض كاملاً"],
  testimonials: ["Guest Voices", "آراء ضيوفنا"],
  reservations: ["Reservations", "الحجوزات"],
  faq: ["Frequently Asked", "الأسئلة الشائعة"],
  view_details: ["View Details", "التفاصيل"],
} as const;

export type Key = keyof typeof dict;

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => dict[k][0],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("almajlis-lang");
    if (stored === "ar" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("almajlis-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <Ctx.Provider value={{ lang, setLang, t: (k) => dict[k][lang === "ar" ? 1 : 0] }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang() {
  return useContext(Ctx);
}