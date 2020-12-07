import React from "react"
import Hero from "../components/global/Hero"
import { Link } from "gatsby"
import DefaultLayout from "../layouts/DefaultLayout"
import ImageCard from "../components/pages/project/ImageCard"
import Content from "../components/pages/project/Content"
import Img from "../assets/images/proj-v2.png"
import Img3 from "../assets/images/testing.png"
import Img2 from "../assets/images/project-v1.png"
import ProjectData from "../data/ProjectsData.js"

function project() {
  return (
    <DefaultLayout>
      <Hero title="Project" />
      <div className="pb-5">
        <div className="row">
          <div className="row container m-auto">
            <div className="col-12 col-md-6">
              <ImageCard imgOne={Img} />
            </div>

            <div className="col-12 col-md-6">
              <div className="project-card">
                <Content
                  id={ProjectData[0].id}
                  subHeading={ProjectData[0].sub}
                  heading={ProjectData[0].heading}
                  desc={ProjectData[0].desc}
                />
              </div>
              <button className="button--outline">
                <a href="https://platr.ng/">View Project</a>
              </button>
            </div>
          </div>

          <div
            className="col-12 mb-5 mt-5 pb-4"
            style={{ background: "rgba(31, 31, 31, 0.05)" }}
          >
            <div className="row container m-auto">
              <div className="col-12 col-md-6">
                <div className="project-card">
                  <Content
                    id={ProjectData[1].id}
                    subHeading={ProjectData[1].sub}
                    heading={ProjectData[1].heading}
                    desc={ProjectData[1].desc}
                  />
                </div>
                <button className="button--outline">
                  <a href="https://github.com/devcareer/code-jammers-backend/wiki/Backend-sample-test-APIs">
                    View Project
                  </a>
                </button>
              </div>
              <div className="col-12 col-md-6">
                <ImageCard imgOne={Img3} />
              </div>
            </div>
          </div>

          {/* <div className="row  mb-4 container m-auto">
            <div className="col-12 col-md-6">
              <ImageCard imgOne={Img} imgTwo={Img2} />
            </div>

            <div className="col-12 col-md-6">
              <div className="project-card">
                <Content
                  id={ProjectData[0].id}
                  subHeading={ProjectData[0].sub}
                  heading={ProjectData[0].heading}
                  desc={ProjectData[0].desc}
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default project
