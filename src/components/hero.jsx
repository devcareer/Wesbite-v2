import React from "react"
import "../assets/scss/app.scss"

const Hero = ({title}) => {
  return (
    <div className="hero">
      <div className="hero__image">
        <div className="hero__text">
          <h2 className="hero__title">{title}</h2>
          <div className="hero__subtitle">
            Home/
            <span className="hero__subtitle--span">{title}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
