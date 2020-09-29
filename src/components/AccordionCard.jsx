// eslint-disable-next-line

import React, { useState } from "react"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"

export default function AccordionCard({ question, answer, content }) {
  const [expand, setExpand] = useState(false)
  function handleExpand() {
    setExpand(!expand)
  }

  return (
    <section className="accordion">
      <div
        style={{
          borderRadius: expand ? "8px 8px 0 0" : "8px",
          border: expand && "1px solid #05b993",
        }}
        className={expand ? "top-div-active top-div" : "top-div"}
      >
        <div className="top-div__content">
          <p
            style={{
              color: expand && "#ffffff",
            }}
            className="top-div__text"
          >
            {question}
          </p>
          <p
            style={{
              color: expand && "#ffffff",
            }}
            onClick={handleExpand}
            className="top-div__btn"
          >
            {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <div
        style={{
          display: expand ? "block" : "none",
        }}
        className="bottom-div"
      >
        {" "}
        <h1 className="bottom-div__header"> {answer}</h1>{" "}
        <p className="bottom-div__content"> {content}</p>{" "}
      </div>{" "}
    </section>
  )
}
