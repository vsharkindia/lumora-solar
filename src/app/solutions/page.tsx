import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Illustrations";
import { Reveal } from "@/components/Reveal";
import { CtaBand, SectionHead } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Home solar, commercial solar, battery backup and EV charging, designed and installed by Lumora Solar in Central Texas.",
};

const services = [
  { icon: "home", title: "Home solar", body: "Panels sized to your actual usage, designed around vents, dormers and HOA rules, with app monitoring included.", points: ["Tier-1 all-black panels", "Microinverters or optimizers", "Critter guards & clean conduit runs"] },
  { icon: "building", title: "Commercial solar", body: "Rooftop, ground-mount and carport systems for warehouses, offices, clinics and farms, from 25 kW to 1 MW.", points: ["Load analysis & ROI model", "Utility interconnection handled", "O&M plans with production guarantee"] },
  { icon: "battery", title: "Battery backup", body: "Keep the lights, fridge and AC running through outages, and shift solar output into expensive evening hours.", points: ["Whole-home or essential loads", "Automatic switchover in under 1 second", "Add to an existing system"] },
  { icon: "plug", title: "EV charging", body: "Level-2 home and workplace chargers, wired and permitted, and set to charge when your panels are producing.", points: ["Up to 48 A / 11 kW", "Solar-aware smart charging", "Fleet & multi-port options"] },
] as const;

const packages = [
  { name: "Essential", size: "5–7 kW", price: "from $15,900", fit: "Smaller homes and bills under $150/month", features: ["Tier-1 panels", "String inverter + optimizers", "App monitoring", "25-yr workmanship warranty"] },
  { name: "Signature", size: "8–11 kW", price: "from $23,800", fit: "Most family homes · our most popular option", features: ["All-black premium panels", "Microinverters (per-panel output)", "Critter guard & conduit painting", "Production guarantee"], featured: true },
  { name: "Resilience", size: "8–12 kW + battery", price: "from $36,500", fit: "Outage protection and peak-rate savings", features: ["Everything in Signature", "13.5 kWh battery (stackable)", "Backup-loads panel", "Storm Watch auto-charge"] },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="-mt-16 bg-gradient-to-b from-sun-50 to-white pt-28 pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-sun-600">Solutions</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Clean energy systems, engineered for your property</h1>
          <p className="mt-5 max-w-2xl text-lg text-night-600">
            Whether it&apos;s a bungalow or a 100,000 sq ft warehouse, every Lumora system starts from your real usage
            data and a shade study of your exact roof.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 90}>
              <div className="h-full rounded-3xl border border-night-100 p-8 transition hover:border-sun-200 hover:shadow-lg hover:shadow-night-900/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-night-900 text-sun-300">
                  <Icon name={s.icon} />
                </span>
                <h2 className="mt-5 text-2xl font-bold">{s.title}</h2>
                <p className="mt-2 leading-relaxed text-night-600">{s.body}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-night-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-sun-500" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-night-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHead eyebrow="Home packages" title="Simple packages, transparent pricing" body="Starting prices before incentives. Every quote is customised after a free roof assessment." />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <div className={`relative flex h-full flex-col rounded-3xl p-8 ${p.featured ? "bg-night-900 text-white shadow-2xl shadow-night-900/20" : "bg-white ring-1 ring-night-100"}`}>
                  {p.featured && <span className="absolute -top-3 left-8 rounded-full bg-sun-500 px-3 py-1 text-xs font-semibold text-white">Most popular</span>}
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className={`mt-1 text-sm ${p.featured ? "text-night-300" : "text-night-500"}`}>{p.size}</p>
                  <p className="mt-6 font-display text-3xl font-extrabold">{p.price}</p>
                  <p className={`mt-2 text-sm ${p.featured ? "text-night-300" : "text-night-500"}`}>{p.fit}</p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className={p.featured ? "text-sun-300" : "text-leaf-500"}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact/"
                    className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                      p.featured ? "bg-sun-500 text-white hover:bg-sun-600" : "bg-night-900 text-white hover:bg-night-700"
                    }`}
                  >
                    Get a {p.name} quote
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-3">
          {[
            { icon: "shield", title: "25-year coverage", body: "Panels, inverters and our workmanship, including roof penetrations, all backed in writing." },
            { icon: "chart", title: "Production guarantee", body: "If your system produces less than we promised, we pay you the difference. Every year." },
            { icon: "leaf", title: "Responsible installs", body: "Recycled racking where possible, and old panels are taken back for recycling at end of life." },
          ].map((b) => (
            <Reveal key={b.title}>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sun-100 text-sun-700">
                  <Icon name={b.icon as "shield"} />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{b.title}</h3>
                  <p className="mt-1 text-night-600">{b.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
