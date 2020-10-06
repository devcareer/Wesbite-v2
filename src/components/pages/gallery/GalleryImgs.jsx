import React from "react";

export default function GalleryImgs({col, src, text}) {
  return (
    <div className={col}>
      <img className="col-12" src={src} alt={text}/>
      <p className="gallery__desc">{text}</p>
    </div>
  );
}