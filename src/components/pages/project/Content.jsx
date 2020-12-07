import React from "react"

export default function Content({ subHeading, heading, desc, id }) {
  return (
    <div className="project-card">
      <div className="project-card__content">
        <h6 className="project-card__content--subheading">{subHeading}</h6>
        <h1 className="project-card__content--heading">{heading}</h1>
        <p className="project-card__content--desc">{desc}</p>
      </div>
    </div>
  )
}
