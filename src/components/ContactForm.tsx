"use client";

import { useState, type FormEvent } from "react";

type Fields = { name: string; email: string; phone: string; zip: string; property: string; bill: string; message: string };
const EMPTY: Fields = { name: "", email: "", phone: "", zip: "", property: "Home", bill: "", message: "" };

function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Please enter a valid email address.";
  if (f.phone && f.phone.replace(/\D/g, "").length < 10) e.phone = "Please enter a 10-digit phone number.";
  if (!/^\d{5}$/.test(f.zip)) e.zip = "Please enter a 5-digit ZIP code.";
  return e;
}

/**
 * Quote request form with client-side validation. In this portfolio demo
 * nothing is sent anywhere; on a live site this would post to an API route,
 * a CRM or a form service.
 */
export function ContactForm() {
  const [f, setF] = useState<Fields>(EMPTY);
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState(false);
  const errors = validate(f);

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => setF((s) => ({ ...s, [k]: e.target.value }));

  function submit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (Object.keys(errors).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-night-100 bg-white p-8 text-center shadow-xl shadow-night-900/5 sm:p-12" role="status">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sun-100 text-2xl">☀️</div>
        <h2 className="mt-5 text-2xl font-bold">Thanks, {f.name.split(" ")[0]}!</h2>
        <p className="mx-auto mt-2 max-w-sm text-night-600">
          A solar advisor will contact you at <strong>{f.email}</strong> within one business day to arrange your free roof assessment.
        </p>
        <p className="mt-6 text-xs text-night-400">(Portfolio demo: no message was actually sent.)</p>
        <button type="button" onClick={() => { setF(EMPTY); setSent(false); setTouched(false); }} className="mt-6 text-sm font-semibold text-sun-600 hover:text-sun-700">
          Send another request
        </button>
      </div>
    );
  }

  const err = (k: keyof Fields) => (touched ? errors[k] : undefined);
  const input =
    "mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-sun-500 focus:ring-4 focus:ring-sun-100";

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border border-night-100 bg-white p-6 shadow-xl shadow-night-900/5 sm:p-8">
      <h2 className="text-2xl font-bold">Request your free quote</h2>
      <p className="mt-1 text-sm text-night-500">Takes about a minute. No obligation, no pushy follow-ups.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={err("name")}>
          <input className={`${input} ${err("name") ? "border-red-400" : "border-night-200"}`} value={f.name} onChange={set("name")} autoComplete="name" aria-invalid={!!err("name")} />
        </Field>
        <Field label="Email" error={err("email")}>
          <input type="email" className={`${input} ${err("email") ? "border-red-400" : "border-night-200"}`} value={f.email} onChange={set("email")} autoComplete="email" aria-invalid={!!err("email")} />
        </Field>
        <Field label="Phone (optional)" error={err("phone")}>
          <input type="tel" className={`${input} ${err("phone") ? "border-red-400" : "border-night-200"}`} value={f.phone} onChange={set("phone")} autoComplete="tel" aria-invalid={!!err("phone")} />
        </Field>
        <Field label="ZIP code" error={err("zip")}>
          <input inputMode="numeric" maxLength={5} className={`${input} ${err("zip") ? "border-red-400" : "border-night-200"}`} value={f.zip} onChange={set("zip")} autoComplete="postal-code" aria-invalid={!!err("zip")} />
        </Field>
        <Field label="Property type">
          <select className={`${input} border-night-200`} value={f.property} onChange={set("property")}>
            <option>Home</option>
            <option>Business</option>
            <option>Farm / ranch</option>
          </select>
        </Field>
        <Field label="Average monthly bill">
          <select className={`${input} border-night-200`} value={f.bill} onChange={set("bill")}>
            <option value="">Select…</option>
            <option>Under $100</option>
            <option>$100–$200</option>
            <option>$200–$350</option>
            <option>Over $350</option>
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Anything we should know? (optional)">
            <textarea rows={4} className={`${input} border-night-200`} value={f.message} onChange={set("message")} placeholder="EV charger, battery backup, roof age…" />
          </Field>
        </div>
      </div>

      <button type="submit" className="mt-6 w-full rounded-full bg-sun-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-sun-500/30 transition hover:bg-sun-600 sm:w-auto">
        Request free quote
      </button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium text-night-700">
      {label}
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-red-600">{error}</span>}
    </label>
  );
}
