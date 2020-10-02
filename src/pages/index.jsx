import React from "react"
import Showcase from "../components/Showcase"
import Slider from "../components/Slider"
import DefaultLayout from "../layouts/DefaultLayout"

export default function Home() {
  return (
    <DefaultLayout>
      <div className="home">
       <Showcase />
       <div className="clearfix"></div>
       
        <section className="home__exists">
          <div className="container">
              
          </div>
        </section>
      </div>
      <Slider />
    </DefaultLayout>
  )
}


