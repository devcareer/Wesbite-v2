import React from "react"
import Hero from "../components/pages/home/Hero"
import DefaultLayout from "../layouts/DefaultLayout"
import participant from "../assets/images/bami.svg"
import learn1 from "../assets/images/learn1.png"
import learn2 from "../assets/images/learn2.png"
import learn3 from "../assets/images/learn3.png"
import graph_icon from "../assets/images/graph_icon.svg"
import money_icon from "../assets/images/money_icon.svg"
import resource_icon from "../assets/images/resource_icon.svg"
import wennovation from "../assets/images/wennovation.png"
import co_creation from "../assets/images/co-creation.png"
import hapa_space from "../assets/images/hapa-space.png"
import olotu from "../assets/images/olotu.png"
import aimtoget from "../assets/images/aimtoget.png"
import bongo from "../assets/images/bongo.png"
import degree_720 from "../assets/images/720degree.png"
import impact from "../assets/images/impact.png"
import hub30 from "../assets/images/hub30.png"
import swahilipot from "../assets/images/swahilipot.png"
import rumblecube from "../assets/images/rumblecube.png"
import revivn from "../assets/images/revivn.png"
import kuda from "../assets/images/kuda.png"
import gofundme from "../assets/images/gofundme.png"
import regular from "../assets/images/regular.png"
import isams from "../assets/images/isams.png"
import eden from "../assets/images/eden.png"
import Testimonials from "../components/pages/home/Testimonials"

