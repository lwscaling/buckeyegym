"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight, X } from "lucide-react";

const signup = "https://buckeyegym.gymmasteronline.com/portal/signup";

const plans = [
  { name: "Regular", price: "$42.70", note: "/ month", items: ["Full gym access", "Trainer support", "Locker room & showers", "Unlimited access"] },
  { name: "Discount", price: "$37.36", note: "/ month", badge: "Students · Military · Seniors · First responders", items: ["Full gym access", "Trainer support", "Locker room & showers", "Unlimited access"] },
  { name: "Flex & Family", price: "$10", note: "from / visit", items: ["Day pass", "1-week visitor pass", "10-visit pack — never expires", "Family & couples plans"] },
];

const gallery = [
  "e7d80179147f271f.jpeg", "5dd202989792a5e5.jpeg", "4e7450bf25309c95.jpeg",
  "bf5055086068682e.jpeg", "652984d35bba5e73.jpeg", "616e203de79550f4.jpeg",
  "0f7b05a0e79d5535.jpeg", "10d20400103eb4c6.jpeg", "cf7348ead5871a6c.jpeg",
  "4d201604b9ea814a.jpeg", "4c14091987713d60.jpeg", "23373d50af7a035c.jpeg",
  "cdc4acc0bbe56837.jpeg", "e3abbaa383dccdee.jpeg", "8147990525c8681d.jpeg",
  "da51a325223cc654.jpeg",
];

const reviews = [
  { quote: "Really cool staff. How a gym should be set up and run for those who make physical training and bodybuilding their lifestyle. Everyone has respect, and the atmosphere is very good.", name: "Chad Easterling" },
  { quote: "This is hands-down my favorite gym. The environment is always positive, motivating, and welcoming, whether you're just starting out or have been working out for years.", name: "Andrea Kumse" },
  { quote: "Best gym out there. The owners are awesome people and the staff is wonderful. They've created a cool community and we're thankful to be part of it.", name: "Rachel Hopp" },
  { quote: "Buckeye Gym is packed with every piece of equipment you could need. The atmosphere is inviting for both the seasoned lifter and the person trying it for the first time.", name: "Zach Williams" },
];

