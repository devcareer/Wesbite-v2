import React from "react"
import Hero from "../components/pages/home/Hero"
import DefaultLayout from "../layouts/DefaultLayout"
export default function Home() {
  return (
    <DefaultLayout>
      <div className="home">
        <Hero />
        <section className="home__hero-extended">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>Become a developer</h1>
                <h1>in 3 Months</h1>
              </div>
              <div className="col-md-6">
                <p>
                  Our program is full time and lasts 3 months, you're welcome to
                  apply if you currently do not have a full time dedication to
                  something else.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  )
}
