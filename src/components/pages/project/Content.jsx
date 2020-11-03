import React from "react"
//import the images

export default function Content({ subHeading, heading, desc, id }) {
  //eslint-disable-next-line

  return (
    <div className="project-card">
      <div className="project-card__content">
        <h6 className="project-card__content--subheading">{subHeading}</h6>
        <h1 className="project-card__content--heading">{heading}</h1>
        <p className="project-card__content--desc">{desc}</p>
        <button className="button--outline">View Project</button>
      </div>
    </div>
  )
}
