import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Über uns und Arbeitsweise",
  description: "Praxisnahe, technisch fundierte und wirtschaftlich ausgerichtete Umsetzung von Prozessdigitalisierung.",
};

export default function AboutPage() {
  return (
    <>
      <Section
        title="Über uns"
        subtitle="Wir verstehen uns als Umsetzungs- und Lösungspartner für Unternehmen mit realen betrieblichen Anforderungen."
      >
        <p className="max-w-3xl text-slate-700">
          Unser Fokus liegt auf produktiv einsetzbaren Lösungen statt auf Präsentationsfolien oder Technologie-Demonstrationen. Wir verbinden technisches Know-how mit Prozessverständnis und arbeiten strukturiert an messbarer Verbesserung.
        </p>
      </Section>
      <Section title="Unsere Arbeitsweise" subtitle="Nachvollziehbar, strukturiert und auf langfristige Nutzbarkeit ausgelegt.">
        <ul className="space-y-3 text-slate-700">
          <li>• Praxisnahe Analyse statt abstrakter Beratung.</li>
          <li>• Technisch saubere Umsetzung mit klarer Dokumentationsbasis.</li>
          <li>• Integration in vorhandene Systeme, Rollen und Abläufe.</li>
          <li>• Fokus auf Robustheit, Wartbarkeit und verlässlichen Betrieb.</li>
        </ul>
      </Section>
    </>
  );
}
