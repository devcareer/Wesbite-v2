import React from "react"

function ImageCard({ imgOne, imgTwo, background }) {
  return (
    <div>
      <div style={background} className="project__img">
        <p className="project__img__one">
          <img src={imgOne} alt="one" />
        </p>
        <p className="project__img__two">
          {/* <img src={imgTwo} alt="two" /> */}
        </p>
      </div>
    </div>
  )
}

export default ImageCard
