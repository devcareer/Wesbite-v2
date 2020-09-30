import React from "react"
import Footer from "../components/global/Footer"
import "../assets/scss/app.scss"

export default function DefaultLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
