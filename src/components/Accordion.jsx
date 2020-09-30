import React from "react"
import AccordionCard from "./AccordionCard"
import AccordionContent from "../data/AccordionContents"

const getAccordion = AccordionContent.map(item => (
  <AccordionCard
    key={item.Q}
    question={item.Q}
    answer={item.A}
    content={item.C}
  />
))
export default function Accordion() {
  return <div>{getAccordion}</div>
}
