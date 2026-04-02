import Link from "next/link";
import { navigation } from "@/content/site";
import { brand } from "@/lib/brand";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="text-base font-semibold text-brand-900">
          {brand.companyName}
        </Link>
        <nav aria-label="Hauptnavigation">
          <ul className="flex gap-5 text-sm text-slate-700">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-600">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