export default function Home() {
  return (
    <DefaultLayout>
      <div className="home">
        <Hero />
        <section className="home__hero-extended">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="home__hero-extended--title">
                  Become a developer <br />
                  <span className="home__hero-extended--span">in 3 Months</span>
                </h2>
              </div>
              <div className="col-md-6">
                <p>
                  Our program is full time and lasts 3 months, you're welcome to
                  apply if you currently do not have a full time dedication to
                  something else.
                </p>
              </div>
            </div>

            <div className="row align-items-center flex-column-reverse flex-md-row mt-5 aim-section ">
              <div className="col-12 col-md-6">
                <span className="aim-section__sub-title">
                  We are raising world class developers
                </span>
                <h3 className="aim-section__title">Why we exist</h3>
                <ul className="aim-section__list">
                  <li className="aim-section__bullet">
                    Create world class Software Developers
                  </li>
                  <li className="aim-section__bullet">
                    Solve problems in Africa with Tech
                  </li>
                  <li className="aim-section__bullet">
                    Create employment and breed innovative ideas
                  </li>
                  <li className="aim-section__bullet">
                    Build more positive tech savvy youths
                  </li>
                  <li className="aim-section__bullet">
                    Support females into tech in Africa
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <img
                  src={participant}
                  alt="participant"
                  className="w-100 mb-5 mb-md-0 aim-section__image"
                />
              </div>
            </div>

            <div className="learning-category">
              <h3 className="learning-category__title">What you will learn</h3>
              <span className="learning-category__subtitle">
                We have a team of experienced mentors to guide you
              </span>

              <div className="d-lg-flex learning-category__image-section">
                <div className="mb-5 mr-lg-3 image-subset">
                  <span className="image-subset__title">
                    Frontend Development
                  </span>
                  <img
                    src={learn1}
                    alt="learn"
                    className="w-100 image-subset__image"
                  />
                </div>

                <div className="mb-5 mr-lg-3 image-subset">
                  <span className="image-subset__title">
                    Backend Development
                  </span>
                  <img
                    src={learn3}
                    alt="learn"
                    className="w-100 image-subset__image"
                  />
                </div>

                <div className="mb-5 image-subset">
                  <span className="image-subset__title">
                    Mobile App Development
                  </span>
                  <img
                    src={learn2}
                    alt="learn"
                    className="w-100 image-subset__image"
                  />
                </div>
              </div>
            </div>

            <p className="mt-4 quote">
              Your journey of a thousand miles,
              <br className="d-none d-md-block" /> starts with a one tweet
              pitch..
            </p>

            <div className="d-xl-flex justify-content-xl-between how-to">
              <div className="mb-5 mb-xl-0 mr-xl-5">
                <img
                  src={graph_icon}
                  alt="graph icon"
                  className="how-to__icon"
                />
                <h4 className="how-to__title">Join Program</h4>
                <p className="how-to__text">
                  Pass our four-level stage assessment and join DevCareer.
                  Assessment will be based on several criteria; aptitude test,
                  coding test and a physical interview.
                </p>
              </div>

              <div className="mb-5 mb-xl-0 mr-xl-5">
                <img
                  src={resource_icon}
                  alt="tag icon"
                  className="how-to__icon"
                />
                <h4 className="how-to__title">Resources & Mentors</h4>
                <p className="how-to__text">
                  Get a laptop, get a course, get paired with a mentor in your
                  field to support and progress your skill
                </p>
              </div>

              <div>
                <img
                  src={money_icon}
                  alt="money icon"
                  className="how-to__icon"
                />
                <h4 className="how-to__title">Get Job placement</h4>
                <p className="how-to__text">
                  During and after your mentorship program, We will work
                  together with your mentor to source for suitable jobs for you
                  and prepare you for interviews
                </p>
              </div>
            </div>

            <div className="row mt-5 all-about align-items-center">
              <div className="col-12 col-md-6 mb-3 mb-lg-0">
                <h2 className="home__hero-extended--title">
                  All About Us in <br />
                  <span className="home__hero-extended--span">One DIV</span>
                </h2>
              </div>

              <div className="col-12 col-md-6 d-flex flex-wrap justify-content-between">
                <div className="all-about__selling-point">
                  <div className="all-about__number">72</div>
                  <span className="all-about__subtext">Developers trained</span>
                </div>

                <div className="all-about__selling-point">
                  <div className="all-about__number">11</div>
                  <span className="all-about__subtext">Partnerships</span>
                </div>

                <div className="all-about__selling-point">
                  <div className="all-about__number">48</div>
                  <span className="all-about__subtext">Patrons</span>
                </div>

                <div className="all-about__selling-point">
                  <div className="all-about__number">11</div>
                  <span className="all-about__subtext">Mentors</span>
                </div>
              </div>
            </div>

            <div className="partnering-hubs">
              <h4 className="text-center partnering-hubs__title">
                Partnering Hubs
              </h4>

              <div className="partnering-hubs__logo-section">
                <img
                  src={wennovation}
                  alt="wennovation hub"
                  className="partnering-hubs__logo"
                />
                <img
                  src={co_creation}
                  alt="co-creation hub"
                  className="partnering-hubs__logo"
                />
                <img
                  src={hapa_space}
                  alt="hapa-space"
                  className="partnering-hubs__logo"
                />
                <img
                  src={olotu}
                  alt="olotu square"
                  className="partnering-hubs__logo"
                />
              </div>

              <div className="mt-5 partnering-hubs__logo-section">
                <img
                  src={aimtoget}
                  alt="aimtoget hub"
                  className="partnering-hubs__logo"
                />
                <img
                  src={bongo}
                  alt="bongo hive"
                  className="partnering-hubs__logo"
                />
                <img
                  src={degree_720}
                  alt="720degree innovation hub"
                  className="partnering-hubs__logo"
                />
                <img
                  src={impact}
                  alt="impact hub"
                  className="partnering-hubs__logo"
                />
              </div>

              <div className="mt-5 sponsors__logo-section">
                <img
                  src={hub30}
                  alt="hub30"
                  className="partnering-hubs__logo"
                />
                <img
                  src={swahilipot}
                  alt="swahilipot"
                  className="partnering-hubs__logo"
                />
                <img
                  src={rumblecube}
                  alt="rumblecube markerspace"
                  className="partnering-hubs__logo"
                />
              </div>
            </div>

            <div className="sponsors">
              <h4 className="text-center partnering-hubs__title">
                Our Sponsors
              </h4>

              <div className="mt-5 sponsors__logo-section">
                <img
                  src={revivn}
                  alt="revivn"
                  className="partnering-hubs__logo"
                />
                <img
                  src={kuda}
                  alt="kuda bank"
                  className="partnering-hubs__logo"
                />
                <img
                  src={gofundme}
                  alt="gofundme.org"
                  className="partnering-hubs__logo"
                />
              </div>

              <div className="mt-5 sponsors__logo-section">
                <img
                  src={regular}
                  alt="icon"
                  className="partnering-hubs__logo"
                />
                <img
                  src={isams}
                  alt="isams"
                  className="partnering-hubs__logo"
                />
                <img
                  src={eden}
                  alt="our eden life"
                  className="partnering-hubs__logo"
                />
              </div>
            </div>
          </div>

          <Testimonials />

          {/* <div className="testimonials-carousel">
            <h3 className="text-center testimonials-carousel__title">
              Testimonials
            </h3>
            <div className="d-md-flex align-items-center">
              <img
                src={slider1}
                alt="slider"
                className="mr-md-5 testimonials-carousel__image"
              />
              <div>
                <p className="testimonials-carousel__text">
                  Our program is full time and lasts 3 months, Lorem Isujk
                  you're welcome to apply if you currently do not have a full
                  time dedication to something else.
                </p>
                <div className="testimonials-carousel__name">
                  James Benson <br />
                  <span className="testimonials-carousel__role">
                    Frontend Developer
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </DefaultLayout>
  )
}
