import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import { gallery } from "../data/GalleryData";
import "../../src/assets/scss/app.scss"

export default function HotShots() {
  return (
    <DefaultLayout>
    <Hero title="Gallery" />
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-8 offset-sm-2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            explicabo inventore culpa natus mollitia veniam quia alias
            voluptates sapiente incidunt.
          </p>
        </div>
      </div>
      <div className="row">
        {gallery.map((img) => {
          return (
            <Gallery
              key={img.text}
              col={img.col}
              src={img.src}
              text={img.text}
            />
          );
        })}
      </div>
    </div>
    </DefaultLayout>
  );
}