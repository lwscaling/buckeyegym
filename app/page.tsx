"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight, MapPin, Phone, Play, Scissors, Star, X } from "lucide-react";

const signup = "https://buckeyegym.gymmasteronline.com/portal/signup";
const googleReviews = "https://www.google.com/maps/search/?api=1&query=Buckeye+Gym%2C+137+East+Ave+Suite+102%2C+Tallmadge%2C+OH+44278";
const directions = "https://maps.google.com/?q=137+East+Ave+Suite+102+Tallmadge+OH+44278";
const instagram = "https://www.instagram.com/buckeye_gym_/";

const plans = [
  { name: "Regular", price: "42.70", unit: "/ month", items: ["Full gym access", "Trainer support", "Locker room & showers", "Unlimited access"] },
  { name: "Discount", price: "37.36", unit: "/ month", note: "Students · Military · Seniors · First responders", items: ["Everything in Regular", "Valid ID required", "No contract"] },
  { name: "Flex & Family", price: "10", unit: "from / visit", items: ["Day pass", "1-week visitor pass", "10-visit pack — never expires", "Family & couples plans"] },
];

const gallery: { src: string; alt: string; w?: number; h?: number }[] = [
  { src: "e7d80179147f271f.webp", alt: "Plate-loaded hack squat on the Buckeye Gym floor" },
  { src: "5dd202989792a5e5.webp", alt: "Red plate-loaded lever machine" },
  { src: "4e7450bf25309c95.webp", alt: "Black and red plate-loaded press" },
  { src: "652984d35bba5e73.webp", alt: "Plate-loaded machine with the white racks behind it" },
  { src: "da51a325223cc654.webp", alt: "The dumbbell rack running down the floor" },
  { src: "cdc4acc0bbe56837.webp", alt: "Machine station against the red wall" },
  { src: "616e203de79550f4.webp", alt: "Plate-loaded machine on the rubber floor" },
  { src: "e3abbaa383dccdee.webp", alt: "Leg machine against a red wall" },
  { src: "10d20400103eb4c6.webp", alt: "Black plate-loaded machine" },
  { src: "cf7348ead5871a6c.webp", alt: "Machine in front of framed physique posters" },
  { src: "4d201604b9ea814a.webp", alt: "Cable station with the dumbbell rack behind" },
  { src: "4c14091987713d60.webp", alt: "Black machine frame by the mirrors" },
  { src: "35909c57bf2c49d1.jpeg", w: 750, h: 494, alt: "The weight floor with physique posters on the wall" },
  { src: "c855c425fc1e0d1f.jpeg", w: 750, h: 496, alt: "Red-walled training area with racks and platforms" },
  { src: "b9a67ea05ad3adba.jpeg", w: 1320, h: 875, alt: "Rows of dumbbells on the rack" },
  { src: "8147990525c8681d.webp", alt: "A 190 lb dumbbell on the diamond-plate floor" },
  { src: "5ea8f1fda7527042.webp", w: 2560, h: 1749, alt: "The hand-drawn Mr. Olympia mural above the weight floor" },
];

const letters = [
  { quote: "Really cool staff. How a gym should be set up and run for those who make physical training and bodybuilding their lifestyle. Everyone has respect, and the atmosphere is very good.", name: "Chad Easterling" },
  { quote: "This is hands-down my favorite gym. The environment is always positive, motivating, and welcoming, whether you're just starting out or have been working out for years.", name: "Andrea Kumse" },
  { quote: "Best gym out there. The owners are awesome people and the staff is wonderful. They've created a cool community and we're thankful to be part of it.", name: "Rachel Hopp" },
  { quote: "Buckeye Gym is packed with every piece of equipment you could need. The atmosphere is inviting for both the seasoned lifter and the person trying it for the first time.", name: "Zach Williams" },
  { quote: "Three and a half years in, the old-school look is still great—but the people and the culture are what make Buckeye feel like home.", name: "Max O." },
  { quote: "I've trained here since 2015. The atmosphere, equipment selection, ownership, and knowledge are still the standard I compare every other gym against.", name: "Lindsey C." },
  { quote: "Beginners and professional bodybuilders train side by side here. Everyone gets the same respect, and the owners genuinely care about every person who walks in.", name: "Derek F." },
  { quote: "I've visited more than fifteen gyms across several states. Buckeye's community and equipment make it one of a kind.", name: "Vincent L." },
  { quote: "Five years here and the gym keeps getting better—new equipment, improved flooring, thoughtful upgrades, and a place where beginners and pros both belong.", name: "Abigail D." },
  { quote: "I've trained at Buckeye since 2007. The welcoming management, clean facility, and wide range of training options are the best they've ever been.", name: "Longtime Buckeye member" },
];

