import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function PrivacyPage() {
  return (
    <section className="container-page py-16">
      <h1 className="text-3xl font-bold tracking-tight">Datenschutz</h1>
      <div className="mt-6 space-y-4 text-slate-700">
        <p><strong>Hinweis:</strong> Diese Datenschutzerklärung enthält Platzhalter und muss vor Veröffentlichung rechtlich finalisiert werden.</p>
        <h2 className="text-xl font-semibold">1. Verantwortliche Stelle</h2>
        <p>[Unternehmensdaten ergänzen]</p>
        <h2 className="text-xl font-semibold">2. Verarbeitung personenbezogener Daten</h2>
        <p>[Verarbeitungszwecke, Rechtsgrundlagen und Speicherdauer ergänzen]</p>
        <h2 className="text-xl font-semibold">3. Kontaktformular</h2>
        <p>[Beschreibung der verarbeiteten Felder und Zweck ergänzen]</p>
        <h2 className="text-xl font-semibold">4. Betroffenenrechte</h2>
        <p>[Auskunft, Berichtigung, Löschung, Widerspruch etc. ergänzen]</p>
      </div>
    </section>
  );
}
