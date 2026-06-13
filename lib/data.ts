export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Dynamic Stone redid the lobby floor in our building and it completely changed how the space feels. The crew was meticulous, tidy, and finished ahead of schedule.",
    name: "Marian Levesque",
    role: "Property Manager, Coal Harbour Residences",
  },
  {
    quote:
      "We needed a terrazzo countertop that matched a very specific palette for our restaurant. They mocked up samples, talked us through the process, and the final install was flawless.",
    name: "Devon Okafor",
    role: "Owner, Maple & Ash Kitchen",
  },
  {
    quote:
      "Thirty years of experience really shows. They caught a subsurface issue before it became a problem and saved us a re-pour. Honest, skilled, and easy to work with.",
    name: "Priya Anand",
    role: "General Contractor, Anand Construction Group",
  },
  {
    quote:
      "Our community centre's gymnasium floor has taken a beating from daily use for two years and still looks brand new. Worth every dollar.",
    name: "Tom Reidy",
    role: "Facilities Director, Burnaby Recreation Centre",
  },
  {
    quote:
      "From the first site visit to the final polish, communication was excellent. They explained the whole process so we knew exactly what to expect.",
    name: "Sandra Wu",
    role: "Homeowner, Kitsilano",
  },
  {
    quote:
      "We've used Dynamic Stone on three commercial projects now. Consistent quality, fair pricing, and they stand behind their work.",
    name: "James Whitfield",
    role: "Project Manager, Whitfield Developments",
  },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Consultation & Site Visit",
    description:
      "We walk the space with you, discuss your vision, and assess the substrate to recommend the right terrazzo system.",
  },
  {
    title: "Design & Sample Approval",
    description:
      "Choose your aggregate, binder, and colour palette. We provide physical samples so you can see and feel the finish before we begin.",
  },
  {
    title: "Surface Preparation",
    description:
      "We prepare and prime the substrate, install dividers and reinforcement, and protect surrounding areas.",
  },
  {
    title: "Pour & Cure",
    description:
      "Terrazzo is poured, seeded, and left to cure fully — the foundation of a surface that lasts for decades.",
  },
  {
    title: "Grind & Polish",
    description:
      "Multiple passes of grinding and polishing reveal the aggregate and bring the surface to a smooth, lasting shine.",
  },
  {
    title: "Seal & Walkthrough",
    description:
      "We seal the finished surface, complete a final walkthrough with you, and provide simple care instructions.",
  },
];

export type PortfolioCategory = "Residential" | "Commercial" | "Recreational";

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  location: string;
  description: string;
  alt: string;
  image: string;
};

