import Link from "next/link";
import { HeroHouse } from "@/components/Illustrations";
import { ProjectGrid } from "@/components/ProjectGrid";
import { CountUp, Reveal } from "@/components/Reveal";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { CtaBand, SectionHead } from "@/components/Sections";
import { faqs, stats, steps, testimonials } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative -mt-16 overflow-hidden bg-gradient-to-b from-sun-50 to-white pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:pb-24 lg:pt-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-sun-700 ring-1 ring-sun-200">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf-500" /> Booking roof assessments this week
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-night-900 sm:text-5xl lg:text-6xl">
              Turn your roof into your <span className="text-sun-500">power plant.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-night-600">
              Custom-designed rooftop solar and battery backup for Central Texas homes and businesses, installed by our
              own certified crews.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#calculator" className="rounded-full bg-sun-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-sun-500/30 transition hover:bg-sun-600">
                Estimate my savings
              </a>
              <Link href="/projects/" className="rounded-full bg-white px-6 py-3.5 font-semibold text-night-800 ring-1 ring-night-200 transition hover:ring-night-300">
                See our work
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-night-600">
              {["$0-down financing", "25-year warranty", "No subcontractors"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <svg viewBox="0 0 20 20" className="h-4 w-4 text-leaf-500" fill="currentColor" aria-hidden="true">
                    <path d="M7.6 13.6L4 10l-1.4 1.4 5 5 10-10L16.2 5z" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <HeroHouse />
            <div className="absolute -bottom-4 left-4 animate-float rounded-2xl bg-white p-4 shadow-xl shadow-night-900/10 sm:left-8">
              <div className="text-xs font-medium text-night-500">Today&apos;s production</div>
              <div className="font-display text-2xl font-bold text-night-900">48.6 kWh</div>
              <div className="text-xs font-semibold text-leaf-500">▲ 12% vs. yesterday</div>
            </div>
            <div className="absolute -top-2 right-4 hidden animate-float rounded-2xl bg-night-900 p-4 text-white shadow-xl [animation-delay:1.5s] sm:block">
              <div className="text-xs text-night-300">Battery</div>
              <div className="font-display text-xl font-bold">94% charged</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Stats ---- */}
      <section className="border-y border-night-100 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-extrabold text-night-900 sm:text-4xl">
                <CountUp value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-night-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Calculator ---- */}
      <section id="calculator" className="scroll-mt-20 bg-night-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHead eyebrow="Savings calculator" title="What could solar save you?" body="Move the sliders to see a size, price and 25-year savings estimate for a home like yours." />
          </Reveal>
          <Reveal delay={100}>
            <SavingsCalculator />
          </Reveal>
        </div>
      </section>

      {/* ---- How it works ---- */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHead eyebrow="How it works" title="From first call to first kilowatt in about 6 weeks" />
          </Reveal>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <li className="h-full rounded-3xl border border-night-100 p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sun-100 font-display font-bold text-sun-700">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-night-600">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- Projects ---- */}
      <section className="bg-night-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-sun-300">Recent installs</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Real roofs. Real numbers.</h2>
            </div>
            <Link href="/projects/" className="font-semibold text-sun-300 hover:text-sun-200">
              All projects →
            </Link>
          </div>
          <ProjectGrid limit={3} filterable={false} />
        </div>
      </section>

      {/* ---- Testimonials ---- */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHead eyebrow="Reviews" title="4.9 stars from 600+ Texas homeowners" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <figure className="flex h-full flex-col rounded-3xl bg-sun-50 p-7">
                  <div className="text-sun-500" aria-label="5 stars">★★★★★</div>
                  <blockquote className="mt-3 flex-1 leading-relaxed text-night-800">“{t.quote}”</blockquote>
                  <figcaption className="mt-5 text-sm">
                    <div className="font-semibold text-night-900">{t.name}</div>
                    <div className="text-night-500">{t.place}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="bg-night-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <SectionHead eyebrow="FAQ" title="Questions we hear every week" />
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white p-5 ring-1 ring-night-100 open:ring-sun-200">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-night-900">
                  {f.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-night-50 text-night-500 transition group-open:rotate-45 group-open:bg-sun-100 group-open:text-sun-700">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-night-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
