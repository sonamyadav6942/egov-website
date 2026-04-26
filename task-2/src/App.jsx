import { useEffect } from "react";
import { LatestAtEgov } from "./components/LatestAtEgov.jsx";
import "./App.css";

function Header() {
  useEffect(() => {
    const nav = document.querySelector(".main-nav");
    if (!nav) return undefined;

    let stickyStartY = 0;

    const recalcStickyMetrics = () => {
      const rect = nav.getBoundingClientRect();
      stickyStartY = rect.top + window.scrollY;
      document.body.style.setProperty("--main-nav-fixed-height", `${rect.height}px`);
    };

    const toggleStickyState = () => {
      const shouldStick = window.scrollY >= stickyStartY;
      nav.classList.toggle("is-sticky", shouldStick);
      document.body.classList.toggle("navbar-fixed-active", shouldStick);
    };

    recalcStickyMetrics();
    toggleStickyState();
    window.addEventListener("resize", recalcStickyMetrics);
    window.addEventListener("resize", toggleStickyState);
    window.addEventListener("scroll", toggleStickyState, { passive: true });

    return () => {
      window.removeEventListener("resize", recalcStickyMetrics);
      window.removeEventListener("resize", toggleStickyState);
      window.removeEventListener("scroll", toggleStickyState);
      nav.classList.remove("is-sticky");
      document.body.classList.remove("navbar-fixed-active");
      document.body.style.removeProperty("--main-nav-fixed-height");
    };
  }, []);

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container container--header py-1 py-md-2">
          <div className="d-flex align-items-center justify-content-end gap-3 flex-wrap top-bar__inner">
            <span className="text-decoration-none top-bar__link static-proto">Events</span>
            <span className="text-decoration-none top-bar__link static-proto">Contact us</span>
            <span className="d-inline-flex align-items-center gap-1 top-bar__lang static-proto">
              <img
                className="top-bar__flag"
                src="https://flagcdn.com/w20/gb.png"
                width="18"
                height="12"
                alt=""
              />
              <span className="top-bar__lang-text">ENG</span>
              <span className="top-bar__lang-chevron" aria-hidden="true">
                ▾
              </span>
            </span>
          </div>
        </div>
      </div>
      <nav className="navbar main-nav navbar-expand-lg" aria-label="Main">
        <div className="container container--header d-flex flex-wrap align-items-center position-relative">
          <div className="navbar-brand d-flex align-items-center gap-0 py-0 me-2 flex-shrink-0">
            <div className="brand-eGov d-flex align-items-start">
              <span className="brand-e-glyph" aria-hidden="true">
                <span className="brand-e-inner">e</span>
              </span>
              <span className="brand-text d-flex flex-column text-start">
                <span className="brand-gov">GOV</span>
                <span className="brand-foundation">FOUNDATION</span>
              </span>
            </div>
          </div>
          <button
            className="navbar-toggler d-lg-none ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse main-nav__collapse flex-grow-1" id="mainNav">
            <div className="d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-lg-end gap-2 w-100 my-3 my-lg-0 main-nav__cluster">
              <ul className="navbar-nav main-nav__links d-lg-flex flex-lg-row flex-lg-nowrap my-0 text-center text-lg-start align-items-lg-center justify-content-lg-end flex-wrap">
                <li className="nav-item main-nav__item">
                  <span className="nav-link main-nav__link d-inline-flex static-proto">
                    About Us <span className="nav-chevron">▾</span>
                  </span>
                </li>
                <li className="nav-item main-nav__item">
                  <span className="nav-link main-nav__link d-inline-flex static-proto">
                    Areas of work <span className="nav-chevron">▾</span>
                  </span>
                </li>
                <li className="nav-item main-nav__item">
                  <span className="nav-link main-nav__link d-inline-flex static-proto">
                    Products &amp; Solutions <span className="nav-chevron">▾</span>
                  </span>
                </li>
                <li className="nav-item main-nav__item">
                  <span className="nav-link main-nav__link d-inline-flex static-proto">
                    Our Platform <span className="nav-chevron">▾</span>
                  </span>
                </li>
                <li className="nav-item main-nav__item">
                  <span className="nav-link main-nav__link d-inline-flex static-proto">
                    Ecosystem <span className="nav-chevron">▾</span>
                  </span>
                </li>
                <li className="nav-item main-nav__item">
                  <span className="nav-link main-nav__link d-inline-flex static-proto">
                    Resources <span className="nav-chevron">▾</span>
                  </span>
                </li>
              </ul>
              <div className="main-nav__actions d-flex align-items-center justify-content-center justify-content-lg-end my-2 my-lg-0 flex-shrink-0">
                <button type="button" className="btn p-0 search-btn" aria-label="Search" title="Search">
                  <svg
                    className="search-ico"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M16.2 16.2 21 21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero position-relative" id="hero" aria-label="Welcome">
      <div className="hero__wave" aria-hidden="true" />
      <div className="hero__wave hero__wave--bottom" aria-hidden="true" />
      <div className="container container--header position-relative z-1 py-5 py-lg-6">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6 order-1 order-lg-1">
            <h1 className="hero-title mb-2">
              <span className="hero-title__line1">
                <span className="hero-title__line1-row">20 years of digital transformation in</span>
                <span className="hero-title__line1-row">public service delivery</span>
              </span>
              <span className="hero-title__line2">It&apos;s possible.</span>
            </h1>
            <p className="hero-lead mb-4">
              Catalysts. Ecosystem enablers. Problem Solvers. At eGov, we&apos;re driven by the power of open
              digital infrastructure and ecosystems to enable governments deliver accessible, inclusive and
              transparent services to every citizen.
            </p>
            <div className="d-flex flex-wrap gap-2 gap-sm-3 align-items-center">
              <span className="btn btn-egov-teal btn-lg px-4 py-2 rounded-pill static-proto">Our Approach</span>
              <span className="btn btn-outline-egov btn-lg rounded-pill px-4 static-proto">Our Impact</span>
            </div>
          </div>
          <div className="col-lg-6 order-2 order-lg-2 text-center text-lg-end">
            <div className="hero-img-wrap d-inline-block" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats py-5 py-lg-6" aria-label="Key figures">
      <div className="container">
        <div className="stats__top">
          <p className="stats__big mb-0">1,000,000,100+</p>
          <p className="stats__line mb-0">
            Citizens availing public services through eGov&apos;s <br />
            Digital Public Goods (DPG)
          </p>
        </div>
        <div className="row justify-content-center text-white g-4 stats__metrics">
          <div className="col-md-4 text-center">
            <p className="h1 mb-1 fw-normal">1.1 Billion+</p>
            <p className="mb-0">Public services delivered</p>
          </div>
          <div className="col-md-4 text-center">
            <p className="h1 mb-1 fw-normal">50+ partners</p>
            <p className="mb-0">From technology, governments and NGOs</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-5 py-lg-6 approaches-section" id="features" aria-labelledby="features-title">
      <span id="stats" className="visually-hidden" aria-hidden="true" />
      <div className="container">
        <div className="approaches-shell">
          <div className="row g-4 g-xl-5 align-items-start">
            <div className="col-lg-4">
              <h2 id="features-title" className="approaches-title">
                <span className="approaches-title__line1">Big problems need</span>
                <span className="approaches-title__line2">bold approaches</span>
              </h2>
              <p className="approaches-sub mb-4">Pick a program area. Statistics and resources update for each path.</p>
              <div className="list-group feature-pills approaches-pill-wrap" id="feature-tabs" role="tablist" aria-label="Program areas">
                <button
                  type="button"
                  className="list-group-item list-group-item-action active feature-pill"
                  id="tab-health-btn"
                  data-bs-toggle="list"
                  data-bs-target="#tab-health"
                  role="tab"
                  aria-controls="tab-health"
                  aria-selected="true"
                >
                  Public Health
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action feature-pill feature-pill--ghost"
                  id="tab-finance-btn"
                  data-bs-toggle="list"
                  data-bs-target="#tab-finance"
                  role="tab"
                  aria-controls="tab-finance"
                  aria-selected="false"
                >
                  Public Finance
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action feature-pill feature-pill--ghost"
                  id="tab-governance-btn"
                  data-bs-toggle="list"
                  data-bs-target="#tab-governance"
                  role="tab"
                  aria-controls="tab-governance"
                  aria-selected="false"
                >
                  Local Governance
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action feature-pill feature-pill--ghost"
                  id="tab-water-btn"
                  data-bs-toggle="list"
                  data-bs-target="#tab-water"
                  role="tab"
                  aria-controls="tab-water"
                  aria-selected="false"
                >
                  Water &amp; Sanitation
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-health" role="tabpanel" aria-labelledby="tab-health-btn">
                  <div className="row g-4 approach-cards align-items-stretch">
                    <div className="col-md-6 d-flex">
                      <article className="impact-slab impact-slab--soft w-100">
                        <div className="impact-slab__head">
                          <p className="impact-slab__stat--blue">210+</p>
                          <p className="impact-slab__desc">cities LIVE with 10BedICU across India</p>
                          <span className="impact-slab__btn impact-slab__btn--static">Read More</span>
                        </div>
                        <div className="impact-slab__foot--soft">
                          <span className="impact-slab__mega--soft">10BedICU</span>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-6 d-flex">
                      <article className="impact-slab impact-slab--blue w-100 text-white">
                        <div className="impact-slab__head">
                          <p className="impact-slab__stat--white">2 Bn</p>
                          <p className="impact-slab__desc">COVID-19 vaccination certificates issued</p>
                          <span className="impact-slab__btn impact-slab__btn--static">Read More</span>
                        </div>
                        <div className="impact-slab__foot--blue">
                          <span className="impact-slab__mega--white">Vaccination</span>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-finance" role="tabpanel" aria-labelledby="tab-finance-btn">
                  <div className="row g-4 approach-cards align-items-stretch">
                    <div className="col-md-6 d-flex">
                      <article className="impact-slab impact-slab--soft w-100">
                        <div className="impact-slab__head">
                          <p className="impact-slab__stat--blue">5000+</p>
                          <p className="impact-slab__desc">
                            rural local bodies managing revenue &amp; expenditure on Water Supply O&amp;M System
                          </p>
                          <span className="impact-slab__btn impact-slab__btn--static">Read More</span>
                        </div>
                        <div className="impact-slab__foot--soft">
                          <span className="impact-slab__mega--soft">O&amp;M</span>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-6 d-flex">
                      <article className="impact-slab impact-slab--blue w-100 text-white">
                        <div className="impact-slab__head">
                          <p className="impact-slab__stat--white">4000+</p>
                          <p className="impact-slab__desc">
                            empowered women Self Help Groups through Social Benefits Delivery System
                          </p>
                          <span className="impact-slab__btn impact-slab__btn--static">Read More</span>
                        </div>
                        <div className="impact-slab__foot--blue">
                          <span className="impact-slab__mega--white">SHG</span>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-governance" role="tabpanel" aria-labelledby="tab-governance-btn">
                  <div className="row g-4 approach-cards approach-cards--mosaic align-items-stretch">
                    <div className="col-md-6 d-flex">
                      <article className="impact-slab impact-slab--soft impact-slab--tall w-100">
                        <div className="impact-slab__head">
                          <p className="impact-slab__stat--blue">70%</p>
                          <p className="impact-slab__desc">improved quality of life with implementations in Punjab, India</p>
                          <span className="impact-slab__btn impact-slab__btn--static">Read More</span>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex flex-column gap-3 h-100">
                        <article className="impact-slab impact-slab--soft-alt impact-slab--compact w-100">
                          <div className="impact-slab__head">
                            <p className="impact-slab__stat--blue">250%</p>
                            <p className="impact-slab__desc">
                              increase in revenue mobilisation in Andhra Pradesh using the DIGIT Platform
                            </p>
                            <span className="impact-slab__btn impact-slab__btn--static">Read More</span>
                          </div>
                        </article>
                        <article className="impact-slab impact-slab--blue impact-slab--compact w-100 text-white">
                          <div className="impact-slab__head">
                            <p className="impact-slab__stat--white">UPYOG</p>
                            <p className="impact-slab__desc">National Urban Governance Platform LIVE in India for all states.</p>
                            <span className="impact-slab__btn impact-slab__btn--static">Read More</span>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-water" role="tabpanel" aria-labelledby="tab-water-btn">
                  <div className="row g-4 approach-cards align-items-stretch">
                    <div className="col-md-6 d-flex">
                      <article className="impact-slab impact-slab--soft w-100">
                        <div className="impact-slab__head">
                          <p className="impact-slab__stat--blue">148Mn</p>
                          <p className="impact-slab__desc">
                            households with access to drinking water on tap, maintained on systems powered by the DIGIT platform
                          </p>
                          <span className="impact-slab__btn impact-slab__btn--static">Read More</span>
                        </div>
                        <div className="impact-slab__foot--soft">
                          <span className="impact-slab__mega--soft">Households</span>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-6 d-flex">
                      <article className="impact-slab impact-slab--blue w-100 text-white">
                        <div className="impact-slab__head">
                          <p className="impact-slab__stat--white">DPI</p>
                          <p className="impact-slab__desc">for Sanitation: a reimagined approach led by DPI thinking</p>
                          <span className="impact-slab__btn impact-slab__btn--static">Read More</span>
                        </div>
                        <div className="impact-slab__foot--blue">
                          <span className="impact-slab__mega--white">Sanitation</span>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="digit-section text-white py-5 py-lg-6" id="cta" aria-labelledby="digit-title">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="digit-brand" aria-label="DIGIT by eGov Foundation">
              <span className="digit-brand__icon" aria-hidden="true">
                <span className="digit-brand__dot digit-brand__dot--blue" />
                <span className="digit-brand__dot digit-brand__dot--yellow" />
                <span className="digit-brand__dot digit-brand__dot--teal" />
                <span className="digit-brand__dot digit-brand__dot--teal" />
                <span className="digit-brand__dot digit-brand__dot--blue" />
                <span className="digit-brand__dot digit-brand__dot--teal" />
              </span>
              <span className="digit-brand__text-wrap">
                <span className="digit-brand__name">DIGIT</span>
                <span className="digit-brand__by">by eGov Foundation</span>
              </span>
            </div>
            <h2 id="digit-title" className="digit-title">
              <span className="digit-title__line">Our open source</span>
              <span className="digit-title__line">
                <span className="digit-title__em">technology-for-good</span> platform
              </span>
            </h2>
            <p className="digit-lead">
              DIGIT, short for Digital Infrastructure for Governance, Inclusion and Transformation is
              eGov&apos;s open-source platform with reusable building blocks and shared data registries that can be
              used to build solutions in multiple sectors.
            </p>
            <span className="btn btn-lg btn-white-pill static-proto">Explore the platform</span>
          </div>
          <div className="col-lg-6 text-center order-lg-2 order-1">
            <img
              className="img-fluid cta-img digit-section__img"
              src="https://placehold.co/600x420/0d3a5c/94a3b8/png?text=Platform"
              width={600}
              height={420}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer-wf mt-auto">
      <div className="footer-upper-wf">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand-wf mb-3">
                <span className="footer-brand-wf__e">e</span>
                <span className="footer-brand-wf__gov">GOV</span>
                <span className="footer-brand-wf__found d-block">FOUNDATION</span>
              </div>
              <p className="footer-tagline-wf">
                Catalysing digital transformation in public service delivery at speed &amp; scale.
              </p>
              <ul className="footer-social-wf list-unstyled mb-0" aria-label="Social">
                <li>
                  <span className="footer-social-wf__link static-proto" role="img" aria-label="Facebook">
                    <i className="bi bi-facebook footer-social-wf__icon footer-social-wf__icon--fb" aria-hidden="true" />
                  </span>
                </li>
                <li>
                  <span className="footer-social-wf__link static-proto" role="img" aria-label="X">
                    <i className="bi bi-twitter-x footer-social-wf__icon footer-social-wf__icon--x" aria-hidden="true" />
                  </span>
                </li>
                <li>
                  <span className="footer-social-wf__link static-proto" role="img" aria-label="LinkedIn">
                    <i className="bi bi-linkedin footer-social-wf__icon footer-social-wf__icon--in" aria-hidden="true" />
                  </span>
                </li>
                <li>
                  <span className="footer-social-wf__link static-proto" role="img" aria-label="YouTube">
                    <i className="bi bi-youtube footer-social-wf__icon footer-social-wf__icon--yt" aria-hidden="true" />
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3 className="footer-heading-wf">Useful links</h3>
              <div className="row useful-links-wf g-0">
                <div className="col-6 pe-2">
                  <ul className="list-unstyled useful-links-wf__list">
                    <li>
                      <span className="useful-links-wf__a static-proto">Home</span>
                    </li>
                    <li>
                      <span className="useful-links-wf__a static-proto">Our Impact</span>
                    </li>
                    <li>
                      <span className="useful-links-wf__a static-proto">DIGIT Sandbox</span>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled useful-links-wf__list">
                    <li>
                      <span className="useful-links-wf__a static-proto">Our People</span>
                    </li>
                    <li>
                      <span className="useful-links-wf__a static-proto">Financials</span>
                    </li>
                    <li>
                      <span className="useful-links-wf__a static-proto">Contact Us</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <h3 className="footer-heading-wf">Subscribe now</h3>
              <p className="footer-subscribe-wf__intro mb-2">
                Receive regular updates of our monthly newsletter DOT &ndash; in your inbox.
              </p>
              <form className="footer-subscribe-wf" noValidate>
                <label className="visually-hidden" htmlFor="sub-email">
                  Email
                </label>
                <div className="footer-subscribe-wf__field">
                  <input
                    id="sub-email"
                    name="your-email"
                    type="email"
                    className="footer-subscribe-wf__input"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                    inputMode="email"
                  />
                  <button className="footer-subscribe-wf__btn" type="button" aria-label="Submit subscription" title="Subscribe">
                    <svg
                      className="footer-subscribe-wf__envelope"
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="0.5" y="1" width="19" height="14" rx="1" stroke="currentColor" strokeWidth="1.1" />
                      <path
                        d="M1.5 2.5L9.2 7.1c.5.3 1.1.3 1.6 0L18.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-lower-wf">
        <div className="container footer-lower-wf__row d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 py-3">
          <p className="footer-lower-wf__copy mb-0">©2026. eGov. All Rights Reserved.</p>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-end gap-2 gap-md-3">
            <span className="footer-lower-wf__link static-proto">Privacy Policy</span>
            <span className="footer-lower-wf__link static-proto">Terms and Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Cta />
        <LatestAtEgov />
      </main>
      <Footer />
    </>
  );
}
