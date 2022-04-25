import React from "react"

export default function Gallery({ col, src, alt }) {
  return (
    <div className={`gallery__col ${col}`}>
      <div className="inner">
        <img src={src} alt={alt} srcset="" />
      </div>
    </div>
  )
}
