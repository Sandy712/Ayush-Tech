import React from "react";
import "./Main.css";
import img from "../Landingpage/image/main-vector-removebg-preview.png";
import img2 from "../Landingpage/image/bg-2.jpg";
import img5 from "../Landingpage/image/img-5.jpg";
import Logo from "../navbar/img/main-logo.png";

// import { useSpring, config } from "@react-spring/web";
import { SiMusicbrainz } from "react-icons/si";
import { FaNewspaper } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { IoMdChatbubbles } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Main({ current_user }) {
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
      <header
        className=" py-5"
        style={{ height: "41.6rem", position: "relative" }}
      >
        {/* Background image with low opacity */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // opacity: 0.8, // Adjust opacity as per your requirement
            zIndex: -1, // Ensure the background image stays behind the content
          }}
        ></div>

        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div
                className="my-5 text-center text-xl-start"
                style={{ zIndex: 1 }}
              >
                <h1 className="display-5 fw-bolder text-white mb-2">
                  Ayush Tech
                </h1>
                <h1 className=" display-5 lead fw-normal text-white-50 mb-4">
                  Startup-Investor Connect Platform
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  {current_user === "startup" ? (
                    <Link
                      className="btn  btn-lg px-4 me-sm-3"
                      to="/startup"
                      style={{
                        backgroundColor: "#169bd7",
                      }}
                    >
                      For Investor
                    </Link>
                  ) : (
                    <Link
                      className="btn  btn-lg px-4 me-sm-3"
                      to="/login"
                      style={{
                        backgroundColor: "#169bd7",
                      }}
                    >
                      For Investor
                    </Link>
                  )}
                  {current_user === "investor" ? (
                    <Link
                      className="btn btn-outline-light btn-lg px-4"
                      to="/investor"
                    >
                      For Startup
                    </Link>
                  ) : (
                    <Link
                      className="btn btn-outline-light btn-lg px-4"
                      to="/login"
                    >
                      For Startup
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img
                className="img-fluid rounded-3 my-5"
                src={img}
                style={{ visibility: "hidden" }}
                alt="..."
              />
            </div>
          </div>
        </div>
      </header>

      <div className="mt-4">
        <div className="container p-3 bg-light shadow ">
          <section className="section">
            <div className="row">
              <div className="col">
                <div className=" w-auto">
                  <div className="card-body">
                    <section>
                      <div class="container">
                        <div class="row">
                          <div class="col">
                            <ul>
                              <h2 className="mb-3">
                                Empowering Startups and Investors with AI
                                Matchmaking, Mentorship, and News Updates
                              </h2>

                              <ul>
                                <li>
                                  <strong>
                                    Streamlined Startup-Investor Connections:
                                  </strong>{" "}
                                  Connect startups with potential investors
                                  effortlessly through our platform. Utilizing
                                  email connections, startups can showcase their
                                  innovative ideas directly to interested
                                  investors, fostering valuable partnerships and
                                  funding opportunities. Our platform
                                  facilitates seamless communication, enabling
                                  startups to pitch their visions and investors
                                  to explore promising ventures conveniently.
                                </li>

                                <li>
                                  <strong>
                                    Informative News, Webinars, and Mentorship:
                                  </strong>{" "}
                                  Stay ahead in the startup ecosystem with our
                                  platform offering a plethora of resources.
                                  Access the latest news updates, insightful
                                  webinars, and tailored mentorship programs
                                  designed to support new startups and
                                  investment plans. Whether you're seeking
                                  industry insights, expert guidance, or
                                  networking opportunities, our platform
                                  provides valuable resources to help you thrive
                                  in your entrepreneurial journey.
                                </li>

                                <li>
                                  <strong>
                                    Accessible 24/7 AI Chat Support:
                                  </strong>{" "}
                                  Enhance operational efficiency with our
                                  innovative AI chat support system. Our
                                  healthcare technology solutions offer
                                  round-the-clock AI chat support, providing
                                  immediate assistance to patients and
                                  healthcare professionals. With this feature,
                                  hospitals can streamline communication, reduce
                                  delays, and improve patient care flow.
                                  Additionally, the implementation of AI chat
                                  support alleviates the workload on nursing
                                  staff and other support teams, contributing to
                                  overall operational efficiency.
                                </li>
                              </ul>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>
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
            <div className="col-lg-4 mb-5 mb-lg-0 fade-in-left delay-1s d-none d-lg-block">
              <img
                src={img5}
                alt=""
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "35rem",
                  width: "20rem",
                }}
              />
            </div>
            <div className="col-lg-8">
              <div className="h2">Featured , Who Easy your Tasks!</div>
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
                  <h2 className="h3">AI Filter-Matchmaking</h2>
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
                  <h2 className="h3">News & Resources</h2>
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
                  <h2 className="h3">Community Hub</h2>
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
                  <h2 className="h3">24/7 AI ChatBot support</h2>
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
                  Ayush Tech is a platform facilitating connections between
                  startups and investors while offering extensive support for
                  mentorship and strategic planning. Our commitment lies in
                  fostering innovation and growth, empowering visionaries to
                  transform ideas into impactful realities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 my-5">
        <aside
          className=" bg-gradient rounded-3 d-none d-lg-block p-4 p-sm-5 mt-5"
          style={{ backgroundColor: "#222c65" }}
        >
          <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
            <div className="mb-4 mb-xl-0">
              <div className="fs-3 fw-bold text-white">Newsletter</div>
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
                  className="btn btn-primary btn-outline-light"
                  id="button-newsletter"
                  type="button"
                  style={{
                    borderRadius: "0px",
                  }}
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

      <div
        className="container mt-5 p-3 rounded "
        style={{ backgroundColor: "white" }}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="content-section d-flex justify-content-center d-none d-lg-block align-items-center">
              <img
                src="https://img.freepik.com/free-vector/illustration-diverse-people_53876-28459.jpg?t=st=1710049737~exp=1710053337~hmac=83bdecd005f0cc92b06de904e7e7ea4237effce54fb9b45d8a0d00e1c56db098&w=740"
                className="img-fluid"
                alt="Placeholder"
                style={{ height: "25rem" }}
              />
            </div>
          </div>

          <div className="col-md-6 mt-5">
            <div className="content-section d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-center mb-4 h-3">Go For Community</h1>
              <p className="text-center mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero quis fermentum tristique. Curabitur non
                vestibulum justo.
              </p>
              <Link to="/webs">
                <button className="btn btn-primary">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="content-section d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-center mb-4 h-3">Keep Update With News!</h1>
              <p className="text-center mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero quis fermentum tristique. Curabitur non
                vestibulum justo.
              </p>
              <Link to="/News">
                <button className="btn btn-primary">Learn More</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content-section d-flex d-none d-lg-block justify-content-center align-items-center">
              <img
                src="https://img.freepik.com/free-vector/people-showcasing-different-types-ways-access-news_53876-66059.jpg?t=st=1710050488~exp=1710054088~hmac=0cde77ef57a002aabef77e77d0587a21647b8554bfae085b15b980fe82fadaca&w=900"
                className="img-fluid"
                alt="Placeholder"
                style={{ height: "25rem" }}
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

      <footer className="footer mt-4">
        <div
          className="  py-3 py-md-4 py-xl-5 border-top border-light-subtle"
          style={{ backgroundColor: "#222c65" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-xl-3 mb-3 mb-xl-0">
                <div className="footer-logo-wrapper text-center text-md-start">
                  <a href="#!">
                    <img
                      src={Logo}
                      alt=""
                      className="img-fluid"
                      style={{ height: "4.9rem" }}
                    />
                  </a>
                </div>
              </div>

              <div className="col-md-6 col-xl-6">
                <ul className="nav justify-content-center justify-content-start">
                  <li className="nav-item">
                    <a className="nav-link link-secondary px-2" href="#!">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link link-secondary px-2" href="#!">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link link-secondary px-2" href="#!">
                      Advertise
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link link-secondary px-2" href="#!">
                      Terms
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link link-secondary px-2" href="#!">
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-xl-3">
                <ul className="nav justify-content-center justify-content-md-end">
                  <li className="nav-item">
                    <Link className="nav-link link-dark px-2 text-white" to="/">
                      Link 1
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link-dark px-2 text-white" to="/">
                      Link 2
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link-dark px-2 text-white" to="/">
                      Link 3
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link-dark px-2 text-white" to="/">
                      Link 4
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light py-2 py-md-3 py-xl-4 border-top border-light-subtle">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="footer-copyright-wrapper text-center">
                  &copy; 2024. All Rights Reserved.{" "}
                  <a href="index.html">
                    <span className="text-primary">Ayush-Tech</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
