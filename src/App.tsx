import { FormEvent, useId, useState } from "react";

const EMAIL = "yuvraj2028builder@gmail.com";
const WEB3FORMS_ACCESS_KEY = "7d772e5b-e79d-40e4-aa40-2e885e94b6b4";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const problems = [
  {
    number: "01",
    label: "Unclear",
    title: "No services, no pricing cues.",
    text: "If people can't quickly see what you do and what it costs, they go back to Google.",
  },
  {
    number: "02",
    label: "Hard work",
    title: "No fast way to get a quote.",
    text: "Every extra tap between interest and contact costs you a possible job.",
  },
  {
    number: "03",
    label: "Bad first look",
    title: "Slow and clumsy on a phone.",
    text: "Most local searches are mobile. Your site should feel built for them.",
  },
];

const concepts = [
  {
    name: "Carolina Clean Co.",
    city: "Charlotte, NC",
    rating: "4.8 on Google",
    type: "Cleaning",
    variant: "cleaning",
    gap: "Services were buried and there was no clear way to request a quote.",
    changed: "Clear service options, starting prices, and a short quote form.",
  },
  {
    name: "Desert Shine Auto Spa",
    city: "Phoenix, AZ",
    rating: "4.9 on Google",
    type: "Auto detailing",
    variant: "detailing",
    gap: "One page with no package comparison or booking path.",
    changed: "Simple packages, strong proof, and an obvious mobile booking path.",
  },
  {
    name: "ClearFlow Exterior Care",
    city: "Tampa, FL",
    rating: "4.7 on Google",
    type: "Pressure washing",
    variant: "washing",
    gap: "No pricing cues, service areas, or before-and-after proof.",
    changed: "Focused offer, service-area details, project gallery, and quote CTA.",
  },
];

const included = [
  ["01", "Services & prices section"],
  ["02", "Simple quote form"],
  ["03", "Google reviews section"],
  ["04", "Before-and-after gallery"],
  ["05", "Clear service areas"],
  ["06", "Click-to-call buttons"],
  ["07", "Mobile-friendly layout"],
  ["08", "Fast loading"],
];

const packages = [
  {
    name: "Starter",
    price: "$399",
    description: "A focused one-page site for a clear local offer.",
    features: ["One custom page", "Quote form", "Click-to-call", "Mobile-ready"],
  },
  {
    name: "Standard",
    price: "$799",
    description: "A complete site that answers questions and builds trust.",
    features: ["Core pages", "Reviews section", "Project gallery", "Basic local SEO"],
    popular: true,
  },
  {
    name: "Pro",
    price: "$1,499",
    description: "A bigger sales tool for established businesses.",
    features: ["Expanded pages", "Advanced quote form", "Service area pages", "Priority support"],
  },
];

const steps = [
  {
    number: "01",
    title: "Tell me about your business.",
    text: "Share your services, service area, photos, and what makes customers choose you.",
  },
  {
    number: "02",
    title: "I build it.",
    text: "I write, design and build around one goal: more quote requests. Timeline confirmed before work begins.",
  },
  {
    number: "03",
    title: "You go live and get quotes.",
    text: "After your final approval, the site goes live and starts working for your business.",
  },
];

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Packages above are starting points. Your final quote depends on pages and features. You approve everything before paying.",
  },
  {
    question: "How long will it take?",
    answer: "Depends on the project. I confirm the schedule before work begins.",
  },
  {
    question: "Can I ask for changes?",
    answer: "Yes. Every package includes a revision round before launch.",
  },
  {
    question: "Do you handle hosting?",
    answer: "Yes, I can set up reliable hosting or connect to hosting you already own.",
  },
  {
    question: "Who owns the website?",
    answer: "You do. Once the project is paid in full, the site and its content are yours.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="wordmark" aria-label="Yuvraj, back to top">
        Y<span>.</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact" className="nav-cta">
          Free audit <Arrow />
        </a>
      </nav>
    </header>
  );
}