const coaches = [
  { name: "Megan Brown", image: "trainer-megan.webp", focus: "Weight loss, rehab & sports performance", details: ["ISSA Certified Personal Trainer", "15+ years in gym management", "Track & volleyball athlete and coach"] },
  { name: "Jason Lucas", image: "trainer-jason.webp", focus: "Strength & nutrition", details: ["National Personal Training Institute graduate", "ACE & nutrition certified", "10 years · 10,000+ sessions", "8-year Army veteran"] },
  { name: "Heather Pastirchak", image: "trainer-heather.webp", focus: "Physique, performance nutrition & holistic healing", details: ["Functional Diagnostic Nutrition Practitioner", "NASM Certified PT & Nutrition Coach", "In-person & online app programs"] },
];

const hours: Record<number, [number, number]> = { 0: [9, 16], 1: [4.5, 21], 2: [4.5, 21], 3: [4.5, 21], 4: [4.5, 21], 5: [4.5, 21], 6: [8, 17] };
const week = [
  { label: "Monday – Friday", days: [1, 2, 3, 4, 5], text: "4:30am – 9pm" },
  { label: "Saturday", days: [6], text: "8am – 5pm" },
  { label: "Sunday", days: [0], text: "9am – 4pm" },
];

const nav = [["Equipment", "iron"], ["Rates", "rates"], ["Reviews", "letters"], ["Coaches", "coaches"], ["Find us", "visit"]];

function fmt(h: number) {
  const hh = Math.floor(h), mm = Math.round((h - hh) * 60);
  const suffix = hh >= 12 ? "pm" : "am";
  const h12 = hh % 12 === 0 ? 12 : hh % 12;
  return `${h12}${mm ? ":" + String(mm).padStart(2, "0") : ""}${suffix}`;
}

