import React from "react"

export default function Midsection() {
  return (
    <section className="midsection ">
      <div className="container">
        {/* The first row */}
        <div className="row1 row">
          <div className="row1__header col-12 col-lg-6">
            <h1 style={{ fontSize: 48 }}>
              <span>Become a developer</span>
              <span style={{ color: "#05B993", display: "block" }}>
                in 3 Months
              </span>
            </h1>
          </div>

          <div className="row1__first col-12 col-lg-6">
            <p>
              Our program is full time and lasts 3 months,
              <br />
              you're welcome to apply if you currently do not
              <br />
              have a full time dedication to something else.
              <br />
            </p>
          </div>
        </div>

        {/*The second row */}

        <div className="row2 row">
          <div className="row2__part1 col-12 col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <p className="row2__part1__p" style={{ fontSize: "18px" }}>
              We are raising world class developers
            </p>

            <h2 style={{ fontSize: "32px", fontWeight: "700" }}>
              Why we exist
            </h2>

            <div className="row2__part1__roll">
              <p>
                <img
                  src="https://res.cloudinary.com/bint/image/upload/v1601631960/Vector_y29axa.svg"
                  alt="bullet"
                  className="row2__part1__roll__vector"
                />
                world class Software Developers
              </p>

              <p>
                <img
                  src="https://res.cloudinary.com/bint/image/upload/v1601631960/Vector_y29axa.svg"
                  alt="bullet"
                  className="row2__part1__roll__vector"
                />
                Solve problems in Africa with Tech
              </p>

              <p>
                <img
                  src="https://res.cloudinary.com/bint/image/upload/v1601631960/Vector_y29axa.svg"
                  alt="bullet"
                  className="row2__part1__roll__vector"
                />
                Create employment and breed innovative ideas
              </p>

              <p>
                <img
                  src="https://res.cloudinary.com/bint/image/upload/v1601631960/Vector_y29axa.svg"
                  alt="bullet"
                  className="row2__part1__roll__vector"
                />
                Build more positive tech savvy youths
              </p>

              <p>
                <img
                  src="https://res.cloudinary.com/bint/image/upload/v1601631960/Vector_y29axa.svg"
                  alt="bullet"
                  className="row2__part1__roll__vector"
                />
                Support females into tech in Africa
              </p>
            </div>
          </div>

          <div className="row2__part2 col-12 col-lg-8">
            <div className="row2__part2__rectangle53"></div>

            <div className="row2__part2__img_6637"></div>
          </div>

          <div className="mid-header">
            <h2>What you will learn</h2>
            <p>We have a team of experienced mentors to guide you</p>
          </div>

          {/* The third row */}

          <div className="container">
            <div className="row3 row">
              <div className="row3__frontend col-12 col-lg-3 mb-md-5 mb-sm-5 mb-5">
                <h4>Frontend Development</h4>
                <ul>
                  <li>React</li>
                  <li>Html/CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>

              <div className="row3__backend col-12 col-lg-3 mb-md-5 mb-sm-5 mb-5">
                <h4>Backend Development</h4>
                <ul>
                  <li>Node</li>
                  <li>Express</li>
                  <li>PoatgreSQL</li>
                  <li>Data Sciene with Python</li>
                </ul>
              </div>

              <div className="row3__mobile col-12 col-lg-3 mb-md-5 mb-sm-5 mb-sm-5 mb-5">
                <h4>Mobile Development</h4>
                <ul>
                  <li>Flutter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
