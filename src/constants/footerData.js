import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdPhone, MdEmail } from "react-icons/md";

export const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Who We Are", to: "/who-we-are" },
  { label: "Services", to: "/services" },
  { label: "Brands", to: "/brands" },
  { label: "Technology & Infrastructure", to: "/technology" },
  { label: "Network", to: "/network" },
  { label: "Contact Us", to: "/contact" },
];


export const contactInfo = [
  {
    id: "address",
    icon: FaLocationDot,
    label: "Address",
    text: "Q-4, APMC Market 2, Phase 2, Sector 19B, Vashi, Navi Mumbai, Maharashtra, 400703",
    preLine: true
  },
  {
    id: "phone",
    icon: MdPhone,
    label: "Call Us",
    text: "+91 22 4521 0999",
    href: "tel:+912245210999",
  },
  {
    id: "email",
    icon: MdEmail,
    label: "Mail Us",
    text: "info@manojmultifoods.com",
    href: "mailto:info@manojmultifoods.com",
  },
];



export const socialLinks = [
  { id: "facebook", icon: FaFacebookF, href: "https://www.facebook.com/ManojMultifoods" },
  { id: "twitter", icon: FaXTwitter, href: "https://x.com/ManojMultifoods"  },
  { id: "instagram", icon: FaInstagram, href: "https://www.instagram.com/manojmultifoods/"  },
  { id: "linkedin", icon: FaLinkedinIn, href: "https://www.linkedin.com/company/mmfgroup/"  },
  { id: "youtube", icon: FaYoutube, href: "https://www.youtube.com/@Manojmultifoods"  },
];