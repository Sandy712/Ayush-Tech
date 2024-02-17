import React from "react";
import "./Main.css";
import img from "../Landingpage/image/main-vector-removebg-preview.png";
import { useSpring, config } from "@react-spring/web";
import { SiMusicbrainz } from "react-icons/si";
import { FaNewspaper } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { IoMdChatbubbles } from "react-icons/io";

export default function Main() {
  // const imageSpring = useSpring({
  //   from: { transform: 'translateY(0px) scale(1)' },
  //   to: async next => {
  //     while (true) {
  //       await next({ transform: 'translateY(-17px) scale(1.05)' });
  //       await next({ transform: 'translateY(0px) scale(1)' });
  //     }
  //   },
  //   config: { tension: 3, friction: 0, easing: config.easeInOutCubic },
  // });

  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">
                  Ayush Bharat
                </h1>
                <h1 className=" display-5 lead fw-normal text-white-50 mb-4">
                  Startup India Platform
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    className="btn btn-primary btn-lg px-4 me-sm-3"
                    href="#features"
                  >
                    For Investor
                  </a>
                  <a className="btn btn-outline-light btn-lg px-4" href="#!">
                    For Startup
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img className="img-fluid rounded-3 my-5" src={img} alt="..." />
            </div>
          </div>
        </div>
      </header>

      <div style={{ backgroundColor: "#97da79" }}>
        <div className="container">
          <section className="section">
            <div className="row">
              <div className="col">
                <div className=" w-auto">
                  <div className="card-body text-center">
                    <h5 className="card-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi aliquam atque provident, harum quae totam illum
                      ad natus, delectus quis voluptatibus ducimus labore,
                      doloribus qui sint non fugit facilis itaque libero autem
                      nesciunt. Asperiores recusandae impedit soluta non minima
                      maiores.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="py-5" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="fw-bolder mb-0">Our objectives are as follows</h2>
            </div>
            <div className="col-lg-8">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <div className="col mb-5 h-100">
                  <div
                    className="feature  text-dark rounded-3 mb-3"
                    style={{ fontSize: "3.5rem" }}
                  >
                    <i>
                      <SiMusicbrainz />
                    </i>
                  </div>
                  <h2 className="h5">Featured title</h2>
                  <p className="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div className="col mb-5 h-100">
                  <div
                    className="feature  text-dark rounded-3 mb-3"
                    style={{ fontSize: "3.5rem" }}
                  >
                    <i>
                      <FaNewspaper />
                    </i>
                  </div>
                  <h2 className="h5">Featured title</h2>
                  <p className="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div className="col mb-5 h-100">
                  <div
                    className="feature  text-dark rounded-3 mb-3"
                    style={{ fontSize: "3.5rem" }}
                  >
                    <i>
                      <HiUserGroup />
                    </i>
                  </div>
                  <h2 className="h5">Featured title</h2>
                  <p className="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div className="col mb-5 h-100">
                  <div
                    className="feature  text-dark rounded-3 mb-3"
                    style={{ fontSize: "3.5rem" }}
                  >
                    <i>
                      {" "}
                      <IoMdChatbubbles />
                    </i>
                  </div>
                  <h2 className="h5">Featured title</h2>
                  <p className="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-5 bg-light">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-10 col-xl-7">
              <h1 className="text-center">Ayush Tech</h1>
              <div className="text-center">
                <div className="fs-4 mb-4 fst-italic">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus, laboriosam. Nihil quo laboriosam nostrum
                  reprehenderit beatae facere tempore odit pariatur!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 my-5">
        <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
          <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
            <div className="mb-4 mb-xl-0">
              <div className="fs-3 fw-bold text-white">
                Newsletter
              </div>
              <div className="text-white-50">
                Sign up for our newsletter for the latest updates.
              </div>
            </div>
            <div className="ms-xl-4">
              <div className="input-group mb-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email address..."
                  aria-label="Email address..."
                  aria-describedby="button-newsletter"
                />
                <button
                  className="btn btn-outline-light"
                  id="button-newsletter"
                  type="button"
                >
                  Sbscribe
                </button>
              </div>
              <div className="small text-white-50">
                We care about privacy, and will never share your data.
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="content-section d-flex justify-content-center align-items-center">
              <img
                src="https://img.freepik.com/free-vector/startup-managers-presenting-analyzing-sales-growth-chart-group-workers-with-heap-cash-rocket-bar-diagrams-with-arrow-heap-money_74855-14166.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707523200&semt=sph"
                className="img-fluid"
                alt="Placeholder Image"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="content-section d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-center mb-4" >Go for the Startup</h1>
              <p className="text-center mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero quis fermentum tristique. Curabitur non
                vestibulum justo.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">

          <div className="col-md-6">
            <div className="content-section d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-center mb-4">Go for the Inverstor</h1>
              <p className="text-center mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero quis fermentum tristique. Curabitur non
                vestibulum justo.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content-section d-flex justify-content-center align-items-center">
              <img
                src="https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707350400&semt=sph"
                className="img-fluid"
                alt="Placeholder Image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center"></div>
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
        </div>
      </section> */}

 <footer className="footer">

   <div className="bg-light py-3 py-md-5 py-xl-8 border-top border-light-subtle">
    <div className="container overflow-hidden">
      <div className="row gy-3 gy-md-5 gy-xl-0 align-items-sm-center">
        <div className="col-xs-12 col-sm-6 col-xl-3 order-0 order-xl-0">
          <div className="footer-logo-wrapper text-center text-sm-start">
            <a href="#!">
              <h1>Ayush Logo</h1> 
            </a>
          </div>
        </div>

        <div className="col-xs-12 col-xl-6 order-2 order-xl-1">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link link-secondary px-2 px-md-3" href="#!">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary px-2 px-md-3" href="#!">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary px-2 px-md-3" href="#!">Advertise</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary px-2 px-md-3" href="#!">Terms</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary px-2 px-md-3" href="#!">Privacy</a>
            </li>
          </ul>
        </div>

        <div className="col-xs-12 col-sm-6 col-xl-3 order-1 order-xl-2">
          <ul className="nav justify-content-center justify-content-sm-end">
            <li className="nav-item">
              <a className="nav-link link-dark px-3" href="#!">
                 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-dark px-3" href="#!">
                 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-dark px-3" href="#!">
                 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-dark px-3" href="#!">
                 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

   <div className="bg-light py-3 py-md-5 border-top border-light-subtle">
    <div className="container overflow-hidden">
      <div className="row">
        <div className="col">
          <div className="footer-copyright-wrapper text-center">
            &copy; 2024. All Rights Reserved. <a href="index.html"><span className="text-primary">Ayush-Tech</span></a> 
          </div>
           
        </div>
      </div>
    </div>
  </div>

</footer>

    </>
  );
}
