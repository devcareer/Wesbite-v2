import React from "react";

export default function GalleryImg({col, src, text}) {
  return (
    <>
    <div className={col}>
      <img className="img-fluid img-thumbnail" src={src} alt={text}/>
    <p className="desc">{text}</p>
    </div>
    </>
  );
}
