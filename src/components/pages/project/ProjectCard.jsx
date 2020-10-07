import React from "react"
import Content from "./Content"
import ProjectsData from "../../../data/ProjectsData"

const data = ProjectsData

function ProjectCard() {
  return (
    <Content
      subHeading={data[0].sub}
      heading={data[0].heading}
      desc={data[0].desc}
    />
  )
}

export default ProjectCard