const trainers = [
  { name: "Megan Brown", image: "trainer-megan.jpeg", details: ["ISSA Certified Personal Trainer", "15+ Years in Gym Management", "Track & Volleyball Athlete & Coach", "Weight Loss, Rehab & Sports Performance"] },
  { name: "Jason Lucas", image: "trainer-jason.jpeg", details: ["National Personal Training Institute Graduate", "ACE & Nutrition Certified", "10 Years Experience", "Over 10,000 Sessions", "8-Year Army Veteran"] },
  { name: "Heather Pastirchak", image: "trainer-heather.png", details: ["Functional Diagnostic Nutrition Practitioner", "NASM Certified PT & Nutrition Coach", "In-Person & Online App Programs", "Physique Development, Performance Nutrition & Holistic Healing"] },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [review, setReview] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") setLightbox((lightbox + 1) % gallery.length);
      if (event.key === "ArrowLeft") setLightbox((lightbox - 1 + gallery.length) % gallery.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [lightbox]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Buckeye Gym home"><span className="brand-icon"><img src="/gym/9751049e95a4cbf8.gif" alt=""/></span><b>BUCKEYE<br/>GYM</b></a>
        <nav className={menu ? "nav open" : "nav"} aria-label="Main navigation">
          {[["The Gym","about"],["Memberships","memberships"],["Reviews","reviews"],["Gallery","gallery"],["Visit","visit"]].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}
        </nav>
        <a className="join join-desktop" href={signup} target="_blank" rel="noreferrer">Join the gym <span><ArrowUpRight aria-hidden="true"/></span></a>
        <button className="menu" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Toggle navigation"><i/><i/></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-bg"/>
        <div className="hero-noise"/>
        <div className="hero-content">
          <p className="eyebrow">Tallmadge, Ohio · Family owned</p>
          <h1><span className="hero-brand"><em>Buckeye</em> Gym</span><span className="hero-promise">Built for the work.</span></h1>
          <p className="hero-copy">No gimmicks. No crowds taking mirror selfies. Just serious equipment, people who give a damn, and a place to get stronger.</p>
          <div className="hero-actions">
            <a className="button red" href={signup} target="_blank" rel="noreferrer">Start training <span><ArrowUpRight aria-hidden="true"/></span></a>
            <a className="text-link" href="#memberships">See memberships <span><ArrowDown aria-hidden="true"/></span></a>
          </div>
        </div>
        <div className="hero-stamp"><strong>90+</strong><span>Five-star<br/>Google reviews</span></div>
        <div className="scroll-mark">Scroll to enter <span><ArrowDown aria-hidden="true"/></span></div>
      </section>

      <div className="ticker" aria-hidden="true"><div>{[0,1,2,3,4,5].map((copy) => <span key={copy}>IRON • EFFORT • COMMUNITY • NO CONTRACTS • OLD SCHOOL • WALK-INS WELCOME • </span>)}</div></div>

      <section className="manifesto section" id="about">
        <div className="manifesto-head reveal"><div className="section-tag">01 / The gym</div><p className="kicker">This is not a wellness club.</p><h2>A real gym for people who are <em>here to train.</em></h2></div>
        <div className="manifesto-aside reveal"><span>What makes us different</span><p>At Buckeye Gym, you&apos;re not a number. You&apos;re part of a crew that pushes harder, lifts heavier, and shows up for more than just a workout.</p><a className="text-link dark" href="#visit">Come see the place <span><ArrowRight aria-hidden="true"/></span></a></div>
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
            <li><b>Coaching</b><span>Personal training and nutrition.</span></li>
            <li><b>Space to work</b><span>Clean floors, open room, and no nonsense.</span></li>
          </ul>
          <a className="button outline" href="#gallery">See the gym <span><ArrowDown aria-hidden="true"/></span></a>
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
            <a className={i === 1 ? "button red full" : "button black full"} href={signup} target="_blank" rel="noreferrer">Choose this plan <span><ArrowUpRight aria-hidden="true"/></span></a>
          </article>)}
        </div>
        <p className="pricing-note reveal">No long-term contracts. Discounts require valid ID. <a href="tel:+13306333084">Questions? Call (330) 633-3084 <ArrowRight className="inline-icon" aria-hidden="true"/></a></p>
      </section>

      <section className="quote-section" id="reviews">
        <div className="section-tag light reveal">04 / The word around town</div>
        <div className="big-quote reveal">“</div>
        <blockquote className="quote-copy" key={review}>{reviews[review].quote}</blockquote>
        <div className="quote-meta reveal"><span>★★★★★</span><p><b>{reviews[review].name}</b><br/>Buckeye Gym member</p></div>
        <div className="review-controls reveal"><span>{String(review+1).padStart(2,"0")} / {String(reviews.length).padStart(2,"0")}</span><div><button onClick={() => setReview((review - 1 + reviews.length) % reviews.length)} aria-label="Previous review"><ArrowLeft aria-hidden="true"/></button><button onClick={() => setReview((review + 1) % reviews.length)} aria-label="Next review"><ArrowRight aria-hidden="true"/></button></div></div>
      </section>

      <section className="gallery section" id="gallery">
        <div className="section-tag reveal">05 / Inside Buckeye</div>
        <div className="gallery-head reveal"><h2>No staged shots.<br/><em>This is the place.</em></h2><a className="text-link dark" href="https://www.instagram.com/buckeye_gym_/" target="_blank" rel="noreferrer">Follow on Instagram <span><ArrowUpRight aria-hidden="true"/></span></a></div>
        <div className="gallery-grid reveal">{gallery.map((img, i) => <figure key={img} className="photo"><button onClick={() => setLightbox(i)} aria-label={`Open gallery image ${i+1}`}><img src={`/gym/${img}`} alt={`Buckeye Gym equipment and training floor ${i+1}`}/><span>{String(i+1).padStart(2,"0")}</span></button></figure>)}</div>
      </section>

      {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Buckeye Gym photo gallery">
        <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close gallery">Close <X aria-hidden="true"/></button>
        <button className="lightbox-arrow prev" onClick={() => setLightbox((lightbox - 1 + gallery.length) % gallery.length)} aria-label="Previous image"><ArrowLeft aria-hidden="true"/></button>
        <figure><img src={`/gym/${gallery[lightbox]}`} alt={`Buckeye Gym gallery image ${lightbox+1}`}/><figcaption>{String(lightbox+1).padStart(2,"0")} / {gallery.length}</figcaption></figure>
        <button className="lightbox-arrow next" onClick={() => setLightbox((lightbox + 1) % gallery.length)} aria-label="Next image"><ArrowRight aria-hidden="true"/></button>
      </div>}

      <section className="trainers section" id="trainers">
        <div className="section-tag reveal">06 / Our team</div>
        <div className="trainers-head reveal"><p className="kicker">Coaching with receipts.</p><h2>Meet your<br/><em>trainers.</em></h2></div>
        <div className="trainer-grid reveal">
          {trainers.map((trainer, i) => <article className="trainer" key={trainer.name}>
            <figure><img src={`/gym/${trainer.image}`} alt={`${trainer.name}, Buckeye Gym trainer`}/><span>0{i+1}</span></figure>
            <div><h3>{trainer.name}</h3><ul>{trainer.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div>
          </article>)}
        </div>
      </section>

      <section className="tour-section">
        <div className="tour-copy reveal"><div className="section-tag light">07 / Virtual tour</div><p className="kicker">Walk the floor before you walk in.</p><h2>Take a look<br/><em>around.</em></h2><p>Move through the gym and see the equipment, layout, and atmosphere for yourself.</p></div>
        <div className="tour-frame reveal"><iframe src="https://www.google.com/maps/embed?pb=!4v1756912731193!6m8!1m7!1sCAoSHENJQUJJaERLVlJtOThqWktwMFozQ3NoRURQY3Y.!2m2!1d41.10235743997894!2d-81.43503416500457!3f101.68!4f-2.680000000000007!5f0.4000000000000002" title="Virtual tour of Buckeye Gym" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"/></div>
      </section>

      <section className="visit" id="visit">
        <div className="visit-image"><img src="/gym/35909c57bf2c49d1.jpeg" alt="Buckeye Gym weight floor"/></div>
        <div className="visit-content reveal">
          <div className="section-tag light">08 / Get in here</div>
          <h2>Your first set<br/>starts <em>here.</em></h2>
          <div className="visit-grid">
            <div><span>Find us</span><p>137 East Ave, Suite 102<br/>Tallmadge, OH 44278</p><a href="https://maps.google.com/?q=137+East+Ave+Suite+102+Tallmadge+OH+44278" target="_blank" rel="noreferrer">Get directions <ArrowUpRight className="inline-icon" aria-hidden="true"/></a></div>
            <div><span>Hours</span><p>Mon–Fri · 4:30am–9pm<br/>Saturday · 8am–5pm<br/>Sunday · 9am–4pm</p></div>
            <div><span>Talk to us</span><p><a href="tel:+13306333084">(330) 633-3084</a><br/><a href="mailto:rkpropst11@yahoo.com">rkpropst11@yahoo.com</a></p></div>
          </div>
          <a className="button red" href={signup} target="_blank" rel="noreferrer">Join Buckeye Gym <span><ArrowUpRight aria-hidden="true"/></span></a>
        </div>
      </section>

      <footer>
        <div className="footer-mark"><span><img src="/gym/9751049e95a4cbf8.gif" alt="Buckeye Gym mascot"/></span><b>Respect the gym.<br/>Respect your fellow lifters.<br/><em>Respect yourself.</em></b></div>
        <div className="footer-links"><a href="https://www.instagram.com/buckeye_gym_/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight className="inline-icon" aria-hidden="true"/></a><a href="#top">Back to top <ArrowUp className="inline-icon" aria-hidden="true"/></a></div>
        <div className="copyright">© {new Date().getFullYear()} Buckeye Gym · Tallmadge, Ohio</div>
      </footer>
    </main>
  );
}
