import { PageShell } from "@/components/layout/PageShell";

type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  contacts?: { label: string; value: string; href?: string }[];
};

export function LegalDocument({
  title,
  effectiveDate,
  sections,
}: {
  title: string;
  effectiveDate: string;
  sections: LegalSection[];
}) {
  return (
    <PageShell>
      <div className="container-x pb-24 pt-[140px] md:pb-36 md:pt-[170px]">
        <article className="mx-auto max-w-4xl">
          <header className="mb-12 border-b border-navy-900/10 pb-8">
            <p className="font-display text-sm font-semibold text-brand-orange">SabariyaTech · Legal</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-navy-900 md:text-6xl">{title}</h1>
            <p className="mt-4 text-muted">Effective Date: {effectiveDate}</p>
          </header>
          <div className="space-y-10">
            {sections.map((section, index) => (
              <section key={section.heading} aria-labelledby={`legal-section-${index}`}>
                <h2 id={`legal-section-${index}`} className="text-2xl font-bold tracking-tight text-navy-900">
                  {index + 1}. {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-7 text-muted">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-muted marker:text-brand-orange">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.contacts && (
                  <dl className="mt-4 space-y-3 leading-7 text-muted">
                    {section.contacts.map((contact) => (
                      <div key={contact.label}>
                        <dt className="inline font-semibold text-navy-900">{contact.label}: </dt>
                        <dd className="inline">
                          {contact.href ? (
                            <a href={contact.href} className="underline decoration-brand-blue/40 underline-offset-4 hover:text-brand-orange">
                              {contact.value}
                            </a>
                          ) : (
                            contact.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </section>
            ))}
          </div>
        </article>
      </div>
    </PageShell>
  );
}
