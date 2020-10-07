import React from "react"
import Showcase from "../components/Showcase"
import Slider from "../components/Slider"
import Midsection from "../components/Midsection"
import DefaultLayout from "../layouts/DefaultLayout"
import Info from "../components/Info"
import Partners from "../components/Partners";
export default function Home() {
  return (
    <DefaultLayout>
      <div className="home">
       <Showcase />
       
        <section className="home__exists">
          <div className="clearfix"></div>
          <div className="container">
       <Midsection />            
      <Info />
          </div>
        </section>
        <Partners />
      </div>
      <Slider />
    </DefaultLayout>
  )
}


