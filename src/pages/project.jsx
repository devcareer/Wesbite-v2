import React from "react"
import Hero from "../components/Hero"
import ProjectCard from "../components/pages/project/ProjectCard"
import DefaultLayout from "../layouts/DefaultLayout"

function project() {
  return (
    <DefaultLayout>
      <Hero title="project" />
      <ProjectCard />
    </DefaultLayout>
  )
}

export default project
