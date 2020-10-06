import React from "react";

export default function GalleryImgs({col, src, text}) {
  return (
    <div className={col}>
      <img className="img-fluid img-thumbnail" src={src} alt={text}/>
      <p className="gallery__desc">{text}</p>
    </div>
  );
}