import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Unverbindliches Erstgespräch zur Prozessdigitalisierung anfragen.",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Kontakt</h1>
          <p className="mt-4 text-slate-600">
            Schildern Sie uns Ihren Prozess oder Ihr Vorhaben. Wir melden uns für ein unverbindliches Erstgespräch.
          </p>
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-700">
            <p className="font-semibold">Alternative Kontaktmöglichkeit (Platzhalter)</p>
            <p className="mt-2">E-Mail: {brand.contact.email}</p>
            <p>Telefon: {brand.contact.phone}</p>
          </div>
        </div>
        <form className="rounded-lg border border-slate-200 bg-white p-6" aria-label="Kontaktformular">
          <div className="grid gap-4">
            <label className="text-sm font-medium">Name
              <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" name="name" required />
            </label>
            <label className="text-sm font-medium">Unternehmen
              <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" name="company" required />
            </label>
            <label className="text-sm font-medium">E-Mail
              <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" type="email" name="email" required />
            </label>
            <label className="text-sm font-medium">Telefon (optional)
              <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" name="phone" />
            </label>
            <label className="text-sm font-medium">Nachricht
              <textarea className="mt-1 min-h-36 w-full rounded-md border border-slate-300 px-3 py-2" name="message" required />
            </label>
            <button type="submit" className="rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">
              Unverbindliche Anfrage senden
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
