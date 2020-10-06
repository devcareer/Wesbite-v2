import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import CandidateCard from "../components/talent/CandidateCard"
import Hero from "../components/global/Hero";
import CandidateCard from "../components/pages/talent/CandidateCard"
import ArrowForward from "@material-ui/icons/ArrowForward"
import ArrowBack from "@material-ui/icons/ArrowBack"
import data from "../data/TalentData"

function Talent() {
  return (
    <div className="talent">
      <DefaultLayout>
        {/* sample view */}
        <Hero title={"Talent"} />
        <div className="container text-center mt-6 mb-6">
          <h3 className="talent__title pt-4">Our Previous Candidates</h3>
          <div className="row mt-4">
            {data.map(candidate => (
              <div className="col-12 col-md-6 col-lg-4 " key={candidate.id}>
                <CandidateCard
                  image={candidate.image}
                  name={candidate.name}
                  title={candidate.title}
                  socials={candidate.socials}
                />
              </div>
            ))}
            <div className="talent__button__container ">
              <div className="d-flex justify-content-center">
                <button className="button--outline m-2">
                  {" "}
                  <ArrowBack className="pr-2" />
                  Previous Page
                </button>
                <button className="m-2">
                  Next Page <ArrowForward className="pl-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  )
}

export default Talent
