import React from "react"
//import the images
import IMG from "../../../assets/images/project-v1.png"
import IMGTWO from "../../../assets/images/proj-v2.png"
import ImageCard from "./ImageCard"

export default function Content({ subHeading, heading, desc }) {
  //eslint-disable-next-line

  const pinkBg = {
    background: "rgba(235, 33, 136, 0.39)",
  }

  const greyBg = {
    background: "#c4c4c4c4",
  }

  return (
    <div className="project-card">
      <ImageCard background={pinkBg} imgOne={IMG} imgTwo={IMGTWO} />
      <div className="project-card__content">
        <h6 className="project-card__content--subheading">{subHeading}</h6>
        <h1 className="project-card__content--heading">{heading}</h1>
        <p className="project-card__content--desc">{desc}</p>
        <button className="project-card__content--btn">View Project</button>
      </div>
    </div>
  )
}