function useOpenStatus() {
  const [state, setState] = useState<{ open: boolean; text: string; today: number } | null>(null);
  useEffect(() => {
    const tick = () => {
      const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
      const d = now.getDay(), t = now.getHours() + now.getMinutes() / 60;
      const [o, c] = hours[d];
      if (t >= o && t < c) setState({ open: true, text: `Open now · till ${fmt(c)}`, today: d });
      else if (t < o) setState({ open: false, text: `Closed · opens ${fmt(o)}`, today: d });
      else setState({ open: false, text: `Closed · opens ${fmt(hours[(d + 1) % 7][0])} tomorrow`, today: d });
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return state;
}

function Burst({ className = "" }: { className?: string }) {
  return <a className={`burst ${className}`} href="#visit" aria-label="Walk in free today — your first visit is on us">
    <svg viewBox="0 0 200 200" aria-hidden="true"><polygon points="100,2 114,34 147,12 149,49 187,45 169,79 199,100 169,121 187,155 149,151 147,188 114,166 100,198 86,166 53,188 51,151 13,155 31,121 1,100 31,79 13,45 51,49 53,12 86,34"/></svg>
    <span className="burst__in"><span>Walk in today</span><em>Free</em><small>First visit on us <ArrowRight aria-hidden="true"/></small></span>
  </a>;
}

export default function Home() {
  const status = useOpenStatus();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [allPhotos, setAllPhotos] = useState(false);
  const [tourOn, setTourOn] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((lightbox + 1) % gallery.length);
      if (e.key === "ArrowLeft") setLightbox((lightbox - 1 + gallery.length) % gallery.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [lightbox]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
  }, [menu]);

  const statusPill = <span className={`status${status && !status.open ? " is-closed" : ""}`}><i aria-hidden="true"/>{status ? status.text : "Open 4:30am weekdays"}</span>;

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className={`bar${scrolled ? " is-shown" : ""}${menu ? " is-open" : ""}`}>
        <a className="bar__mark" href="#top" aria-label="Buckeye Gym, back to top"><span className="mascot" aria-hidden="true"/><span className="wordmark">Buckeye <span>Gym</span></span></a>
        <nav className="bar__nav" aria-label="Main">
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}
        </nav>
        <a className="bar__cta" href="#visit" onClick={() => setMenu(false)}>Walk in free</a>
        <button className="bar__menu" type="button" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="mobile-nav" aria-label={menu ? "Close menu" : "Open menu"}>{menu ? <X aria-hidden="true"/> : <span aria-hidden="true">Menu</span>}</button>
      </header>
      <div className={`drawer${menu ? " is-open" : ""}`} id="mobile-nav" hidden={!menu}>
        <nav aria-label="Mobile">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}</nav>
        <a className="drawer__cta" href="#visit" onClick={() => setMenu(false)}>Walk in free today</a>
        <a className="drawer__tel" href="tel:+13306333084">(330) 633-3084</a>
      </div>

      <main id="main-content">
        {/* COVER */}
        <section className="cover" id="top" aria-labelledby="cover-title">
          <picture className="cover__photo">
            <source media="(max-width: 900px)" srcSet="/gym/cover-mural-960.webp"/>
            <img src="/gym/cover-mural-1920.webp" width={1920} height={1312} alt="The hand-drawn Mr. Olympia mural above the Buckeye Gym weight floor" fetchPriority="high"/>
          </picture>
          <div className="cover__top">
            <span>Est. 1985 · Tallmadge, OH</span>
            <nav className="cover__nav" aria-label="Sections">{nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
            {statusPill}
          </div>
          <h1 className="cover__mast" id="cover-title">Buckeye <span>Gym</span></h1>
          <div className="cover__body">
            <div className="cover__lines">
              <p className="cl cl--lead"><b>Since <span>1985.</span></b><small>Family owned in Tallmadge, Ohio</small></p>
              <p className="cl"><b>No contracts. <span>No hidden fees.</span></b><small>Memberships from $37.36 a month</small></p>
            </div>
            <Burst/>
          </div>
          <div className="cover__band">
            <a href={googleReviews} target="_blank" rel="noreferrer"><span className="stars" aria-hidden="true">★★★★★</span> 90+ Google reviews</a>
            <span>Mon–Fri 4:30a–9p · Sat 8a–5p · Sun 9a–4p</span>
            <a href={directions} target="_blank" rel="noreferrer">137 East Ave · Tallmadge</a>
          </div>
        </section>

        {/* CONTENTS / MANIFESTO */}
        <section className="contents page" aria-labelledby="contents-title">
          <div className="contents__lede">
            <h2 id="contents-title">Everybody starts <span>somewhere.</span></h2>
            <p>We&apos;ve been running this gym in Tallmadge since 1985, and it&apos;s still family owned. Some of our members compete. Some are picking up a dumbbell for the first time. Everyone trains on the same floor and gets treated the same way. If you&apos;re new and not sure where to start, ask. Somebody will help you out.</p>
          </div>
          <ol className="contents__list" aria-label="In this issue">
            <li><a href="#iron"><b>Equipment</b><span>Free weights, racks and plate-loaded machines</span><ArrowDown aria-hidden="true"/></a></li>
            <li><a href="#rates"><b>Rates</b><span>Month to month, day passes and family plans</span><ArrowDown aria-hidden="true"/></a></li>
            <li><a href="#letters"><b>Reviews</b><span>In our members&apos; own words</span><ArrowDown aria-hidden="true"/></a></li>
            <li><a href="#coaches"><b>Coaches</b><span>Personal training and nutrition</span><ArrowDown aria-hidden="true"/></a></li>
            <li><a href="#visit"><b>Find us</b><span>137 East Ave, Suite 102, Tallmadge</span><ArrowDown aria-hidden="true"/></a></li>
          </ol>
        </section>

        {/* FEATURE: THE IRON */}
        <section className="iron" id="iron" aria-labelledby="iron-title">
          <figure className="iron__photo">
            <img src="/gym/8147990525c8681d.webp" width={1500} height={2000} alt="A 190 lb dumbbell with its weight painted in yellow marker" loading="lazy" decoding="async"/>
            <figcaption>From the dumbbell rack</figcaption>
          </figure>
          <div className="iron__copy">
            <h2 id="iron-title">What&apos;s on <span>the floor.</span></h2>
            <p className="iron__deck">Dumbbells, barbells, racks, benches and a long row of plate-loaded machines. Bring your program and get to work.</p>
            <ul className="iron__list">
              <li><b>Free weights</b><span>Dumbbells, barbells, benches, racks and platforms.</span></li>
              <li><b>Machines</b><span>Hack squat, leg press, presses, rows and more, plate-loaded and selectorized.</span></li>
              <li><b>Coaching</b><span>Personal training and nutrition coaching with our trainers.</span></li>
              <li><b>Locker rooms</b><span>Lockers and showers, so you can train before work.</span></li>
            </ul>
            <a className="btn btn--yellow" href="#spread">See the gym <ArrowDown aria-hidden="true"/></a>
          </div>
        </section>

        {/* RATES */}
        <section className="rates" id="rates" aria-labelledby="rates-title">
          <div className="rates__head">
            <h2 id="rates-title">The price list.</h2>
            <p>No contracts. Pay month to month, or just come in when you can.</p>
          </div>
          <div className="rates__grid">
            <article className="coupon coupon--free">
              <Scissors className="coupon__cut" aria-hidden="true"/>
              <h3>First visit</h3>
              <p className="coupon__price"><b>Free</b></p>
              <p className="coupon__note">Never been in? Your first workout is on us. Come in during open hours and tell the front desk it&apos;s your first visit.</p>
              <a className="btn btn--black" href="#visit">Hours and directions <ArrowRight aria-hidden="true"/></a>
            </article>
            {plans.map((plan) => <article className="coupon" key={plan.name}>
              <Scissors className="coupon__cut" aria-hidden="true"/>
              <h3>{plan.name}</h3>
              {plan.note && <p className="coupon__tag">{plan.note}</p>}
              <p className="coupon__price"><sup>$</sup><b>{plan.price}</b><small>{plan.unit}</small></p>
              <ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <a className="btn btn--outline" href={signup} target="_blank" rel="noreferrer">Join online <ArrowUpRight aria-hidden="true"/></a>
            </article>)}
          </div>
          <p className="rates__foot">Discount rates need a valid student, military, senior or first responder ID. Questions? <a href="tel:+13306333084">Call (330) 633-3084</a></p>
        </section>

        {/* LETTERS */}
        <section className="letters page" id="letters" aria-labelledby="letters-title">
          <div className="letters__head">
            <h2 id="letters-title">Reviews.</h2>
            <a className="letters__google" href={googleReviews} target="_blank" rel="noreferrer"><span aria-hidden="true">★★★★★</span> 90+ five-star reviews on Google <ArrowUpRight aria-hidden="true"/></a>
          </div>
          <div className="letters__cols">
            {letters.map((l, i) => <blockquote className={i === 0 ? "letter letter--lead" : "letter"} key={l.name}>
              <p>{l.quote}</p>
              <footer><Star aria-hidden="true"/> {l.name}</footer>
            </blockquote>)}
          </div>
        </section>

        {/* SPREAD */}
        <section className="spread" id="spread" aria-labelledby="spread-title">
          <div className="spread__head">
            <h2 id="spread-title">Inside <span>Buckeye.</span></h2>
            <a className="btn btn--outline-light" href={instagram} target="_blank" rel="noreferrer">Follow @buckeye_gym_ <ArrowUpRight aria-hidden="true"/></a>
          </div>
          <div className={`spread__grid${allPhotos ? " is-all" : ""}`}>
            {gallery.map((img, i) => <button type="button" className="spread__item" key={img.src} onClick={() => setLightbox(i)} aria-label={`Open photo: ${img.alt}`}>
              <img src={`/gym/${img.src}`} width={img.w ?? 1500} height={img.h ?? 2000} alt={img.alt} loading="lazy" decoding="async"/>
            </button>)}
          </div>
          {!allPhotos && <button type="button" className="btn btn--yellow spread__more" onClick={() => setAllPhotos(true)}>Show all {gallery.length} photos <ArrowDown aria-hidden="true"/></button>}
        </section>

        {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
          <button type="button" className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close photo viewer" autoFocus><X aria-hidden="true"/></button>
          <button type="button" className="lightbox__arrow lightbox__arrow--prev" onClick={() => setLightbox((lightbox - 1 + gallery.length) % gallery.length)} aria-label="Previous photo"><ArrowLeft aria-hidden="true"/></button>
          <figure><img src={`/gym/${gallery[lightbox].src}`} alt={gallery[lightbox].alt}/><figcaption>{gallery[lightbox].alt}<span>{lightbox + 1} / {gallery.length}</span></figcaption></figure>
          <button type="button" className="lightbox__arrow lightbox__arrow--next" onClick={() => setLightbox((lightbox + 1) % gallery.length)} aria-label="Next photo"><ArrowRight aria-hidden="true"/></button>
        </div>}

        {/* COACHES */}
        <section className="coaches page" id="coaches" aria-labelledby="coaches-title">
          <h2 id="coaches-title">Meet the <span>coaches.</span></h2>
          <div className="coaches__grid">
            {coaches.map((c) => <article className="coach" key={c.name}>
              <figure><img src={`/gym/${c.image}`} width={500} height={500} alt={`${c.name}, Buckeye Gym trainer`} loading="lazy" decoding="async"/></figure>
              <h3>{c.name}</h3>
              <p className="coach__focus">{c.focus}</p>
              <ul>{c.details.map((d) => <li key={d}>{d}</li>)}</ul>
            </article>)}
          </div>
          <p className="coaches__foot">Want help getting started? Ask at the front desk or <a href="tel:+13306333084">call (330) 633-3084</a> to set up a session.</p>
        </section>

        {/* TOUR */}
        <section className="tour" aria-labelledby="tour-title">
          <div className="tour__copy">
            <h2 id="tour-title">Have a look <span>around.</span></h2>
            <p>Take the 360° tour and see the gym for yourself. When you&apos;re ready, your first visit is free.</p>
          </div>
          <div className="tour__frame">
            {tourOn
              ? <iframe src="https://www.google.com/maps/embed?pb=!4v1756912731193!6m8!1m7!1sCAoSHENJQUJJaERLVlJtOThqWktwMFozQ3NoRURQY3Y.!2m2!1d41.10235743997894!2d-81.43503416500457!3f101.68!4f-2.680000000000007!5f0.4000000000000002" title="360° virtual tour of Buckeye Gym" allowFullScreen referrerPolicy="no-referrer-when-downgrade"/>
              : <button type="button" className="tour__poster" onClick={() => setTourOn(true)}>
                  <img src="/gym/hero-gym-mural.webp" width={1536} height={1024} alt="" loading="lazy" decoding="async"/>
                  <span className="btn btn--yellow"><Play aria-hidden="true"/> Start the 360° tour</span>
                </button>}
          </div>
        </section>

        {/* VISIT */}
        <section className="visit" id="visit" aria-labelledby="visit-title">
          <div className="visit__head">
            <h2 id="visit-title">Come lift.</h2>
            <p>Your first visit is free. Come in any time we&apos;re open and tell the front desk it&apos;s your first time.</p>
            {statusPill}
          </div>
          <div className="visit__grid">
            <div className="visit__block">
              <h3>Hours</h3>
              <table className="hours">
                <tbody>{week.map((w) => <tr key={w.label} className={status && w.days.includes(status.today) ? "is-today" : ""}><th scope="row">{w.label}</th><td>{w.text}</td></tr>)}</tbody>
              </table>
            </div>
            <div className="visit__block">
              <h3>Address</h3>
              <p className="visit__big">137 East Ave, Suite 102<br/>Tallmadge, OH 44278</p>
              <a className="btn btn--yellow" href={directions} target="_blank" rel="noreferrer"><MapPin aria-hidden="true"/> Get directions</a>
            </div>
            <div className="visit__block">
              <h3>Talk to us</h3>
              <p className="visit__big"><a href="tel:+13306333084">(330) 633-3084</a></p>
              <p><a href="mailto:rkpropst11@yahoo.com">rkpropst11@yahoo.com</a></p>
              <div className="visit__actions">
                <a className="btn btn--black" href="tel:+13306333084"><Phone aria-hidden="true"/> Call</a>
                <a className="btn btn--outline-light" href={signup} target="_blank" rel="noreferrer">Join online <ArrowUpRight aria-hidden="true"/></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="foot__rules">
          <span className="mascot" role="img" aria-label="Buckeye Gym mascot"/>
          <p>Respect the gym.<br/>Respect your fellow lifters.<br/><span>Respect yourself.</span></p>
        </div>
        <div className="foot__row">
          <span>© {new Date().getFullYear()} Buckeye Gym · Est. 1985 · Tallmadge, Ohio</span>
          <nav aria-label="Footer"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href={instagram} target="_blank" rel="noreferrer">Instagram</a><a href="#top">Back to top <ArrowUp aria-hidden="true"/></a></nav>
        </div>
      </footer>
    </>
  );
}
