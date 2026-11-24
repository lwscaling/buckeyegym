import Link from "next/link";
import type { ReactNode } from "react";

type Section = { id: string; title: string; content: ReactNode };

export default function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: Section[] }) {
  return <main className="legal-page" id="main-content">
    <a className="skip-link" href="#legal-content">Skip to policy</a>
    <header className="legal-nav"><Link className="brand" href="/" aria-label="Buckeye Gym home"><span className="mascot" aria-hidden="true"/>Buckeye</Link><Link className="legal-back" href="/">Back to the gym</Link></header>
    <section className="legal-hero"><p>{eyebrow}</p><h1>{title}</h1><div><span>Effective August 5, 2026</span><p>{intro}</p></div></section>
    <div className="legal-layout" id="legal-content">
      <aside aria-label={`${title} sections`}><p>On this page</p><nav>{sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</a>)}</nav></aside>
      <article>{sections.map((section, index) => <section id={section.id} key={section.id}><div className="legal-section-number">{String(index + 1).padStart(2, "0")}</div><h2>{section.title}</h2><div className="legal-copy">{section.content}</div></section>)}</article>
    </div>
    <footer className="legal-footer"><div><span className="mascot" role="img" aria-label="Buckeye Gym mascot"/><p>Questions?<br/><a href="mailto:rkpropst11@yahoo.com">Talk to the gym.</a></p></div><nav><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><a href="tel:+13306333084">(330) 633-3084</a></nav><small>© {new Date().getFullYear()} Buckeye Gym · Tallmadge, Ohio</small></footer>
  </main>;
}
