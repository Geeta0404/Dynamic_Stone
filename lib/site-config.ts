export const siteConfig = {
  name: "Dynamic Stone Inc.",
  shortName: "Dynamic Stone",
  tagline: "Vancouver's Terrazzo Craftsmen Since 1996",
  description:
    "Custom terrazzo flooring, countertops, and architectural finishes — handcrafted in Vancouver, BC for three decades.",
  url: "https://www.dynamicstoneinc.com",
  phone: "604-328-4777",
  phoneHref: "tel:+16043284777",
  email: "dynamicstone@shaw.ca",
  address: {
    city: "Vancouver",
    region: "BC",
    country: "CA",
    serviceArea: "Vancouver & the Lower Mainland, BC",
  },
  social: {
    instagram: "https://www.instagram.com/dynamicstoneinc",
  },
  hours: [
    { day: "Monday – Friday", time: "7:30 AM – 5:00 PM" },
    { day: "Saturday", time: "By appointment" },
    { day: "Sunday", time: "Closed" },
  ],
  founded: 1996,
};

export const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/faq", label: "FAQ & Process" },
      { href: "/care-maintenance", label: "Care & Maintenance" },
    ],
  },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/cast-stone-terrazzo-products", label: "Cast Stone / Terrazzo Products" },
      { href: "/services/flooring-systems", label: "Flooring Systems" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
];
