import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function LegalNoticePage() {
  return (
    <section className="container-page py-16">
      <h1 className="text-3xl font-bold tracking-tight">Impressum</h1>
      <div className="mt-6 space-y-4 text-slate-700">
        <p><strong>Hinweis:</strong> Die folgenden Angaben sind Platzhalter und müssen vor Veröffentlichung rechtlich geprüft und ergänzt werden.</p>
        <p>Unternehmen: [Firmenname ergänzen]</p>
        <p>Vertreten durch: [Geschäftsführung ergänzen]</p>
        <p>Adresse: [Straße, Hausnummer, PLZ, Ort ergänzen]</p>
        <p>Kontakt: [E-Mail und Telefon ergänzen]</p>
        <p>Registereintrag: [Handelsregister, Registernummer ergänzen]</p>
        <p>USt-IdNr.: [Umsatzsteuer-ID ergänzen]</p>
      </div>
    </section>
  );
}