function BrowserMock({ variant }: { variant: string }) {
  if (variant === "cleaning") {
    return (
      <div className="browser mock-cleaning" aria-label="Cleaning company website concept">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>carolinaclean.co</span>
        </div>
        <div className="mock-nav">
          <b>CAROLINA CLEAN</b>
          <span>Services&nbsp;&nbsp; Pricing&nbsp;&nbsp; About</span>
          <em>Get a quote</em>
        </div>
        <div className="mock-clean-hero">
          <div>
            <small>CHARLOTTE'S LOCAL CLEANING TEAM</small>
            <h3>
              A cleaner home.
              <br />A lighter week.
            </h3>
            <p>Reliable home cleaning from $119.</p>
            <button tabIndex={-1}>Get my free estimate</button>
          </div>
          <div className="clean-photo" />
        </div>
        <div className="mock-strip">
          <span>4.8 ★ GOOGLE RATING</span>
          <span>INSURED TEAM</span>
          <span>EASY BOOKING</span>
        </div>
      </div>
    );
  }

  if (variant === "detailing") {
    return (
      <div className="browser mock-detailing" aria-label="Auto detailing website concept">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>desertshineautospa.com</span>
        </div>
        <div className="detail-nav">
          <b>
            DESERT<span>SHINE</span>
          </b>
          <em>Book your detail</em>
        </div>
        <div className="detail-hero">
          <small>PHOENIX MOBILE DETAILING</small>
          <h3>
            SHOWROOM CLEAN.
            <br />
            <i>WITHOUT THE WAIT.</i>
          </h3>
          <p>We come to your home or office.</p>
          <button tabIndex={-1}>View packages</button>
        </div>
        <div className="detail-packages">
          <span>
            <b>EXPRESS</b>
            <small>from $89</small>
          </span>
          <span>
            <b>FULL RESET</b>
            <small>from $179</small>
          </span>
          <span>
            <b>CERAMIC</b>
            <small>custom quote</small>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="browser mock-washing" aria-label="Pressure washing website concept">
      <div className="browser-bar">
        <i />
        <i />
        <i />
        <span>clearflowexterior.com</span>
      </div>
      <div className="wash-nav">
        <b>
          CLEAR/<span>FLOW</span>
        </b>
        <span>Residential&nbsp;&nbsp; Commercial&nbsp;&nbsp; Our work</span>
        <em>Free quote</em>
      </div>
      <div className="wash-hero">
        <small>TAMPA BAY EXTERIOR CLEANING</small>
        <h3>
          Make your property
          <br />
          look cared for.
        </h3>
        <p>Driveways, homes, roofs, and patios — cleaned right.</p>
        <button tabIndex={-1}>Get a free quote</button>
      </div>
      <div className="wash-stats">
        <span>
          <b>4.7</b>
          <small>Google rating</small>
        </span>
        <span>
          <b>24hr</b>
          <small>Quote response</small>
        </span>
        <span>
          <b>100%</b>
          <small>Clear pricing</small>
        </span>
      </div>
    </div>
  );
}

function ComparisonSlider() {
  const [position, setPosition] = useState(52);
  const inputId = useId();

  return (
    <div className="comparison">
      <div className="comparison-topline">
        <span className="side-label before-label">Before</span>
        <label htmlFor={inputId}>Drag to compare</label>
        <span className="side-label after-label">After</span>
      </div>
      <div
        className="compare-canvas"
        style={{ "--position": `${position}%` } as React.CSSProperties}
      >
        <div className="before-site">
          <div className="old-nav">SUNSHINE PRESSURE WASHING</div>
          <div className="old-copy">
            <h3>Pressure Washing Services</h3>
            <p>We pressure wash driveways and houses. Call us for more information.</p>
            <span>Call: (555) 014-2840</span>
          </div>
        </div>
        <div className="after-clip">
          <div className="after-site after-copy">
            <div className="new-nav">
              <b>
                SUNSHINE<span>/PW</span>
              </b>
              <em>Get a free quote</em>
            </div>
            <div className="new-copy">
              <small>LOCAL. INSURED. RELIABLE.</small>
              <h3>
                A cleaner property
                <br />
                starts here.
              </h3>
              <p>Driveways from $99 · Houses from $199</p>
              <button tabIndex={-1}>Get a free quote</button>
            </div>
            <div className="new-services">
              <span>Driveways</span>
              <span>House wash</span>
              <span>Patios</span>
            </div>
          </div>
        </div>
        <div className="compare-handle" aria-hidden="true">
          <span>‹</span>
          <span>›</span>
        </div>
        <input
          id={inputId}
          type="range"
          min="5"
          max="95"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Move the before and after comparison slider"
        />
      </div>
    </div>
  );
}

function AuditForm({ selectedPackage }: { selectedPackage: string }) {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const business = String(data.get("business") || "");
    const website = String(data.get("website") || "No website provided");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "No additional message");

    setSending(true);
    setStatus("Sending your request…");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Free 3-point audit request — ${business}`,
          from_name: `${name} (via gotit website)`,
          name,
          business,
          website,
          service,
          package_interest: selectedPackage || "Not selected",
          message,
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus("Request sent! I'll reply within 24 hours. Check your inbox.");
        form.reset();
      } else {
        setStatus(`Something went wrong: ${result.message || "please try again."}`);
      }
    } catch {
      setStatus("Network error — please try again, or email me directly below.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="audit-form" onSubmit={submitForm}>
      <div className="field-row">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Business name</span>
          <input
            name="business"
            type="text"
            autoComplete="organization"
            placeholder="Your business"
            required
          />
        </label>
      </div>
      <label>
        <span>
          Website URL <i>optional</i>
        </span>
        <input name="website" type="url" inputMode="url" placeholder="https://yourwebsite.com" />
      </label>
      <label>
        <span>What does your business do?</span>
        <input
          name="service"
          type="text"
          placeholder="e.g. Residential plumbing in Austin"
          required
        />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={4} placeholder="Anything useful I should know?" />
      </label>
      {selectedPackage && (
        <p className="package-interest">Interested in: {selectedPackage} package</p>
      )}
      <button className="button button-light form-submit" type="submit" disabled={sending}>
        {sending ? "Sending…" : <>Send my free audit request <Arrow /></>}
      </button>
      <p className="form-note">
        Prefer email? <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
      {status && (
        <p className="form-status" role="status">
          {status}
        </p>
      )}
    </form>
  );
}

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState("");

  function choosePackage(name: string) {
    setSelectedPackage(name);
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div id="top">
      <Header />
      <main>
        <section className="hero section-shell">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="hero-content">
            <div className="availability">
              <i /> Now taking on new projects
            </div>
            <h1>
              Turn good work
              <br />
              into <span>booked jobs.</span>
            </h1>
            <p>
              I&apos;m Yuvraj. I design sharp, fast websites for local service businesses — sites
              that make it easy for customers to trust you, find your prices, and request a quote.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button button-accent">
                Get my free 3-point audit <Arrow />
              </a>
              <a href="#work" className="text-link">
                See my work <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="hero-foot">
            <span>WEB DESIGN / LOCAL SERVICE BUSINESSES</span>
            <span>US · UK · AUSTRALIA</span>
          </div>
        </section>

        <section className="section section-shell problem-section">
          <div className="section-kicker">
            <span>01</span> The problem
          </div>
          <div className="section-heading split-heading">
            <h2>A weak website makes a great business look risky.</h2>
            <p>Your next customer is deciding in seconds. Give them fewer reasons to leave.</p>
          </div>
          <div className="problem-grid">
            {problems.map((problem) => (
              <article className="problem-card" key={problem.label}>
                <div className="card-top">
                  <span>{problem.label}</span>
                  <i>{problem.number}</i>
                </div>
                <div className="problem-mark" aria-hidden="true">
                  <span />
                  <span />
                </div>
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-shell">
            <div className="section-kicker">
              <span>02</span> Real-business concepts
            </div>
            <div className="section-heading split-heading">
              <h2>A sharper path from search to quote.</h2>
              <p>Concept redesigns based only on publicly available business information.</p>
            </div>
          </div>
          <div className="concept-list section-shell">
            {concepts.map((concept, index) => (
              <article className="concept-card" key={concept.name}>
                <div className="concept-meta">
                  <div>
                    <span className="concept-index">
                      0{index + 1} / {concept.type}
                    </span>
                    <h3>{concept.name}</h3>
                  </div>
                  <div className="location">
                    <span>{concept.city}</span>
                    <span>{concept.rating}</span>
                  </div>
                </div>
                <BrowserMock variant={concept.variant} />
                <div className="concept-notes">
                  <p>
                    <span>Gap found</span>
                    {concept.gap}
                  </p>
                  <p>
                    <span>What I changed</span>
                    {concept.changed}
                  </p>
                </div>
                <p className="disclaimer">
                  Concept redesign built from public information. Not affiliated with {concept.name}
                  .
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-shell compare-section">
          <div className="section-kicker">
            <span>03</span> The difference
          </div>
          <div className="section-heading compare-heading">
            <h2>Same business. A much stronger reason to get in touch.</h2>
          </div>
          <ComparisonSlider />
        </section>

        <section className="section included-section">
          <div className="section-shell">
            <div className="section-kicker">
              <span>04</span> What&apos;s included
            </div>
            <div className="section-heading split-heading">
              <h2>Everything your customer needs to say yes.</h2>
              <p>
                No filler. Just the pages and features that help local people trust you and take
                action.
              </p>
            </div>
            <div className="included-grid">
              {included.map(([number, item]) => (
                <div className="included-item" key={item}>
                  <span>{number}</span>
                  <h3>{item}</h3>
                  <i aria-hidden="true">+</i>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-shell pricing-section" id="pricing">
          <div className="section-kicker">
            <span>05</span> Packages
          </div>
          <div className="section-heading split-heading">
            <h2>
              Clear scope.
              <br />
              Straightforward price.
            </h2>
            <p>Start with what you need now. Every site is custom-built around your business.</p>
          </div>
          <div className="pricing-grid">
            {packages.map((item) => (
              <article className={`price-card ${item.popular ? "popular" : ""}`} key={item.name}>
                <div className="price-top">
                  <span>{item.name}</span>
                  {item.popular && <em>Most popular</em>}
                </div>
                <div className="price">
                  {item.price}
                  <small>starting at</small>
                </div>
                <p>{item.description}</p>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="choose-button" onClick={() => choosePackage(item.name)}>
                  Choose {item.name} <Arrow />
                </button>
              </article>
            ))}
          </div>
          <div className="trust-line">
            <span aria-hidden="true">✓</span>
            <p>
              <b>Pay only if it solves your problem.</b> You approve the design before it goes live.
            </p>
          </div>
        </section>

        <section className="section process-section">
          <div className="section-shell">
            <div className="section-kicker light">
              <span>06</span> How it works
            </div>
            <div className="section-heading split-heading light">
              <h2>Simple from the first message to launch.</h2>
              <p>A clear process, direct communication, and no hand-offs to an agency team.</p>
            </div>
            <div className="steps">
              {steps.map((step) => (
                <article className="step" key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-shell about-section">
          <div className="section-kicker">
            <span>07</span> About
          </div>
          <div className="about-grid">
            <h2>Who&apos;s behind this</h2>
            <div className="about-copy">
              <p>
                I&apos;m <strong>Yuvraj.</strong> I study local businesses&apos; online presence — I
                find exactly what&apos;s costing them customers and fix it.
              </p>
              <p>
                I take on a small number of projects at a time, so you work with me directly, not an
                agency. I reply to every message within 24 hours, usually faster.
              </p>
              <a href="#contact" className="text-link dark-link">
                Tell me about your business <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="section section-shell faq-section">
          <div className="section-kicker">
            <span>08</span> FAQ
          </div>
          <div className="faq-grid">
            <h2>
              Good questions.
              <br />
              Clear answers.
            </h2>
            <div className="accordion">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>
                    <span>{faq.question}</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="section-shell contact-grid">
            <div className="contact-copy">
              <div className="section-kicker light">
                <span>09</span> Start here
              </div>
              <h2>
                Get your free
                <br />
                <span>3-point audit.</span>
              </h2>
              <p>
                Tell me your website URL and what your business does. Within 24 hours I&apos;ll send
                you 3 specific things costing you customers — free, no strings.
              </p>
              <div className="contact-expect">
                <span>WHAT YOU&apos;LL GET</span>
                <ul>
                  <li>
                    <i>01</i> One trust problem
                  </li>
                  <li>
                    <i>02</i> One clarity problem
                  </li>
                  <li>
                    <i>03</i> One conversion problem
                  </li>
                </ul>
              </div>
            </div>
            <AuditForm selectedPackage={selectedPackage} />
          </div>
        </section>
      </main>

      <footer>
        <div className="section-shell footer-inner">
          <p>© 2026 Yuvraj — Websites for local service businesses.</p>
          <a href={`mailto:${EMAIL}`}>
            {EMAIL} <Arrow />
          </a>
        </div>
      </footer>
    </div>
  );
}
