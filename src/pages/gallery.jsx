import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import Hero from "../components/global/Hero";
import GalleryImgs from "../components/pages/gallery/GalleryImgs"
import { gallery } from "../data/GalleryData"

export default function Gallery() {
  return (
    <DefaultLayout>
      <Hero title="Gallery" />
      <div className="container gallery">
        <div className="row">
          <div className="col-12 col-sm-7 offset-sm-3 mb-5">
            <p className="gallery__page-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              donec amet tempor ac. A nunc in elit morbi tortor ut faucibus.
              Egestas.
            </p>
          </div>
        </div>
        <div className="row">
          {gallery.map(img => {
            return (
              <GalleryImgs
                key={img.text}
                col={img.col}
                src={img.src}
                text={img.text}
              />
            )
          })}
        </div>
      </div>
    </DefaultLayout>
  )
}
