import React from "react"

export default function Hero() {
  return (
    <section className="home__hero">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1 className="home__hero__title">Grow Your Career in Tech</h1>
            <p className="home__hero__description">
              We help individual who are you trying to get a foothold in tech
              and are having problems selecting an area of programming they wish
              to major in and those who need tools to aid your learning.
            </p>
            <button>Apply Now</button>
          </div>
          <div className="col-md-5">
            <div className="home__hero__images">
              <img
                src="https://res.cloudinary.com/dhhi9ckbk/image/upload/v1604404391/IMG_6455_ljesfi.png"
                className="home__hero__images__1"
                alt="A Dev Career candidate"
              />
              <img
                src="https://res.cloudinary.com/okoyecb/image/upload/v1607336993/IMG_6577_konksk.jpg"
                className="home__hero__images__2"
                alt="A group of Dev Career candidate"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="111"
                height="111"
                fill="none"
                viewBox="0 0 111 111"
              >
                <path
                  stroke="#05B993"
                  d="M17.718 72.23l20.943-54.512 54.513 20.943L72.23 93.174 17.718 72.23z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
