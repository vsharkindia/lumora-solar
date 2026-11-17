import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a free solar quote and roof assessment from Lumora Solar in Austin, Texas.",
};

const areas = ["Austin", "Round Rock", "Cedar Park", "Pflugerville", "Georgetown", "Dripping Springs", "Kyle", "Lakeway", "Leander", "San Marcos"];

export default function ContactPage() {
  return (
    <section className="-mt-16 bg-gradient-to-b from-sun-50 to-white pb-20 pt-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-sun-600">Contact</p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl">Let&apos;s design your system</h1>
          <p className="mt-4 text-lg text-night-600">
            Tell us a little about your property. A local solar advisor will reply within one business day with next
            steps for your free roof assessment.
          </p>

          <dl className="mt-10 space-y-5">
            {[
              ["Call", site.phone],
              ["Email", site.email],
              ["Visit", site.address],
              ["Hours", site.hours],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-4">
                <dt className="w-16 shrink-0 text-sm font-semibold text-night-400">{k}</dt>
                <dd className="text-night-800">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <h2 className="text-sm font-semibold text-night-400">Areas we serve</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {areas.map((a) => (
                <li key={a} className="rounded-full bg-white px-3 py-1 text-sm text-night-700 ring-1 ring-night-100">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
