"use client";

import { FormEvent, useState } from "react";

// Replace this with your real Formspree endpoint:
// 1. Create a free account at https://formspree.io
// 2. Create a new form and copy its endpoint (looks like https://formspree.io/f/abcdwxyz)
// 3. Paste it below.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "Residential — Countertop",
  "Residential — Flooring",
  "Commercial",
  "Recreational / Institutional",
  "Repair / Restoration",
  "Other",
];

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-sage-200 bg-sage-50 p-8 text-center">
        <h3 className="font-serif text-xl font-semibold text-stone-900">
          Thanks — your request is in!
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">
          We&apos;ve received your project details and will get back to you within one
          business day. If it&apos;s urgent, give us a call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-stone-800">
            Full name <span className="text-terracotta-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-colors focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-stone-800">
            Email <span className="text-terracotta-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-colors focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-100"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-stone-800">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-colors focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-100"
          />
        </div>
        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-stone-800">
            Project type <span className="text-terracotta-500">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-colors focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-100"
          >
            <option value="" disabled>
              Select an option
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="address" className="mb-2 block text-sm font-medium text-stone-800">
          Project location (city / neighbourhood)
        </label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="e.g. Kitsilano, Vancouver"
          className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-colors focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-100"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-stone-800">
          Tell us about your project <span className="text-terracotta-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Approximate size, timeline, and any details that would help us prepare an accurate quote."
          className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-colors focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-100"
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-terracotta-50 px-4 py-3 text-sm text-terracotta-700">
          Something went wrong sending your request. Please try again, or call us
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-terracotta-400 to-terracotta-600 px-7 py-3.5 text-sm font-medium text-stone-900 shadow-soft transition-all hover:from-terracotta-300 hover:to-terracotta-500 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request My Free Quote"}
      </button>
    </form>
  );
}
