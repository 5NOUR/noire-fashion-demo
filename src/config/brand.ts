export const brandConfig = {
  name: "NOIRÉ",
  tagline: "Darkness, tailored.",
  description:
    "NOIRÉ is a luxury contemporary fashion brand. Each piece is designed with restraint and intention — for those who find strength in silence.",
  logo: {
    text: "NOIRÉ",
    // يمكن استخدام صورة لاحقًا
    image: null as string | null,
    width: 120,
    height: 40,
  },
  colors: {
    primary: "#0a0a0a",
    accent: "#c9a227", // ذهبي هادئ
    background: "#ffffff",
    foreground: "#0a0a0a",
  },
  typography: {
    heading: "Bodoni Moda",
    body: "Manrope",
  },
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/profile.php",
    tiktok: "https://tiktok.com/",
    pinterest: "https://pinterest.com/",
  },
  contact: {
    email: "tamernoureldean@gmail.com",
    phone: "+20 15 540 42400",
    address: "12 Rue de la Mode, Paris, France",
  },
  announcement: {
    text: "Free worldwide shipping on orders over $200",
    enabled: true,
  },
  currency: {
    code: "USD",
    symbol: "$",
    locale: "en-US",
  },
} as const;

export type BrandConfig = typeof brandConfig;
