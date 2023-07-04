<Box noValidate sx={{ mt: 1 }}>
  <Row className="bg-light text-center">
    <div className="fw-bolder fs-2 mt-3">General Info</div>
    <div>Tell companies more about yourself.</div>
    <Form
      style={{
        width: "50%",
        margin: "4px auto",
        border: " .5px solid gray",
      }}
      className="text-start mt-4 p-4"
    >
      <span className="fw-bold fs-5 ms-5 mb-5">Personal Info</span>
      <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
        <Form.Label className="me-2 pt-2">Your Name</Form.Label>
        <InputGroup className="w-75">
          <Form.Control aria-label="First name" required="required" />
          <Form.Control aria-label="Last name" required="required" />
        </InputGroup>
      </Form.Group>
      <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
        <Form.Label className="me-2 pt-2">Birth Year </Form.Label>
        <Form.Control
          className="w-75"
          type="number"
          id="tentacles"
          name="tentacles"
          min="1980"
          max="2002"
          required
        />
      </Form.Group>
      <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
        <Form.Label className="me-2 pt-2">Nationality </Form.Label>
        <Form.Select
          className="w-75"
          aria-label="Default select example"
          required
        >
          <option selected value="select your Nationality">
            select your Nationality
          </option>
          <option value="Egyptian">Egyptian</option>
          <option value="other">Other</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
        <Form.Label className="me-2 pt-2">Gender </Form.Label>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="w-75 mt-2">
            <Form.Check
              required
              inline
              label="Male"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
              value="Male"
            />
            <Form.Check
              required
              inline
              label="Female"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
              value="Female"
            />
          </div>
        ))}
      </Form.Group>
      <span className="fw-bold fs-5 ms-5 mb-5">Your Location</span>

      <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
        <Form.Label className="me-2 pt-2">Country </Form.Label>
        <Form.Select
          className="w-75"
          aria-label="Default select example"
          required
        >
          <option disabled selected value="Egypt">
            Egypt
          </option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
        <Form.Label className="me-2 pt-2">City </Form.Label>
        <Form.Select
          className="w-75"
          aria-label="Default select example"
          required
        >
          <option value="select your City" selected>
            select your City
          </option>
          <option value="Cairo">Cairo</option>
          <option value="Alexandria">Alexandria</option>
          <option value="Shubra El-Kheima">Shubra El-Kheima</option>
          <option value="Giza">Giza</option>
          <option value="Port Said">Port Said</option>
          <option value="Suez">Suez</option>
          <option value="Luxor">Luxor</option>
          <option value="al-Mansura">al-Mansura</option>
          <option value="El-Mahalla El-Kubra">El-Mahalla El-Kubra</option>
          <option value="Asyut">Asyut</option>
          <option value="Ismailia">Ismailia</option>
          <option value="Fayyum">Fayyum</option>
          <option value="Zagazig">Zagazig</option>
          <option value="Aswan">Aswan</option>
          <option value="Damietta">Damietta</option>
          <option value="Damanhur">Damanhur</option>
          <option value="Minoufia">Minoufia</option>
          <option value="Kafr el-Sheikh">Kafr el-Sheikh</option>
          <option value="Banha">Banha</option>
          <option value="6th of October City">6th of October City</option>
          <option value="Hurghada">Hurghada</option>
          <option value="Sohag">Sohag</option>
          <option value="Qena">Qena</option>
          <option value="Beni Suef">Beni Suef</option>
          <option value="al-Minya">al-Minya</option>
          <option value="Marsa Matruh">Marsa Matruh</option>
          <option value="Beheira">Beheira</option>
        </Form.Select>
      </Form.Group>

      <span className="fw-bold fs-5 ms-5 mb-5">Contact Info</span>
      <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
        <Form.Label className="me-2 pt-2">Phone Number</Form.Label>
        <Form.Control
          className="w-75"
          type="text"
          id="tentacles"
          name="tentacles"
          required
        />
      </Form.Group>
    </Form>
  </Row>

  {/* ROw 2 */}
  <Row className="bg-light text-center">
    <Col className="col-sm-12">
      <div className="fw-bolder fs-2 mt-3">Job Info</div>
      <div>
        Tell some imformation to fast communication between you and companies .
      </div>
      <Form
        style={{
          width: "50%",
          margin: "4px auto",
          border: " .5px solid gray",
        }}
        className="text-start mt-4 p-4"
      >
        <div>
          <h4 className="fw-bold fs-5 text-center m-2 text-primary">
            Section-1 : Career Interests
          </h4>
          <h4 className=" text-center m-2 text-primary">
            Providing this information enables us to recommend better
            opportunities to you.
          </h4>

          {/* <div className="fw-bold fs-5 mb-3">
                  What type(s) of job are you open to?
                </div> */}
          {/* <div className="">
                  <Button
                    id="btn"
                    className="me-3 mb-3"
                    onClick={HandleStyle}
                    variant={selected_1 === 0 ? "outline-primary" : "primary"}
                    value="1"
                  >
                    Full Time
                  </Button>
                  <Button
                    className="me-3 mb-3"
                    onClick={HandleStyle}
                    variant={selected_2 === 0 ? "outline-primary" : "primary"}
                    value="2"
                  >
                    Part Time
                  </Button>
                  <Button
                    className="me-3 mb-3"
                    onClick={HandleStyle}
                    variant={selected_3 === 0 ? "outline-primary" : "primary"}
                    value="3"
                  >
                    Freelance/Project
                  </Button>
                  <Button
                    className="me-3 mb-3"
                    onClick={HandleStyle}
                    variant={selected_4 === 0 ? "outline-primary" : "primary"}
                    value="4"
                  >
                    Internship
                  </Button>
                  <Button
                    className="me-3 mb-3"
                    onClick={HandleStyle}
                    variant={selected_5 === 0 ? "outline-primary" : "primary"}
                    value="5"
                  >
                    Volunteering
                  </Button>
                  <Button
                    className="me-3 mb-3"
                    onClick={HandleStyle}
                    variant={selected_6 === 0 ? "outline-primary" : "primary"}
                    value="6"
                  >
                    Student Activity
                  </Button>
                 
                </div> */}

          <div className="fw-bold fs-5">
            What job categories are you interested in?
          </div>
          <Form.Group className="me-5 mt-3">
            <Form.Select required>
              <option disabled selected value="select">
                select
              </option>
              <option value="sw">Software Application Developing</option>
              <option value="wd">Web Developing</option>
              <option value="da"> Database Administration</option>
              <option value="csa">Computer Systems Analysis</option>
              <option value="md">Mobile Developing</option>
              <option value="nsa"> Network System Administration</option>
              <option value="isa">Information Security Analysis</option>
              <option value="che">Computer Hardware Engineering</option>
              <option value="cne">Computer Network Architecture</option>
              <option value="tse">Technical Support Engineering</option>
              <option value="nse">Network Security Engineering</option>
              <option value="sa">Security Analysis</option>
              <option value="ai">Artificial Intelligence</option>
              <option value="ml">Machine Learning</option>
            </Form.Select>
          </Form.Group>
          <div className="fw-bold fs-5">
            What is the minimum salary you would accept?
          </div>
          <div className="d-flex flex-row">
            <Form.Group className="mt-3">
              <Form.Control
                className="w-50"
                min="1000"
                type="number"
                required
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Select required>
                <option selected>Egyptian Pound (EGP)</option>
                <option value="usd">United States Dollar (USD)</option>
                <option value="kwd">Kuwaiti Dinar (KWD)</option>
                <option value="sar">Saudi Arabian Riyal (SAR)</option>
                <option value="aed">U.A. Emirates Dirham (AED)</option>
                <option value="jpy">Japanese Yen (JPY)</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mt-3 m-3">
              <Form.Select required>
                <option value="day">Per Day</option>
                <option selected>Per Month</option>
                <option value="week">Per Week</option>
                <option value="year">Per Year</option>
              </Form.Select>
            </Form.Group>
          </div>

          {/* <Form.Check
                  className="fw-bold opacity-75 fs-6 mt-2"
                  inline
                  label="Hide my minimum salary from companies."
                />
                <div className="opacity-25 fw-bold ms-4">
                  We'll only use your minimum salary to recommend jobs for you.
                </div> */}
        </div>
        <hr className="m-3"></hr>
        <div>
          <h4 className="fw-bold fs-5 text-center m-2 text-primary">
            Section-2 : Professional Info
          </h4>
          <h4 className="text-center m-2 text-primary">
            Tell companies about your professional experience.
          </h4>

          <Form.Group className="me-5 ms-5 mb-3">
            <Form.Label className="fw-bold fs-5 me-2 pt-2">
              How many years of experience do you have?{" "}
            </Form.Label>
            <Form.Select
              className="w-100"
              aria-label="Default select example"
              required
            >
              <option disabled selected value="select">
                select
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="moreThan5Years">more than 5 Years</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="me-5 ms-5 mb-3">
            <Form.Label className="fw-bold fs-5 me-2 pt-2">
              What is your current educational level?
            </Form.Label>
            <Form.Select
              className="w-100"
              aria-label="Default select example"
              required
            >
              <option disabled selected value="select your Educational level">
                select your Educational level
              </option>
              <option value="B-S">Bachelor's Student</option>
              <option value="B-D">Bachelor's Degree</option>
              <option value="M-D">Master's Degree</option>
              <option value="PHD">PHD Degree</option>
              <option value="no_degree">No Degree</option>
            </Form.Select>
          </Form.Group>
          <span className="fw-bold fs-5 ms-5 mb-5">Degree Details</span>
          <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
            <Form.Label className="me-2 pt-2">Faculty </Form.Label>
            <Form.Select
              className="w-75"
              aria-label="Default select example"
              required
              onChangeCapture={HandleFaculty}
            >
              <option disabled selected value="select your Faculty">
                select your Faculty
              </option>
              <option value="Faculty of Computer & Information">
                Faculty of Computer & Information
              </option>
              <option value="Faculty of Computers & Data Science">
                Faculty of Computers & Data Science
              </option>
              <option value="Faculty of Computers & Artificial Intelligence">
                Faculty of Computers & Artificial Intelligence
              </option>
              <option value="Faculty of Artificial Intelligence">
                Faculty of Artificial Intelligence
              </option>
              <option value="Faculty of Engineering">
                Faculty of Engineering
              </option>
              <option value="Faculty of Electronic Engineering">
                Faculty of Electronic Engineering
              </option>
              <option value="Faculty of Science">Faculty of Science</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
            <Form.Label className="me-2 pt-2">Department </Form.Label>
            <Form.Select
              className="w-75"
              aria-label="Default select example"
              required
              onChangeCapture={HandleDepart}
            >
              <option disabled selected value="select department">
                select your department
              </option>
              {
                //console.log(departments.findIndex((e) => e.name == faculty))
                //setFacultyDepartIndex(departments.findIndex((e) => e.name == faculty))
                departments.map((e) => {
                  if (e.name == faculty) {
                    return e.deprts.map((el) => {
                      return <option value={el}>{el}</option>;
                    });
                  }
                })
              }
            </Form.Select>
          </Form.Group>
          <p className="text-danger fs-5 ms-1  text-center"></p>
          <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
            <Form.Label className="me-2 pt-2">Graduation Year </Form.Label>
            <Form.Control
              className="w-75"
              type="number"
              id="tentacles"
              name="tentacles"
              min="2000"
              max="2024"
              required
            />
          </Form.Group>

          {/* language */}
          {/* <span className="fw-bold fs-5 ms-5 mb-5">
                  What languages do you know?
                </span>
                <span> — You can add more than one</span>
                <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                  <div className="d-flex flex-column w-50">
                    <Form.Label>Language</Form.Label>
                    <Form.Select
                      className="w-100"
                      aria-label="Default select example"
                      required
                    >
                      <option disabled selected>
                        select
                      </option>
                      {languages.map((items) => {
                        return (
                          <option value={items.language}>
                            {items.language}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </div>

                  <div className="d-flex flex-column w-50">
                    <Form.Label>Proficiency</Form.Label>
                    <Form.Select
                      className="w-100"
                      aria-label="Default select example"
                      required
                    >
                      <option disabled selected>
                        select
                      </option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Fluent">Fluent</option>
                    </Form.Select>
                  </div>
                  <div className="d-flex flex-column w-50">
                    <div className="h-100"></div>
                    <Button className="ms-2 me-5 bg-primary">Add </Button>
                  </div>
                </Form.Group>

                {languageArray.map((element) => {
                  return (
                    <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                      <InputGroup className="w-100">
                        <Form.Control
                          required="required"
                          placeholder={
                            element.language + " - " + element.proficiency
                          }
                          value={element.language + " - " + element.proficiency}
                          disabled
                        />
                      </InputGroup>
                    </Form.Group>
                  );
                })}
                 */}
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Upload Your CV</Form.Label>
            <Form.Control type="file" size="lg" />
          </Form.Group>
        </div>

        {
          ////////////////////////////////////TEST /////////////////////////////////////
        }
      </Form>
    </Col>
  </Row>
  <Col md={{ offset: 5 }}>
    <Button
      style={{ background: "#ffc107", border: " 1px solid" }}
      className="w-25"
    >
      Save
    </Button>
  </Col>
</Box>;
