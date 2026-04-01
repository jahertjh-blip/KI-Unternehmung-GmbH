import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: {
    default: `${brand.companyName} | KI-gestützte Prozessdigitalisierung`,
    template: `%s | ${brand.companyName}`,
  },
  description: brand.shortDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
