import Link from "next/link";
import { brand } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container-page flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {brand.companyName}</p>
        <div className="flex gap-4">
          <Link href="/impressum" className="hover:text-brand-600">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-brand-600">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
