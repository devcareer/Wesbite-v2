import React from "react"

function ImageCard({ imgOne, imgTwo, background }) {
  return (
    <div style={background} className="project-card__img">
      <img className="project-card__img--firstImg" src={imgOne} alt="food" />
      <img className="project-card__img--secondImg" src={imgTwo} alt="food" />
    </div>
  )
}

export default ImageCard
