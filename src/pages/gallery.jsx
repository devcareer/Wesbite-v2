import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import Hero from "../components/Hero"
import GalleryImgs from "../components/GalleryImgs"
import { gallery } from "../data/GalleryData"

export default function Gallery() {
  return (
    <DefaultLayout>
      <Hero title="Gallery" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 mb-5">
            <p className="page-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              explicabo inventore culpa natus mollitia veniam quia alias
              voluptates sapiente incidunt.
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
