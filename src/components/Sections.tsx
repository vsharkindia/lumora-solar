import Link from "next/link";
import { Icon } from "./Illustrations";

export function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-sun-600">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold text-night-900 sm:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-lg text-night-600">{body}</p>}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-sun-400 to-sun-600 px-6 py-14 text-center text-white sm:px-12">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10" aria-hidden="true" />
        <Icon name="sun" className="mx-auto h-10 w-10" />
        <h2 className="relative mt-4 text-3xl font-extrabold sm:text-4xl">Ready to see your roof&apos;s potential?</h2>
        <p className="relative mx-auto mt-3 max-w-xl text-sun-50">
          Get a custom design and a firm price in 48 hours, with no obligation and no pushy sales calls.
        </p>
        <Link href="/contact/" className="relative mt-8 inline-block rounded-full bg-night-950 px-8 py-4 font-semibold text-white transition hover:bg-night-800">
          Book my free assessment
        </Link>
      </div>
    </section>
  );
}
