import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Lösungen und Anwendungsfälle",
  description: "Praxisnahe Anwendungsfälle für Kommunikation, Abläufe und operative Assistenz.",
};

const cases = [
  "Kommunikation und Anfragebearbeitung",
  "Termin- und Aufgabensteuerung",
  "Informationsverarbeitung und Aufbereitung",
  "Interne Prozessketten und Freigaben",
  "Operative Assistenz im Tagesgeschäft",
  "Verknüpfung von Daten und Systemen",
  "Wiederkehrende Verwaltungsprozesse",
];

export default function SolutionsPage() {
  return (
    <Section title="Lösungen / Anwendungsfälle" subtitle="Wo in Unternehmen echte Entlastung, Tempo und Qualität entstehen kann.">
      <div className="grid gap-4 md:grid-cols-2">
        {cases.map((item) => (
          <article key={item} className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold">{item}</h2>
            <p className="mt-2 text-slate-600">
              Wir analysieren den konkreten Ablauf, setzen eine tragfähige Lösung um und integrieren sie in die bestehende Betriebsrealität.
            </p>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <ButtonLink href="/kontakt">Prozess unverbindlich schildern</ButtonLink>
      </div>
    </Section>
  );
}
