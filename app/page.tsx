import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { processSteps } from "@/content/site";
import { brand } from "@/lib/brand";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white py-20 sm:py-24">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Technologiepartner für Unternehmen</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            KI und Automatisierung, die im betrieblichen Alltag zuverlässig funktioniert.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-600">{brand.shortDescription}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/kontakt">{brand.cta.primary}</ButtonLink>
            <ButtonLink href="/leistungen" variant="secondary">{brand.cta.secondary}</ButtonLink>
          </div>
        </div>
      </section>

      <Section
        title="Warum Unternehmen mit uns arbeiten"
        subtitle="Wir verbinden Prozessverständnis mit technischer Umsetzung und konzentrieren uns auf messbare Verbesserungen statt auf Show-Effekte."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Entlastung von Teams durch sinnvolle Automatisierung",
            "Reduktion manueller Fehler und höhere Prozessqualität",
            "Saubere Integration in bestehende Systeme",
            "Transparente und nachvollziehbare Abläufe",
            "Wartbare Lösungen statt schwer kontrollierbarer Prototypen",
            "Produktive Ergebnisse mit klarem wirtschaftlichem Fokus",
          ].map((item) => (
            <article key={item} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-slate-700">{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Typische Einsatzfelder" subtitle="Konkrete betriebliche Anwendungsbereiche mit direktem Nutzen.">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Kommunikation und Anfragebearbeitung",
            "Termin- und Aufgabensteuerung",
            "Informationsverarbeitung",
            "Interne Prozessketten",
            "Operative Assistenz",
            "Daten- und Systemverknüpfung",
          ].map((topic) => (
            <li key={topic} className="rounded-lg border border-slate-200 bg-white p-4 text-slate-700">
              {topic}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="So arbeiten wir" subtitle="Unsere Angebotslogik schafft Klarheit von der ersten Analyse bis zur Weiterentwicklung.">
        <ol className="grid gap-4 lg:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.title} className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Nächster Schritt" subtitle="Sprechen Sie mit uns über einen Prozess, der heute unnötig Zeit bindet.">
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/kontakt">Unverbindliches Erstgespräch vereinbaren</ButtonLink>
          <ButtonLink href="/loesungen" variant="secondary">Anwendungsfälle ansehen</ButtonLink>
        </div>
      </Section>
    </>
  );
}