// Placeholder "dummy" floor photos (Lorem Picsum, seeded for consistency).
// Swap these src URLs for real, descriptively-named project photos
// hosted under /public/images when available.
export const portfolioItems: PortfolioItem[] = [
  {
    id: "lions-bay-lottery-home-terrazzo-great-room-floor",
    title: "Lottery Show Home Great Room Floor",
    category: "Residential",
    location: "Lions Bay, BC",
    description:
      "Seamless custom terrazzo flooring installed throughout the great room of a Lions Bay lottery show home.",
    alt: "Custom terrazzo great room flooring in a Lions Bay lottery show home",
    image: "/images/Residential and Commercial/project_Lottery Home Lions Bay.jpg",
  },
  {
    id: "north-vancouver-condo-entranceway-terrazzo-flooring",
    title: "Condo Entranceway Flooring",
    category: "Commercial",
    location: "North Vancouver, BC",
    description:
      "Durable, polished terrazzo flooring installed in the entranceway of a North Vancouver condominium building.",
    alt: "Polished terrazzo entranceway flooring in a North Vancouver condominium building",
    image: "/images/Residential and Commercial/project_Condo Entranceway.jpg",
  },
  {
    id: "whistler-exterior-terrazzo-steps",
    title: "Outdoor Precast Terrazzo Steps",
    category: "Residential",
    location: "Whistler, BC",
    description:
      "Weather-resistant precast terrazzo steps designed for an exterior entrance in Whistler's mountain climate.",
    alt: "Weather-resistant precast terrazzo exterior steps at a Whistler home",
    image: "/images/Residential and Commercial/project_Whistler - Exterior Steps.jpg",
  },
  {
    id: "white-rock-spa-terrazzo-fireplace-surround",
    title: "Spa Fireplace Surround",
    category: "Recreational",
    location: "White Rock, BC",
    description:
      "Custom terrazzo fireplace surround crafted as a feature element within a White Rock spa.",
    alt: "Custom terrazzo fireplace surround inside a White Rock spa",
    image: "/images/Residential and Commercial/project_White Rock Spa.jpg",
  },
  {
    id: "custom-terrazzo-reception-desk",
    title: "Custom Terrazzo Reception Desk",
    category: "Commercial",
    location: "Greater Vancouver, BC",
    description:
      "A one-piece custom terrazzo reception desk, cast and polished to match the building's interior palette.",
    alt: "Custom cast terrazzo reception desk in a commercial lobby",
    image: "/images/Residential and Commercial/project_Reception Desk.jpg",
  },
  {
    id: "lonsdale-north-vancouver-office-terrazzo-flooring",
    title: "Lonsdale Office Flooring",
    category: "Commercial",
    location: "North Vancouver, BC",
    description:
      "Refinished terrazzo flooring for an office building on Lonsdale Avenue, restoring its original shine.",
    alt: "Refinished terrazzo flooring inside a North Vancouver office building on Lonsdale Avenue",
    image: "/images/Residential and Commercial/project_North Vancouver Office.jpg",
  },
  {
    id: "residential-terrazzo-entry-steps",
    title: "Residential Entry Steps",
    category: "Residential",
    location: "Greater Vancouver, BC",
    description:
      "Custom-poured terrazzo entry steps finished to complement the home's exterior stonework.",
    alt: "Custom-poured terrazzo entry steps at a residential home entrance",
    image: "/images/Residential and Commercial/project_Residential Steps.jpg",
  },
  {
    id: "bcaa-custom-terrazzo-inset-logo-flooring",
    title: "BCAA Custom Inset Logo Floor",
    category: "Commercial",
    location: "Greater Vancouver, BC",
    description:
      "A custom terrazzo floor with the BCAA logo precision-inlaid using coloured aggregate and metal divider strips.",
    alt: "Custom terrazzo flooring with an inlaid BCAA logo using coloured aggregate and metal dividers",
    image: "/images/Custom Terrazzo Design/project_BCAA Custom Inset Logo.jpg",
  },
  {
    id: "custom-yin-yang-terrazzo-design",
    title: "Custom Yin Yang Terrazzo Inlay",
    category: "Recreational",
    location: "Greater Vancouver, BC",
    description:
      "A custom yin yang pattern inlaid in terrazzo using contrasting aggregate, designed for a wellness-focused space.",
    alt: "Custom yin yang pattern inlaid in terrazzo flooring with contrasting aggregate colours",
    image: "/images/Custom Terrazzo Design/project_Inlay.jpg",
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  "Residential",
  "Commercial",
  "Recreational",
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    question: "What is terrazzo, exactly?",
    answer:
      "Terrazzo is a composite material made of marble, quartz, granite, glass, or other aggregate chips set into a binder (cement-based or epoxy resin), then ground and polished to a smooth, even finish. It's prized for its durability, design flexibility, and seamless appearance.",
  },
  {
    question: "How long does a terrazzo installation take?",
    answer:
      "Timelines depend on the size and type of project. A residential countertop typically takes 1-2 weeks from template to install, while large commercial flooring projects can take several weeks to allow for proper curing between stages. We'll give you a detailed schedule during your consultation.",
  },
  {
    question: "Is terrazzo a good choice for high-traffic areas?",
    answer:
      "Yes — it's one of the main reasons terrazzo is so popular for schools, arenas, hospitals, and commercial lobbies. Properly installed and sealed terrazzo can last 40+ years with minimal maintenance, even under constant foot traffic.",
  },
  {
    question: "Can terrazzo be installed outdoors or in wet areas?",
    answer:
      "Absolutely. With the right sealant and slip-resistant finish, terrazzo performs well on patios, pool decks, and bathroom floors. We'll recommend the right system based on your project's exposure to moisture and weather.",
  },
  {
    question: "How do we maintain a terrazzo surface?",
    answer:
      "Routine care is simple: regular sweeping or dust-mopping, occasional damp mopping with a pH-neutral cleaner, and resealing every few years depending on traffic. We provide a care guide with every completed project.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Submit a request through our quote form or give us a call, and we'll arrange a site visit or review your drawings to provide a detailed estimate at no cost.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We're based in Vancouver and serve the Lower Mainland, including Burnaby, Richmond, North & West Vancouver, Surrey, and the Fraser Valley. For larger commercial projects, we also travel further across BC — just ask.",
  },
  {
    question: "What factors affect the cost of a terrazzo project?",
    answer:
      "Price depends on the system you choose (rustic, clear textured, or epoxy stone & quartz), the size and condition of the existing substrate, the complexity of the design (custom colours, patterns, or inlays), and whether the area is indoors or outdoors. We'll walk through all of these during your free consultation and provide a detailed, itemized quote before any work begins.",
  },
  {
    question: "Can you inlay a custom logo or design into the floor?",
    answer:
      "Yes — custom logo and pattern inlays are one of our specialties. We've created precision floor logos for shopping malls, pharmacies, and organizations like BCAA using coloured aggregate and metal divider strips. Send us your logo or design concept and we'll work out colours, materials, and placement with you.",
  },
  {
    question: "Do you offer a warranty on your work?",
    answer:
      "Yes. All of our installations are backed by a workmanship warranty, and materials carry manufacturer warranties as well. Properly installed and maintained terrazzo routinely lasts 40+ years, and we stand behind our work — if something needs attention after the job is done, we're a phone call away.",
  },
];
