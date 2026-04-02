import type { ReactNode } from "react";

type SectionProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="py-14 sm:py-16">
      <div className="container-page">
        {(title || subtitle) && (
          <header className="mb-8 max-w-3xl">
            {title ? <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2> : null}
            {subtitle ? <p className="mt-3 text-slate-600">{subtitle}</p> : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
