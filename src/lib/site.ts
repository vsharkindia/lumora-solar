// Site-wide content for Lumora Solar (a fictional company used as a demo).

export const site = {
  name: "Lumora Solar",
  tagline: "Rooftop solar & battery storage for homes and businesses",
  city: "Austin, Texas",
  phone: "(512) 555-0147",
  email: "hello@lumorasolar.example",
  address: "2100 Sunrise Ave, Suite 300, Austin, TX 78702",
  hours: "Mon–Fri 8am–6pm · Sat 9am–1pm",
  url: "https://vsharkindia.github.io/lumora-solar",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/solutions/", label: "Solutions" },
  { href: "/projects/", label: "Projects" },
  { href: "/contact/", label: "Contact" },
];

export const stats = [
  { value: 1840, suffix: "+", label: "Systems installed" },
  { value: 23, suffix: " MW", label: "Clean capacity" },
  { value: 4.9, suffix: "★", label: "Average review", decimals: 1 },
  { value: 25, suffix: " yr", label: "Workmanship warranty" },
];

export const steps = [
  { title: "Free roof assessment", body: "We review satellite imagery and your last 12 months of bills, then visit to measure the roof and check the electrical panel." },
  { title: "Custom design", body: "Our engineers model panel layout, shading and output hour by hour, so the estimate you see is the output you get." },
  { title: "Permits & install", body: "We handle the city permits and utility paperwork. Most homes are installed in one or two days by our own crews, never subcontractors." },
  { title: "Switch on & monitor", body: "After inspection we power you up and set up the app, so you can follow every kilowatt-hour from your phone." },
];

export const testimonials = [
  { quote: "The proposal predicted 11,900 kWh in our first year. We got 12,140. Our summer bill went from $310 to $22.", name: "Rachel & Tom H.", place: "Round Rock · 9.6 kW + battery" },
  { quote: "They came back twice to adjust the layout around our dormers, and never once pushed us to upsize. That honesty is why we signed.", name: "Marcus D.", place: "South Austin · 7.2 kW" },
  { quote: "Our warehouse roof now covers 70% of our daytime load. Lumora handled ERCOT interconnection from start to finish.", name: "Priya S., Ops Director", place: "Pflugerville · 148 kW commercial" },
];

export const faqs = [
  { q: "How much does a home solar system cost?", a: "Most homes we install are between 6 and 11 kW, typically $17,000–$32,000 before incentives. Your exact price depends on roof layout, equipment and whether you add a battery. Use the calculator above for a starting estimate, and we'll firm it up for free." },
  { q: "Will solar work during a power outage?", a: "Grid-tied panels shut off during an outage for line-worker safety. Add a battery and your essential circuits keep running, and the panels recharge the battery each day." },
  { q: "How long do panels last?", a: "Our tier-1 panels carry a 25-year performance warranty and typically produce more than 85% of their original output after 25 years. Inverters are warranted for 12–25 years, depending on the model." },
  { q: "Do I need a new roof first?", a: "If your roof has less than about 8 years of life left, re-roofing first usually saves money. We'll tell you honestly during the assessment, and we can coordinate with a roofer." },
  { q: "Can I finance my system?", a: "Yes: cash, 10–20 year solar loans, or a lease. We'll show the 25-year cost of each side by side so you can choose." },
];
