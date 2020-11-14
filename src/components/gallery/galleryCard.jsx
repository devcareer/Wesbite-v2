import React from "react"
import Gallery from "../../pages/gallery"

export default function GalleryCard() {
  return (
    <div className="row">
      <div className="gallery__col col-7 ">
        <div className="inner">
          <img
            src="https://res.cloudinary.com/netkid/image/upload/v1585964259/samples/cloudinary-group.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="gallery__col col-5 ">
        <div className="inner">
          <img
            src="https://res.cloudinary.com/netkid/image/upload/v1585964259/samples/cloudinary-group.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      {/* second row */}
      <div className="gallery__col col-5 ">
        <div className="inner"></div>
        <p className="gallery__col--description">What the picture is about</p>
      </div>
      <div className="gallery__col col-7">
        <div className="inner"></div>
        <p className="gallery__col--description">what the picture is about</p>
      </div>
      {/* third row */}
      <div className="gallery__col col-7 ">
        <div className="inner"></div>
        <p className="gallery__col--description">what the picture is about</p>
      </div>
      <div className="gallery__col col-5">
        <div className="inner"></div>
        <p className="gallery__col--description">what the picture is about</p>
      </div>
      
    </div>
  )
}
