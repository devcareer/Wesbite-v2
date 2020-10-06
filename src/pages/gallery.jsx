import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import Hero from "../components/Hero"
import GalleryCard from "../components/gallery/galleryCard"

export default function Gallery() {
  return (
    <DefaultLayout>
      {" "}
      <Hero title="Gallery" />{" "}
      <div className="gallery">
        {" "}
        <div className="container">
          {" "}
          <p className="gallery__description">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
            donec amet tempor ac. A nunc in elit morbi tortor ut faucibus.
            Egestas.{" "}
          </p>{" "}
          <GalleryCard />{" "}
        </div>{" "}
      </div>{" "}
    </DefaultLayout>
  )
}
