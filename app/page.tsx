"use client";

import { useEffect, useState } from "react";

const signup = "https://buckeyegym.gymmasteronline.com/portal/signup";

const plans = [
  { name: "Regular", price: "$42.70", note: "/ month", items: ["Full gym access", "Trainer support", "Locker room & showers", "Unlimited access"] },
  { name: "Discount", price: "$37.36", note: "/ month", badge: "Students · Military · Seniors · First responders", items: ["Full gym access", "Trainer support", "Locker room & showers", "Unlimited access"] },
  { name: "Flex & Family", price: "$10", note: "from / visit", items: ["Day pass", "1-week visitor pass", "10-visit pack — never expires", "Family & couples plans"] },
];

const gallery = [
  "e7d80179147f271f.jpeg", "5dd202989792a5e5.jpeg", "4e7450bf25309c95.jpeg",
  "bf5055086068682e.jpeg", "cf7348ead5871a6c.jpeg", "4d201604b9ea814a.jpeg",
];

export default function Home() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Buckeye Gym home"><span>BG</span><b>BUCKEYE<br/>GYM</b></a>
        <nav className={menu ? "nav open" : "nav"} aria-label="Main navigation">
          {[["The Gym","about"],["Memberships","memberships"],["Reviews","reviews"],["Gallery","gallery"],["Visit","visit"]].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}
        </nav>
        <a className="join join-desktop" href={signup} target="_blank" rel="noreferrer">Join the gym <span>↗</span></a>
        <button className="menu" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Toggle navigation"><i/><i/></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-bg"/>
        <div className="hero-noise"/>
        <div className="hero-content">
          <p className="eyebrow">Tallmadge, Ohio · Family owned</p>
          <h1>Built for<br/><em>the work.</em></h1>
          <p className="hero-copy">No gimmicks. No crowds taking mirror selfies. Just serious equipment, people who give a damn, and a place to get stronger.</p>
          <div className="hero-actions">
            <a className="button red" href={signup} target="_blank" rel="noreferrer">Start training <span>↗</span></a>
            <a className="text-link" href="#memberships">See memberships <span>↓</span></a>
          </div>
        </div>
        <div className="hero-stamp"><strong>80+</strong><span>Five-star<br/>Google reviews</span></div>
        <div className="scroll-mark">Scroll to enter <span>↓</span></div>
      </section>

      <div className="ticker" aria-hidden="true"><div>IRON • EFFORT • COMMUNITY • NO CONTRACTS • OLD SCHOOL • IRON • EFFORT • COMMUNITY • NO CONTRACTS • OLD SCHOOL • </div></div>

      <section className="manifesto section" id="about">
        <div className="section-tag reveal">01 / The gym</div>
        <div className="manifesto-main reveal">
          <p className="kicker">This is not a wellness club.</p>
          <h2>A real gym for people who are <em>here to train.</em></h2>
        </div>
        <div className="manifesto-copy reveal">
          <p>At Buckeye Gym, you&apos;re not a number. You&apos;re part of a crew that pushes harder, lifts heavier, and shows up for more than just a workout.</p>
          <a className="text-link dark" href="#visit">Come see the place <span>→</span></a>
        </div>
        <div className="values reveal">
          <article><span>01</span><h3>Old school</h3><p>We train hard, sweat harder, and get real results.</p></article>
          <article><span>02</span><h3>No hidden fees</h3><p>What you see is what you get. No contracts. No surprises.</p></article>
          <article><span>03</span><h3>Family owned</h3><p>Built on loyalty, respect, and real community values.</p></article>
          <article><span>04</span><h3>Walk-ins welcome</h3><p>Drop in when you&apos;re ready. The weights are waiting.</p></article>
        </div>
      </section>

      <section className="equipment">
        <div className="equipment-image reveal"><img src="/gym/5ea8f1fda7527042.jpeg" alt="The bodybuilding mural and weight floor at Buckeye Gym"/></div>
        <div className="equipment-copy reveal">
          <div className="section-tag light">02 / What&apos;s inside</div>
          <p className="kicker">Everything you need. Nothing you don&apos;t.</p>
          <h2>Built around <em>iron.</em></h2>
          <ul>
            <li><b>Free weights</b><span>Dumbbells, benches, racks and platforms.</span></li>
            <li><b>Serious machines</b><span>A deep lineup for every training split.</span></li>
            <li><b>Coaching</b><span>Personal training and nutrition built around you.</span></li>
            <li><b>Space to work</b><span>Clean floors, open room, and no nonsense.</span></li>
          </ul>
          <a className="button outline" href="#gallery">See the gym <span>↓</span></a>
        </div>
      </section>

      <section className="pricing section" id="memberships">
        <div className="section-tag reveal">03 / Memberships</div>
        <div className="pricing-head reveal"><p className="kicker">Simple pricing. Zero games.</p><h2>Pick your plan.<br/><em>Get to work.</em></h2></div>
        <div className="plan-grid reveal">
          {plans.map((plan, i) => <article className={i === 1 ? "plan featured" : "plan"} key={plan.name}>
            <div className="plan-top"><span>0{i+1}</span><h3>{plan.name}</h3></div>
            {plan.badge && <p className="plan-badge">{plan.badge}</p>}
            <p className="price"><strong>{plan.price}</strong><small>{plan.note}</small></p>
            <ul>{plan.items.map(item => <li key={item}>✓ {item}</li>)}</ul>
            <a className={i === 1 ? "button red full" : "button black full"} href={signup} target="_blank" rel="noreferrer">Choose this plan <span>↗</span></a>
          </article>)}
        </div>
        <p className="pricing-note reveal">No long-term contracts. Discounts require valid ID. <a href="tel:+13306333084">Questions? Call (330) 633-3084 →</a></p>
      </section>

      <section className="quote-section" id="reviews">
        <div className="section-tag light reveal">04 / The word around town</div>
        <div className="big-quote reveal">“</div>
        <blockquote className="reveal">Really cool staff. How a gym should be set up and run for those who make physical training and bodybuilding their lifestyle. Everyone has respect, and the atmosphere is very good.</blockquote>
        <div className="quote-meta reveal"><span>★★★★★</span><p><b>Chad Easterling</b><br/>Buckeye Gym member</p></div>
        <div className="review-strip reveal"><span>80+ five-star Google reviews</span><span>“Best gym out there.” — Rachel H.</span><span>“Hands-down my favorite gym.” — Andrea K.</span></div>
      </section>

      <section className="gallery section" id="gallery">
        <div className="section-tag reveal">05 / Inside Buckeye</div>
        <div className="gallery-head reveal"><h2>No staged shots.<br/><em>This is the place.</em></h2><a className="text-link dark" href="https://www.instagram.com/buckeye_gym_/" target="_blank" rel="noreferrer">Follow on Instagram <span>↗</span></a></div>
        <div className="gallery-grid reveal">{gallery.map((img, i) => <figure key={img} className={`photo p${i+1}`}><img src={`/gym/${img}`} alt={`Buckeye Gym equipment and training floor ${i+1}`}/><span>0{i+1}</span></figure>)}</div>
      </section>

      <section className="visit" id="visit">
        <div className="visit-image"><img src="/gym/35909c57bf2c49d1.jpeg" alt="Buckeye Gym weight floor"/></div>
        <div className="visit-content reveal">
          <div className="section-tag light">06 / Get in here</div>
          <h2>Your first set<br/>starts <em>here.</em></h2>
          <div className="visit-grid">
            <div><span>Find us</span><p>137 East Ave, Suite 102<br/>Tallmadge, OH 44278</p><a href="https://maps.google.com/?q=137+East+Ave+Suite+102+Tallmadge+OH+44278" target="_blank" rel="noreferrer">Get directions ↗</a></div>
            <div><span>Hours</span><p>Mon–Fri · 4:30am–9pm<br/>Saturday · 8am–5pm<br/>Sunday · 9am–4pm</p></div>
            <div><span>Talk to us</span><p><a href="tel:+13306333084">(330) 633-3084</a><br/><a href="mailto:rkpropst11@yahoo.com">rkpropst11@yahoo.com</a></p></div>
          </div>
          <a className="button red" href={signup} target="_blank" rel="noreferrer">Join Buckeye Gym <span>↗</span></a>
        </div>
      </section>

      <footer>
        <div className="footer-mark"><span>BG</span><b>Respect the gym.<br/>Respect your fellow lifters.<br/><em>Respect yourself.</em></b></div>
        <div className="footer-links"><a href="https://www.instagram.com/buckeye_gym_/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="#top">Back to top ↑</a></div>
        <div className="copyright">© {new Date().getFullYear()} Buckeye Gym · Tallmadge, Ohio</div>
      </footer>
    </main>
  );
}
