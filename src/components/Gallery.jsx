import React from "react";

function Gallery({col, src, text}) {
  return (
    <>
    <div className={col}>
      <img className="img-fluid img-thumbnail" src={src} alt={text}/>
    <p>{text}</p>
    </div>
    </>
  );
}

export default Gallery