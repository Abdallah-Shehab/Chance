import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthContext from "../context/AuthContext";
import Footer from "../components/Footer";
import { useContext } from "react";
const HomePage = () => {
  const defaultTheme = createTheme();
  let { user } = useContext(AuthContext);
  console.log(user.full_name);
  return (
    // <Container component="main" maxWidth="xs">
    <>
      <CssBaseline />
      <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <div className="text-center my-5">
                <h1 className="display-5 fw-bolder text-white mb-2">
                  With us, we help you achieve your dream of the right job
                </h1>
                <p className="lead text-white-50 mb-4">
                  “We have all the branches in the programming like web
                  development and mobile appilcation and artificial intelligence
                  and data analysis.”
                </p>
                <p className="lead text-white-50 mb-4">
                  “I promise you that uou will find the suitable jop.”
                </p>
                <br />
                <br />
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                  <a
                    className="btn btn-primary btn-lg px-4 me-sm-3"
                    href="/jobs"
                  >
                    Get Started
                  </a>
                  <a
                    className="btn btn-outline-light btn-lg px-4"
                    href="/about"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>{" "}
      <section className="py-5 border-bottom" id="next">
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">
              We have all branches in the programing as you like
            </h2>
            <p className="lead mb-0">We overview simple about this jops...</p>
          </div>
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div
                className="feature bg-primary bg-gradient text-white rounded-3 mb-3"
                style={{ width: "15%", padding: "15px" }}
              >
                <i className="fa-solid fa-blog"></i>
              </div>
              <h2 className="h4 fw-bolder">Wep Developer</h2>
              <p>
                What is meant by web development? Image result for what is the
                web development Web development is the building and maintenance
                of websites; it's the work that happens behind the scenes to
                make a website look great, work fast and perform well with a
                seamless user experience. Web developers, or 'devs', do this by
                using a variety of coding languages.
              </p>
              <br />
              <a className="text-decoration-none" href="./Jobs">
                Go to see more
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div
                className="feature bg-primary bg-gradient text-white rounded-3 mb-3"
                style={{ width: "15%", padding: "15px" }}
              >
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>
              <h2 className="h4 fw-bolder">Mobile Application</h2>
              <p>
                Mobile application development is the process of creating
                software applications that run on a mobile device, and a typical
                mobile application utilizes a network connection to work with
                remote computing resources.
              </p>
              <a
                className="text-decoration-none"
                href="{% url 'jops:jop_list' %}"
              >
                <br />
                Go to see more
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="col-lg-4">
              <div
                className="feature bg-primary bg-gradient text-white rounded-3 mb-3"
                style={{ width: "15%", padding: "15px" }}
              >
                <i className="fa-solid fa-robot"></i>
              </div>
              <h2 className="h4 fw-bolder">Artificial Intelligence (AI)</h2>
              <p>
                AI Engineering is a field of research and practice that combines
                the principles of systems engineering, software engineering,
                computer science, and human-centered design to create AI systems
                in accordance with human needs for mission outcomes.
              </p>
              <a
                className="text-decoration-none"
                href="{% url 'jops:jop_list' %}"
              >
                <br />
                Go to see more
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ########################################### */}
      <section className="bg-light py-5 border-bottom">
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">The Goals From This Application</h2>
            <p className="lead mb-0">We view th goals of this application...</p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6 col-xl-4">
              <div className="card mb-5 mb-xl-0 anyhover">
                <div className="card-body p-5">
                  <div className="small text-uppercase fw-bold">
                    <i className="bi bi-star-fill text-warning"></i> Ease of use
                  </div>
                  <br />
                  <p>
                    Ease of use is a basic concept that describes how easily
                    users can use a product. Design teams define specific
                    metrics per project—e.g., “Users must be able to tap Find
                    within 3 seconds...
                  </p>
                  <div id="readmore1" className="collapse">
                    {" "}
                    of accessing the interface.” —and aim to optimize ease of
                    use while offering maximum functionality and respecting
                    business limitations.
                  </div>
                  <br />
                  <button
                    className="btn btn-outline-success"
                    data-bs-toggle="collapse"
                    data-bs-target="#readmore1"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="card mb-5 mb-xl-0 anyhover">
                <div className="card-body p-5">
                  <div className="small text-uppercase fw-bold">
                    <i className="bi bi-star-fill text-warning"></i> Performance
                  </div>
                  <br />
                  <p>
                    Application performance indicates how the app is functioning
                    and how responsive the app is to the end-user There are
                    tools available to measure Application Performance and
                    enable...
                  </p>
                  <div id="readmore2" className="collapse">
                    {" "}
                    app developers to detect and diagnose complex application
                    performance problems to maintain the expected level of
                    service to end-users.
                  </div>
                  <br />
                  <button
                    className="btn btn-outline-success"
                    data-bs-toggle="collapse"
                    data-bs-target="#readmore2"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="card anyhover">
                <div className="card-body p-5">
                  <div className="small text-uppercase fw-bold">
                    {" "}
                    <i className="bi bi-star-fill text-warning"></i> Efficiency
                  </div>
                  <br />
                  <p>
                    For many professionals, having the option to work from home
                    has brought significant benefits, like cutting commuting
                    costs or working in a more comfortable setting...
                  </p>
                  <div id="readmore3" className="collapse">
                    However, it can be even easier to lose time at work when
                    sharing that space with responsibilities in the home,
                    whether it’s the laundry sitting in the corner of the room,
                    the kids’ homework or the dog needing to go outside.
                  </div>
                  <br />
                  <button
                    className="btn btn-outline-success"
                    data-bs-toggle="collapse"
                    data-bs-target="#readmore3"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ################################ */}
      {/* <section className="bg-light py-2 border-bottom">
        <div className="container px-5 my-5">
          <h2 className="text-center p-3">Our Clients</h2>
          <section className="partners-logo slider">
            <div className="slide">
              <img
                src="{% static 'img/slick/logo1.jpeg' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div className="slide">
              <img
                src="{% static 'img/slick/logo3.jpeg' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div className="slide">
              <img
                src="{% static 'img/slick/logo9.png' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div className="slide">
              <img
                src="{% static 'img/slick/logo8.png' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div className="slide">
              <img
                src="{% static 'img/slick/logo4.png' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div className="slide">
              <img
                src="{% static 'img/slick/logo5.png' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div className="slide">
              <img
                src="{% static 'img/slick/logo2.png' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div className="slide">
              <img
                src="{% static 'img/slick/logo7.png' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div className="slide">
              <img
                src="{% static 'img/slick/logo6.jpeg' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div className="slide">
              <img
                src="{% static 'img/slick/logo3.jpeg' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
          </section>
        </div>
      </section> */}
      {/* ################################ */}
      <Footer />
    </>

    // </Container>
  );
};

export default HomePage;
