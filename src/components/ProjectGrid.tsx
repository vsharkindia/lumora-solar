"use client";

import { useState } from "react";
import { projects, type ProjectKind } from "@/lib/projects";
import { ProjectScene } from "./Illustrations";

const FILTERS: ("All" | ProjectKind)[] = ["All", "Residential", "Commercial", "Battery"];

export function ProjectGrid({ limit, filterable = true }: { limit?: number; filterable?: boolean }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = projects.filter((p) => filter === "All" || p.kind === filter).slice(0, limit);

  return (
    <div>
      {filterable && (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === f ? "bg-night-900 text-white" : "bg-night-50 text-night-700 hover:bg-night-100"
              }`}
            >
              {f === "Battery" ? "Solar + battery" : f}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <article key={p.slug} className="group overflow-hidden rounded-3xl border border-night-100 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-night-900/5">
            <div className="relative aspect-[16/9] overflow-hidden">
              <div className="h-full w-full transition duration-500 group-hover:scale-105">
                <ProjectScene kind={p.kind} palette={p.palette} />
              </div>
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-night-800">
                {p.kind === "Battery" ? "Solar + battery" : p.kind}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-sun-600">{p.location}</p>
              <h3 className="mt-1 text-lg font-bold text-night-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-night-600">{p.summary}</p>
              <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-night-100 pt-4 text-center">
                <Stat label="System" value={`${p.sizeKw} kW`} />
                <Stat label="Per year" value={`${Math.round(p.annualKwh / 1000)} MWh`} />
                <Stat label={p.battery ? "Battery" : "Bill offset"} value={p.battery ?? `${p.offsetPct}%`} />
              </dl>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wide text-night-400">{label}</dt>
      <dd className="font-display text-sm font-bold text-night-900">{value}</dd>
    </div>
  );
}
