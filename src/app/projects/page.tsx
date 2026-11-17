import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";
import { CtaBand } from "@/components/Sections";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Recent Lumora Solar installations across Central Texas: homes, businesses and solar-plus-battery systems.",
};

export default function ProjectsPage() {
  const totalKw = projects.reduce((s, p) => s + p.sizeKw, 0);
  const totalMwh = projects.reduce((s, p) => s + p.annualKwh, 0) / 1000;

  return (
    <>
      <section className="-mt-16 bg-gradient-to-b from-sun-50 to-white pt-28 pb-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-4 sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sun-600">Projects</p>
            <h1 className="mt-2 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">Recent installations</h1>
            <p className="mt-4 max-w-xl text-lg text-night-600">Every figure below is measured production from the system&apos;s monitoring, not a sales estimate.</p>
          </div>
          <dl className="flex gap-8">
            <div>
              <dt className="text-sm text-night-500">Featured capacity</dt>
              <dd className="font-display text-3xl font-extrabold">{Math.round(totalKw)} kW</dd>
            </div>
            <div>
              <dt className="text-sm text-night-500">Clean energy / year</dt>
              <dd className="font-display text-3xl font-extrabold">{Math.round(totalMwh)} MWh</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ProjectGrid />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
