import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import Card from "../components/Card"
function peakperf() {
  const data = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/gfellah45/image/upload/v1601374966/img/pictures_tdnnso.png",
      name: "Meyene Udoh",
      title: "Software Developer",
      socials: [
        {
          twitter: "https://twitter/meyeneudo",
          github: "https://facebook/meyeneudoh",
        },
      ],
    },
    {
      id: 1,
      image:
        "https://res.cloudinary.com/gfellah45/image/upload/v1601374966/img/pictures_tdnnso.png",
      name: "Okoye CB",
      title: "Software Developer",
      socials: [
        { twitter: "twitter/meyeneudo", github: "facebook/meyeneudoh" },
      ],
    },
  ]
  return (
    <div>
      <DefaultLayout>
        {/* sample view */}
        <div className="row ml-4 mt-4">
          {data.map(candidate => (
            <Card
              key={candidate.id}
              image={candidate.image}
              name={candidate.name}
              title={candidate.title}
              socials={candidate.socials}
            />
          ))}
        </div>
      </DefaultLayout>
    </div>
  )
}

export default peakperf
