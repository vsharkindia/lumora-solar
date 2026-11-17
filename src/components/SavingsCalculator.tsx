"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

// Planning assumptions (Central Texas). Shown to the visitor under the results.
const RATE = 0.15; // $/kWh today
const ESCALATION = 0.03; // utility price rise per year
const DEGRADATION = 0.005; // panel output loss per year
const COST_PER_W = 2.85; // installed $/W before incentives
const PANEL_W = 400;
const CO2_KG_PER_KWH = 0.39;

const SUN = {
  full: { label: "Full sun", factor: 1 },
  partial: { label: "Some shade", factor: 0.85 },
  heavy: { label: "Heavy shade", factor: 0.7 },
} as const;
type Sun = keyof typeof SUN;

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function SavingsCalculator() {
  const [bill, setBill] = useState(180);
  const [sun, setSun] = useState<Sun>("full");
  const [offset, setOffset] = useState(90);

  const r = useMemo(() => {
    const annualUse = (bill * 12) / RATE;
    const target = annualUse * (offset / 100);
    const kwhPerKw = 1450 * SUN[sun].factor; // yearly output per kW installed
    const sizeKw = Math.max(3, Math.round((target / kwhPerKw) * 10) / 10);
    const panels = Math.ceil((sizeKw * 1000) / PANEL_W);
    const cost = sizeKw * 1000 * COST_PER_W;
    const firstYearKwh = sizeKw * kwhPerKw;

    let cumulative = 0;
    let payback: number | null = null;
    const years: number[] = [];
    for (let y = 1; y <= 25; y++) {
      const kwh = firstYearKwh * Math.pow(1 - DEGRADATION, y - 1);
      const price = RATE * Math.pow(1 + ESCALATION, y - 1);
      cumulative += Math.min(kwh, annualUse) * price;
      years.push(cumulative);
      if (payback === null && cumulative >= cost) payback = y;
    }
    return {
      sizeKw,
      panels,
      cost,
      firstYearSavings: years[0],
      lifetime: years[24] - cost,
      payback,
      co2Tons: (firstYearKwh * CO2_KG_PER_KWH) / 1000,
      years,
    };
  }, [bill, sun, offset]);

  const max = Math.max(r.cost, r.years[24]);

  return (
    <div className="grid overflow-hidden rounded-3xl border border-night-100 bg-white shadow-xl shadow-night-900/5 lg:grid-cols-5">
      {/* inputs */}
      <div className="space-y-7 bg-night-900 p-6 text-white sm:p-8 lg:col-span-2">
        <div>
          <label htmlFor="bill" className="flex items-baseline justify-between text-sm font-medium text-night-200">
            Average monthly electric bill
            <span className="font-display text-2xl font-bold text-white">{usd(bill)}</span>
          </label>
          <input id="bill" type="range" min={50} max={600} step={10} value={bill} onChange={(e) => setBill(Number(e.target.value))} className="mt-3 w-full" />
          <div className="mt-1 flex justify-between text-xs text-night-400">
            <span>$50</span>
            <span>$600</span>
          </div>
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-night-200">How sunny is your roof?</legend>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {(Object.keys(SUN) as Sun[]).map((k) => (
              <button
                key={k}
                type="button"
                aria-pressed={sun === k}
                onClick={() => setSun(k)}
                className={`rounded-xl px-2 py-2.5 text-sm font-medium transition ${
                  sun === k ? "bg-sun-500 text-white" : "bg-night-800 text-night-200 hover:bg-night-700"
                }`}
              >
                {SUN[k].label}
              </button>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="offset" className="flex items-baseline justify-between text-sm font-medium text-night-200">
            Share of your bill to cover
            <span className="font-display text-2xl font-bold text-white">{offset}%</span>
          </label>
          <input id="offset" type="range" min={50} max={100} step={5} value={offset} onChange={(e) => setOffset(Number(e.target.value))} className="mt-3 w-full" />
        </div>

        <p className="text-xs leading-relaxed text-night-400">
          Assumes ${RATE.toFixed(2)}/kWh rising {ESCALATION * 100}% a year, {DEGRADATION * 100}% annual panel
          degradation and ${COST_PER_W.toFixed(2)}/W installed. Excludes incentives and financing. Your free quote uses
          your actual roof and usage.
        </p>
      </div>

      {/* results */}
      <div className="p-6 sm:p-8 lg:col-span-3" aria-live="polite">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <Result label="System size" value={`${r.sizeKw} kW`} sub={`${r.panels} panels`} />
          <Result label="Estimated cost" value={usd(r.cost)} sub="before incentives" />
          <Result label="Year-1 savings" value={usd(r.firstYearSavings)} sub={`${usd(r.firstYearSavings / 12)}/mo`} />
          <Result label="Payback" value={r.payback ? `${r.payback} yrs` : "25+ yrs"} sub="simple payback" />
          <Result label="25-yr net savings" value={usd(r.lifetime)} sub="after system cost" highlight />
          <Result label="CO₂ avoided" value={`${r.co2Tons.toFixed(1)} t/yr`} sub={`≈ ${Math.round(r.co2Tons * 16)} trees`} />
        </div>

        {/* cumulative savings chart */}
        <div className="mt-8">
          <div className="flex items-center justify-between text-xs font-medium text-night-500">
            <span>Cumulative savings over 25 years</span>
            <span className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-sun-500" /> savings
              </span>
              <span className="flex items-center gap-1">
                <span className="h-0.5 w-3 bg-night-400" /> system cost
              </span>
            </span>
          </div>
          <div className="relative mt-3 flex h-36 items-end gap-[3px]" role="img" aria-label={`Savings pass the system cost in year ${r.payback ?? "25+"}`}>
            <div className="pointer-events-none absolute inset-x-0 border-t-2 border-dashed border-night-300" style={{ bottom: `${(r.cost / max) * 100}%` }} />
            {r.years.map((v, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t transition-all duration-500 ${v >= r.cost ? "bg-sun-500" : "bg-sun-200"}`}
                style={{ height: `${(v / max) * 100}%` }}
                title={`Year ${i + 1}: ${usd(v)}`}
              />
            ))}
          </div>
          <div className="mt-1 flex justify-between text-xs text-night-400">
            <span>Year 1</span>
            <span>Year 25</span>
          </div>
        </div>

        <Link
          href="/contact/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-night-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-night-700"
        >
          Get my exact quote →
        </Link>
      </div>
    </div>
  );
}

function Result({ label, value, sub, highlight = false }: { label: string; value: string; sub: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl p-4 ${highlight ? "bg-sun-50 ring-1 ring-sun-200" : "bg-night-50"}`}>
      <div className="text-xs font-medium uppercase tracking-wide text-night-500">{label}</div>
      <div className={`mt-1 font-display text-xl font-bold sm:text-2xl ${highlight ? "text-sun-700" : "text-night-900"}`}>{value}</div>
      <div className="text-xs text-night-500">{sub}</div>
    </div>
  );
}
