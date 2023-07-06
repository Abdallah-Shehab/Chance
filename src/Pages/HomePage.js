import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";
const HomePage = () => {
  const defaultTheme = createTheme();

  return (
    // <Container component="main" maxWidth="xs">
    <>
      <CssBaseline />
      <header class="bg-dark py-5">
        <div class="container px-5">
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-6">
              <div class="text-center my-5">
                <h1 class="display-5 fw-bolder text-white mb-2">
                  With us, we help you achieve your dream of the right job
                </h1>
                <p class="lead text-white-50 mb-4">
                  “We have all the branches in the programming like web
                  development and mobile appilcation and artificial intelligence
                  and data analysis.”
                </p>
                <p class="lead text-white-50 mb-4">
                  “I promise you that uou will find the suitable jop.”
                </p>
                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                  <a
                    class="btn btn-primary btn-lg px-4 me-sm-3"
                    href="{% url 'jops:jop_list' %}"
                  >
                    Get Started
                  </a>
                  <a class="btn btn-outline-light btn-lg px-4" href="#next">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>{" "}
      <section class="py-5 border-bottom" id="next">
        <div class="container px-5 my-5">
          <div class="text-center mb-5">
            <h2 class="fw-bolder">
              We have all branches in the programing as you like
            </h2>
            <p class="lead mb-0">We overview simple about this jops...</p>
          </div>
          <div class="row gx-5">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i class="fa-solid fa-blog"></i>
              </div>
              <h2 class="h4 fw-bolder">Wep Developer</h2>
              <p>
                What is meant by web development? Image result for what is the
                web development Web development is the building and maintenance
                of websites; it's the work that happens behind the scenes to
                make a website look great, work fast and perform well with a
                seamless user experience. Web developers, or 'devs', do this by
                using a variety of coding languages.
              </p>
              <a class="text-decoration-none" href="{% url 'jops:jop_list' %}">
                Go to see more
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i class="fa-solid fa-mobile-screen-button"></i>
              </div>
              <h2 class="h4 fw-bolder">Mobile Application</h2>
              <p>
                Mobile application development is the process of creating
                software applications that run on a mobile device, and a typical
                mobile application utilizes a network connection to work with
                remote computing resources.
              </p>
              <a class="text-decoration-none" href="{% url 'jops:jop_list' %}">
                Go to see more
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
            <div class="col-lg-4">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i class="fa-solid fa-robot"></i>
              </div>
              <h2 class="h4 fw-bolder">Artificial Intelligence (AI)</h2>
              <p>
                AI Engineering is a field of research and practice that combines
                the principles of systems engineering, software engineering,
                computer science, and human-centered design to create AI systems
                in accordance with human needs for mission outcomes.
              </p>
              <a class="text-decoration-none" href="{% url 'jops:jop_list' %}">
                Go to see more
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ########################################### */}
      <section class="bg-light py-5 border-bottom">
        <div class="container px-5 my-5">
          <div class="text-center mb-5">
            <h2 class="fw-bolder">The Goals From This Application</h2>
            <p class="lead mb-0">We view th goals of this application...</p>
          </div>
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-6 col-xl-4">
              <div class="card mb-5 mb-xl-0 anyhover">
                <div class="card-body p-5">
                  <div class="small text-uppercase fw-bold">
                    <i class="bi bi-star-fill text-warning"></i> Ease of use
                  </div>
                  <br />
                  <p>
                    Ease of use is a basic concept that describes how easily
                    users can use a product. Design teams define specific
                    metrics per project—e.g., “Users must be able to tap Find
                    within 3 seconds...
                  </p>
                  <div id="readmore1" class="collapse">
                    {" "}
                    of accessing the interface.” —and aim to optimize ease of
                    use while offering maximum functionality and respecting
                    business limitations.
                  </div>
                  <br />
                  <button
                    class="btn btn-outline-success"
                    data-bs-toggle="collapse"
                    data-bs-target="#readmore1"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-xl-4">
              <div class="card mb-5 mb-xl-0 anyhover">
                <div class="card-body p-5">
                  <div class="small text-uppercase fw-bold">
                    <i class="bi bi-star-fill text-warning"></i> Performance
                  </div>
                  <br />
                  <p>
                    Application performance indicates how the app is functioning
                    and how responsive the app is to the end-user There are
                    tools available to measure Application Performance and
                    enable...
                  </p>
                  <div id="readmore2" class="collapse">
                    {" "}
                    app developers to detect and diagnose complex application
                    performance problems to maintain the expected level of
                    service to end-users.
                  </div>
                  <br />
                  <button
                    class="btn btn-outline-success"
                    data-bs-toggle="collapse"
                    data-bs-target="#readmore2"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-xl-4">
              <div class="card anyhover">
                <div class="card-body p-5">
                  <div class="small text-uppercase fw-bold">
                    {" "}
                    <i class="bi bi-star-fill text-warning"></i> Efficiency
                  </div>
                  <br />
                  <p>
                    For many professionals, having the option to work from home
                    has brought significant benefits, like cutting commuting
                    costs or working in a more comfortable setting...
                  </p>
                  <div id="readmore3" class="collapse">
                    However, it can be even easier to lose time at work when
                    sharing that space with responsibilities in the home,
                    whether it’s the laundry sitting in the corner of the room,
                    the kids’ homework or the dog needing to go outside.
                  </div>
                  <br />
                  <button
                    class="btn btn-outline-success"
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
      {/* <section class="bg-light py-2 border-bottom">
        <div class="container px-5 my-5">
          <h2 class="text-center p-3">Our Clients</h2>
          <section class="partners-logo slider">
            <div class="slide">
              <img
                src="{% static 'img/slick/logo1.jpeg' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div class="slide">
              <img
                src="{% static 'img/slick/logo3.jpeg' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div class="slide">
              <img
                src="{% static 'img/slick/logo9.png' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div class="slide">
              <img
                src="{% static 'img/slick/logo8.png' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div class="slide">
              <img
                src="{% static 'img/slick/logo4.png' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div class="slide">
              <img
                src="{% static 'img/slick/logo5.png' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div class="slide">
              <img
                src="{% static 'img/slick/logo2.png' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div class="slide">
              <img
                src="{% static 'img/slick/logo7.png' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div class="slide">
              <img
                src="{% static 'img/slick/logo6.jpeg' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
            <div class="slide">
              <img
                src="{% static 'img/slick/logo3.jpeg' %}"
                // style="width: 100px; height: 100px;"
              />
            </div>
          </section>
        </div>
      </section> */}
      {/* ################################ */}
      <footer class="py-4 bg-dark">
        <div class="container px-5">
          <p class="m-0 text-center text-white">
            Copyright &copy; Reserved Your Website By Chance Team 2023
          </p>
        </div>
        <div class="text-center mt-3 thefooter">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100070098455466"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a target="_blank" href="https://github.com/Abdelmaksoude">
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abdelmaqsoud-gomma-42243b224/"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/abdelmaksoudeid/">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </footer>
    </>

    // </Container>
  );
};

export default HomePage;
