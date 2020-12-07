import React from "react"
import { Link } from "gatsby"
import DefaultLayout from "../layouts/DefaultLayout"
import Hero from "../components/global/Hero";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero title="About Us" />
      <div className="about-us container">
        <div className="row d-flex flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-6">
            <h3 className="about-us__title">
              Why you should do your
              <span className="about-us__title--green"> CSR</span> with us
            </h3>
            <p className="about-us__text">
              DevCareer is a Non-Profit organization that is focused on
              supporting upcoming developers with resources to excel into world
              class <br />
              <br />
              Underdeveloped African countries are lacking when it comes to
              adequate resources to dive into Tech. DevCareer is focused on
              supporting these group of people.
            </p>
            <Link to="https://bit.ly/3lQuZN4" className="button d-inline-flex">
              View Report
            </Link>
          </div>
          <div className="col-12 col-lg-6 mb-3 mb-lg-0">
            <img
              src="https://res.cloudinary.com/broma/image/upload/v1601367977/devcareer/IMG_6292_fen4mu.svg"
              alt="DevCareer"
              className="about-us__image"
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
