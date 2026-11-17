export type ProjectKind = "Residential" | "Commercial" | "Battery";

export interface Project {
  slug: string;
  title: string;
  location: string;
  kind: ProjectKind;
  sizeKw: number;
  panels: number;
  annualKwh: number;
  offsetPct: number;
  battery?: string;
  summary: string;
  palette: [string, string]; // sky gradient for the illustration
}

export const projects: Project[] = [
  {
    slug: "hillside-ranch",
    title: "Hillside ranch home",
    location: "Dripping Springs, TX",
    kind: "Residential",
    sizeKw: 11.2,
    panels: 28,
    annualKwh: 16_400,
    offsetPct: 104,
    summary: "A south-west split array that covers the pool pump and two EVs, and now earns bill credits every spring.",
    palette: ["#ffd888", "#f98507"],
  },
  {
    slug: "eastside-bungalow",
    title: "1940s Eastside bungalow",
    location: "Austin, TX",
    kind: "Residential",
    sizeKw: 5.6,
    panels: 14,
    annualKwh: 7_900,
    offsetPct: 92,
    summary: "All-black panels on a small hip roof, designed to meet the neighbourhood's historic-district guidelines.",
    palette: ["#c9d4e6", "#6c83ab"],
  },
  {
    slug: "brewery-rooftop",
    title: "Craft brewery rooftop",
    location: "Pflugerville, TX",
    kind: "Commercial",
    sizeKw: 148,
    panels: 336,
    annualKwh: 212_000,
    offsetPct: 71,
    summary: "A ballasted flat-roof system sized to the brewery's daytime chiller load, with a 6.1-year simple payback.",
    palette: ["#ffecc6", "#dd6002"],
  },
  {
    slug: "family-backup",
    title: "Whole-home backup",
    location: "Round Rock, TX",
    kind: "Battery",
    sizeKw: 9.6,
    panels: 24,
    annualKwh: 13_900,
    offsetPct: 98,
    battery: "2 × 13.5 kWh",
    summary: "Two batteries keep the medical equipment, fridge and AC running. They carried the home through a 31-hour grid outage.",
    palette: ["#9eb0cf", "#374b72"],
  },
  {
    slug: "clinic-carport",
    title: "Dental clinic solar carport",
    location: "Cedar Park, TX",
    kind: "Commercial",
    sizeKw: 62,
    panels: 140,
    annualKwh: 88_500,
    offsetPct: 83,
    summary: "A shaded 24-space carport with two Level-2 EV chargers for staff and patients.",
    palette: ["#ffd888", "#b74006"],
  },
  {
    slug: "lakehouse-storage",
    title: "Lake house + storage",
    location: "Lago Vista, TX",
    kind: "Battery",
    sizeKw: 7.8,
    panels: 20,
    annualKwh: 11_300,
    offsetPct: 100,
    battery: "1 × 13.5 kWh",
    summary: "Solar plus a battery that time-shifts afternoon output to cover the evening peak-rate hours.",
    palette: ["#c9d4e6", "#2c3c5c"],
  },
];
