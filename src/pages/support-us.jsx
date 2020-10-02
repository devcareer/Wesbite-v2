import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <DefaultLayout>
      <Hero title="Support us" />
      <div className="support mt-4 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <h1 className="support__title">
              Become a <span className="support__title--primary"> Patron </span>
            </h1>
            <p className="support__subtitle">
            We support budding software developers in Africa
            with resources to come into Tech for FREE. 
            Kindly support us by Joining our Paetron. 
            </p>
            <button> Become a patron </button>
            </div>
            <div className="col-md-6">
              <div className="support__image" style={{ height: '497px', width: '100%', backgroundColor:' #C4C4C4' }}></div>
            </div>
          </div>

          {/* Second row */}
          <div className="row">
          <div className="col-md-6">
              <div className="support__image" style={{ height: '497px', width: '100%', backgroundColor:' #C4C4C4' }}></div>
            </div>
            <div className="col-md-6">
            <h1 className="support__title">
              Become a <span className="support__title--primary"> Patron </span>
            </h1>
            <p className="support__subtitle">
            We support budding software developers in Africa
            with resources to come into Tech for FREE. 
            Kindly support us by Joining our Paetron. 
            </p>
            <button> Become a patron </button>
            </div>
          </div>

          {/* Third row */}
          <div className="row">
            <div className="col-md-6">
            <h1 className="support__title">
              Become a <span className="support__title--primary"> Patron </span>
            </h1>
            <p className="support__subtitle">
            We support budding software developers in Africa
            with resources to come into Tech for FREE. 
            Kindly support us by Joining our Paetron. 
            </p>
            <button> Become a patron </button>
            </div>
            <div className="col-md-6">
              <div className="support__image" style={{ height: '497px', width: '100%', backgroundColor:' #C4C4C4' }}></div>
            </div>
          </div>
          
        </div>
      </div>
    </DefaultLayout>
  )
}
