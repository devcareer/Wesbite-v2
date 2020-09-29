import React from "react"
import "../assets/scss/app.scss"
import Card from "../components/Card"

export default function DefaultLayout({ children }) {
  // dummy data
  const data = [
    {
      id: 1,
      name: "Meyene Udoh",
      title: "Software Developer",
      socials: [
        { twitter: "twitter/meyeneudo", github: "facebook/meyeneudoh" },
      ],
    },
    {
      id: 1,
      name: "Okoye CB",
      title: "Software Developer",
      socials: [
        { twitter: "twitter/meyeneudo", github: "facebook/meyeneudoh" },
      ],
    },
  ]

  return (
    <>
      {/* sample view */}
      <div className="row ml-4 mt-4">
        {data.map(candidate => (
          <Card
            key={candidate.id}
            name={candidate.name}
            title={candidate.title}
            socials={candidate.socials}
          />
        ))}
      </div>

      {children}
    </>
  )
}
