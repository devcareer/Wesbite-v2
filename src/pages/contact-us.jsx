import React from "react"
import { Link } from "gatsby"
import DefaultLayout from "../layouts/DefaultLayout"

export default function Contact() {
  return (
    <DefaultLayout>
      <header className="contact-us__header container-fluid text-center  py-4">
        <h1 className="contact-us__title">Contact Us</h1>
        <p className="contact-us__text col-10 col-md-5 mx-auto">
          Feel free to contact us for all inquiries we will get back to you as
          soon as possible
        </p>
      </header>
      <div className="contact-us__info container d-flex justify-content-center align-items-center">
        <div className="contact-us__info__text col-8 col-md-7 text-center py-5">
          <p>
            For enquiries please send us an email{" "}
            <a href="mailto:info@devcareer.io">Info@devcareer.io</a> <br />
            You can also send us a DM via our social media <br /> channels and
            you will be responded to.
          </p>
        </div>
      </div>
    </DefaultLayout>
  )
}
