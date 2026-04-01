import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "Leistungsbereiche für KI-gestützte Automatisierung, digitale Workflows und Systemintegration.",
};

const services = [
  {
    title: "KI-gestützte Automatisierung",
    text: "Wir automatisieren wiederkehrende Prozessschritte dort, wo Entlastung und Qualität im Alltag spürbar werden.",
  },
  {
    title: "Digitale Workflows",
    text: "Wir strukturieren Abläufe digital, verbinden Verantwortlichkeiten und reduzieren unnötige Medienbrüche.",
  },
  {
    title: "Assistenzsysteme für Teams",
    text: "Wir entwickeln Systeme, die Informationen vorbereiten, priorisieren und operative Entscheidungen unterstützen.",
  },
  {
    title: "Integration bestehender Systeme",
    text: "Wir integrieren neue Komponenten in Ihre vorhandene Softwarelandschaft statt alles neu aufzubauen.",
  },
  {
    title: "Individuelle Prozess- und Softwarelösungen",
    text: "Wir entwickeln passgenaue Anwendungen für konkrete betriebliche Anforderungen mit Fokus auf Wartbarkeit.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section title="Leistungen" subtitle="Klare Angebotsbereiche für Unternehmen, die produktive Automatisierung real umsetzen möchten.">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="mt-3 text-slate-600">{service.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Von der Idee zur Wirkung" subtitle="Wir begleiten die Umsetzung strukturiert vom ersten Prozessgespräch bis zum stabilen Betrieb.">
        <ButtonLink href="/kontakt">Leistungsbereich besprechen</ButtonLink>
      </Section>
    </>
  );
}
