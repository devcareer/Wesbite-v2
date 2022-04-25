import React from "react"
import Header from "../components/global/Header"
import Footer from "../components/global/Footer"

import "../assets/scss/app.scss"

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
