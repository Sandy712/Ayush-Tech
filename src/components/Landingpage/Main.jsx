import React from "react";
import "./Main.css";
import img from "../Landingpage/image/main-vector-removebg-preview.png";
import { useSpring, animated,config} from '@react-spring/web';


export default function Main() {
  const imageSpring = useSpring({
    from: { transform: 'translateY(0px) scale(1)' },
    to: async next => {
      while (true) {
        await next({ transform: 'translateY(-17px) scale(1.05)' });
        await next({ transform: 'translateY(0px) scale(1)' });
      }
    },
    config: { tension: 3, friction: 0, easing: config.easeInOutCubic },
  });

  return (
    <>
      <header class="bg-dark py-5">
        <div class="container px-5">
          <div class="row gx-5 align-items-center justify-content-center">
            <div class="col-lg-8 col-xl-7 col-xxl-6">
              <div class="my-5 text-center text-xl-start">
                <h1 class="display-5 fw-bolder text-white mb-2">
                  Ayush Bharat
                </h1>
                <h1 class=" display-5 lead fw-normal text-white-50 mb-4">
                  Startup India Platform
                </h1>
                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    class="btn btn-primary btn-lg px-4 me-sm-3"
                    href="#features"
                  >
                    For Investor
                  </a>
                  <a class="btn btn-outline-light btn-lg px-4" href="#!">
                    For Startup
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img class="img-fluid rounded-3 my-5" src={img} alt="..." />
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col">
              <div className=" w-auto">
                <div className="card-body">
                  <h5 className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi aliquam atque provident, harum quae totam illum ad
                    natus, delectus quis voluptatibus ducimus labore, doloribus
                    qui sint non fugit facilis itaque libero autem nesciunt.
                    Asperiores recusandae impedit soluta non minima maiores.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section class="py-5" id="features">
        <div class="container px-5 my-5">
          <div class="row gx-5">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h2 class="fw-bolder mb-0">Ayush Portal</h2>
            </div>
            <br />
            <div>
              <h5>Features Text to be added</h5>
            </div>
            <div class="col-lg-8">
              <div class="row gx-5 row-cols-1 row-cols-md-2">
                <div class="col mb-5 h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-collection"></i>
                  </div>
                  <h2 class="h5">Text to be added</h2>
                  <p class="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div class="col mb-5 h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-building"></i>
                  </div>
                  <h2 class="h5">Text to be added</h2>
                  <p class="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div class="col mb-5 mb-md-0 h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-toggles2"></i>
                  </div>
                  <h2 class="h5">Text to be added</h2>
                  <p class="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div class="col h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-toggles2"></i>
                  </div>
                  <h2 class="h5">Text to be added</h2>
                  <p class="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="facts" class="wow fadeInUp">
        <div class="container">
          <header class="section-header">
            <h3>Facts</h3>
          </header>

          <div class="row counters">
            <div class="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">274</span>
              <p>Clients</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">421</span>
              <p>Projects</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">1,345</span>
              <p>Hours Of Support</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">18</span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-4">
                Get started on your Startup / Investor journey - the right way!
              </h1>
              <div className="mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5">
        <div class="container px-5 my-5">
          <div class="row gx-5 justify-content-center">
             
          </div>
          <div className="container">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x350/ced4da/6c757d"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      News
                    </div>
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 className="card-title mb-3">Blog post title</h5>
                    </a>
                    <p className="card-text mb-0">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle me-3"
                          src="https://dummyimage.com/40x40/ced4da/6c757d"
                          alt="..."
                        />
                        <div className="small">
                          <div className="fw-bold">Kelly Rowan</div>
                          <div className="text-muted">
                            March 12, 2023 &middot; 6 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x350/adb5bd/495057"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      Media
                    </div>
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 className="card-title mb-3">
                        Another blog post title
                      </h5>
                    </a>
                    <p className="card-text mb-0">
                      This text is a bit longer to illustrate the adaptive
                      height of each card. Some quick example text to build on
                      the card title and make up the bulk of the card's content.
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle me-3"
                          src="https://dummyimage.com/40x40/ced4da/6c757d"
                          alt="..."
                        />
                        <div className="small">
                          <div className="fw-bold">Josiah Barclay</div>
                          <div className="text-muted">
                            March 23, 2023 &middot; 4 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside class="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
            <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
              <div class="mb-4 mb-xl-0">
                <div class="fs-3 fw-bold text-white">
                  New products, delivered to you.
                </div>
                <div class="text-white-50">
                  Sign up for our newsletter for the latest updates.
                </div>
              </div>
              <div class="ms-xl-4">
                <div class="input-group mb-2">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Email address..."
                    aria-label="Email address..."
                    aria-describedby="button-newsletter"
                  />
                  <button
                    class="btn btn-outline-light"
                    id="button-newsletter"
                    type="button"
                  >
                    Sign up
                  </button>
                </div>
                <div class="small text-white-50">
                  We care about privacy, and will never share your data.
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <a href="https://investorconnect.startupindia.gov.in" className="d-inline-block mb-4">
              <img
                src="https://investorconnect.startupindia.gov.in/wp-content/uploads/InvestorConnectLogoSVGSmall.svg"
                alt="Investor Connect"
                className="img-fluid"
                width="150"
              />
            </a>
            <p className="text-muted">Investor Connect is a platform that connects startups with investors.</p>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="https://investorconnect.startupindia.gov.in/privacy-policy/" className="text-muted">Privacy Policy</a></li>
              <li><a href="https://investorconnect.startupindia.gov.in/terms-of-use/" className="text-muted">Terms of Use</a></li>
              <li><a href="https://investorconnect.startupindia.gov.in/grievance/" className="text-muted">Grievance</a></li>
              <li><a href="https://investorconnect.startupindia.gov.in/faqs/" className="text-muted">FAQs</a></li>
              <li><a href="https://investorconnect.startupindia.gov.in/contact-us/" className="text-muted">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <img
              src="https://investorconnect.startupindia.gov.in/wp-content/uploads/Powered-by-Sidbi_Footer-150x39.png"
              alt="Powered by SIDBI"
              className="img-fluid mb-3"
              width="150"
            />
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-3">
                <a href="https://www.facebook.com/SIDBIOfficial/" target="_blank" className="text-muted">
                  <i className="fab fa-facebook-square fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/sidbiofficial?ref_src=twsrc%5Etfw" target="_blank" className="text-muted">
                  <i className="fab fa-twitter-square fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
