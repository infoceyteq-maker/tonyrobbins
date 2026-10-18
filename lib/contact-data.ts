import {
  siBilibili,
  siFacebook,
  siFiverr,
  siInstagram,
  siPinterest,
  siTiktok,
  siX,
  siYoutube,
  type SimpleIcon,
} from "simple-icons";

export const ceyteq = {
  company: "Ceyteq – Ceylon Technology",
  tagline: "Empowering Digital Evolution",
  hotlineDisplay: "+94 78 860 7143",
  hotlineHref: "tel:+94788607143",
  whatsappHref: "https://wa.me/94788607143",
  mobileDisplay: "+94 76 860 7143",
  mobileHref: "tel:+94768607143",
  email: "info.ceyteq@gmail.com",
  websiteUrl: "https://www.ceyteq.linkpc.net/",
  websiteDisplay: "www.ceyteq.linkpc.net",
};

export type SocialCategory = "Social" | "Video" | "Professional";

export type SocialLink = {
  name: string;
  handle: string;
  url: string;
  action: string;
  category: SocialCategory;
  /** Brand color hex without "#" */
  brandHex: string;
  /** simple-icons glyph, when available */
  icon?: SimpleIcon;
  /** Render the Lucide Linkedin glyph instead (not shipped by simple-icons) */
  useLucideLinkedin?: boolean;
  /** Letterform fallback (e.g. Contra) */
  letter?: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    handle: "Ceyteq Page",
    url: "https://www.facebook.com/share/1KM2kZvaCC/",
    action: "Follow",
    category: "Social",
    brandHex: siFacebook.hex,
    icon: siFacebook,
  },
  {
    name: "Instagram",
    handle: "@ceyteq",
    url: "https://www.instagram.com/ceyteq/",
    action: "Follow",
    category: "Social",
    brandHex: siInstagram.hex,
    icon: siInstagram,
  },
  {
    name: "LinkedIn",
    handle: "Ceylon Technology",
    url: "https://www.linkedin.com/in/ceylon-technology",
    action: "Connect",
    category: "Professional",
    brandHex: "0A66C2",
    useLucideLinkedin: true,
  },
  {
    name: "TikTok",
    handle: "@ceyteq",
    url: "https://www.tiktok.com/@ceyteq?lang=en-GB",
    action: "Watch",
    category: "Video",
    brandHex: siTiktok.hex,
    icon: siTiktok,
  },
  {
    name: "YouTube",
    handle: "@ceylontechnology-ceyteq",
    url: "https://youtube.com/@ceylontechnology-ceyteq?si=a4L-B_OZjvhjO7sw",
    action: "Subscribe",
    category: "Video",
    brandHex: siYoutube.hex,
    icon: siYoutube,
  },
  {
    name: "Pinterest",
    handle: "@infoceyteq",
    url: "https://www.pinterest.com/infoceyteq/",
    action: "Follow",
    category: "Social",
    brandHex: siPinterest.hex,
    icon: siPinterest,
  },
  {
    name: "X (Twitter)",
    handle: "@CeylonTech22598",
    url: "https://x.com/CeylonTech22598",
    action: "Follow",
    category: "Social",
    brandHex: siX.hex,
    icon: siX,
  },
  {
    name: "BiliBili",
    handle: "Ceyteq Channel",
    url: "https://space.bilibili.com/3745026628651356",
    action: "Watch",
    category: "Video",
    brandHex: siBilibili.hex,
    icon: siBilibili,
  },
  {
    name: "Contra",
    handle: "Ceylon Technology",
    url: "https://contra.com/ceylon_technology_ao16fx0l/work?r=ceylon_technology_ao16fx0l",
    action: "View Work",
    category: "Professional",
    brandHex: "0A1F44",
    letter: "C",
  },
  {
    name: "Fiverr",
    handle: "Ceyteq Pro",
    url: "https://pro.fiverr.com/s/emmbpjk",
    action: "Hire Us",
    category: "Professional",
    brandHex: siFiverr.hex,
    icon: siFiverr,
  },
];

export const expertise = [
  "Web Development",
  "Digital Marketing",
  "Ad Campaigns",
  "Printing & Signage",
  "Creative Media",
  "AI / ERP Solutions",
  "PR & Personal Branding",
];

export const subjectPresets = [
  "Project Discussion",
  "Web Development",
  "Digital Marketing & Ads",
  "Printing & Signage",
  "AI / ERP Solutions",
  "PR & Personal Branding",
];
