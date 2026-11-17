import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-night-950 text-night-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Locally owned solar and battery installer serving Central Texas since 2014. Our own certified crews,
            honest designs, and 25-year workmanship warranty.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{site.phone}</li>
            <li>{site.email}</li>
            <li>{site.address}</li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-night-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Portfolio demo: Lumora Solar is a fictional company. Website designed &amp; built by{" "}
            <a href="https://www.vsharksolutions.com" className="font-medium text-sun-300 hover:text-sun-200" target="_blank" rel="noreferrer">
              VShark Solutions
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
