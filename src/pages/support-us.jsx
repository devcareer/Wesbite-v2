import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import Hero from "../components/global/Hero";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero title="Support us" />
      <div className="support mt-4 mb-4">
        <div className="support__row container">
          <div className="support__margin--bottom support__margin--top row mb-mt-0">
            <div className="col-md-6">
              <h1 className="support__title">
                Become a{" "}
                <span className="support__title--primary"> Patron </span>
              </h1>
              <p className="support__subtitle">
                We support budding software developers in Africa with resources
                to come into Tech for FREE. Kindly support us by Joining our
                Paetron.
              </p>
              <button> Become a patron </button>
              <br />
            </div>

            <div className="col-md-6">
              <div className="support__image"></div>
            </div>
          </div>

          <br />

          {/* Second row */}
          <div className="support__margin--bottom row">
            <div className="col-md-6">
              <div className="support__image"></div>
            </div>
            <div className="col-md-6">
              <h1 className="support__title">
                Support a{" "}
                <span className="support__title--primary"> Talent </span>
              </h1>
              <p className="support__subtitle">
                We hope to keep expanding the cohort to other states and
                countries to support the growing tech talents there and we would
                be needing your support to make it work.
              </p>
              <button> Donate </button>
            </div>
          </div>

          <br />

          {/* Third row */}
          <div className="support__margin--bottom row">
            <div className="col-md-6">
              <h1 className="support__title">
                Donate{" "}
                <span className="support__title--primary">
                  {" "}
                  Tech Resources{" "}
                </span>
              </h1>
              <p className="support__subtitle">
                Dev Career accepts in-kind donations of working technology
                equipment including laptops and headset.
              </p>
              <button> Contact Us </button>
              <br />
            </div>
            <div className="col-md-6">
              <div className="support__image"></div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
