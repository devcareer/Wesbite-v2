import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import Hero from "../components/Hero"
import Accordion from "../components/Accordion"

export default function Home() {
  return (
    <DefaultLayout>
      <Hero title="FAQ’s" />
      <div className="faq">
        <div className="container">
          <p className="faq__description">
            Some of the questions you might want to ask us are listed below, we
            don't know what you have in mind, but just incase it's not listed
            below, easily send us a mail or click on our livechat service below,
            like real below.Yes that pop up icon.
          </p>
          <Accordion />
        </div>
      </div>
    </DefaultLayout>
  )
}
