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

  </div>
    </section>
  )
}

export default Showcase
