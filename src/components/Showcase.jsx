import React from "react"

const Showcase = () => {
  return (
    <section className="home__hero">
      <div className="container">
        <div className="showcase__content">
          <div className="showcase__content__text">
            <div className="showcase__header">
              <h1>Grow Your Career in Tech</h1>
            </div>
            <div className="showcase__para">
              <p>
                We help individual who are you trying to get a foothold in tech
                and are having problems selecting an area of programming they
                wish to major in and those who need tools to aid your learning
              </p>
            </div>
            <div className="showcase__btn">
              <button style={{ outline: "none" }}>Apply Now</button>
            </div>
          </div>
          <div className="showcase__content__img">
            <div className="img">
              <img
                src="https://res.cloudinary.com/everich1/image/upload/v1601638323/group_k76skl.png"
                alt=""
              />
              <div className="square"></div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>

        {/* This is suppose to be my part Bernard, so i commented it out */}
        {/*<div className="container">
          <div className="goal">
            <div className="goal__header">
              <p>Become a developer</p>
              <span>in 3 Months</span>
            </div>
            <div className="goal__para">
              <p>
                Our program is full time and lasts 3 months, you're welcome to
                apply if you currently do not have a full time dedication to
                something else.
              </p>
            </div>
          </div>
        </div>
  */}


  </div>
    </section>
  )
}

export default Showcase
