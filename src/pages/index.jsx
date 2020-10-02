import React from "react"
import Showcase from "../components/Showcase"
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
    </DefaultLayout>
  )
}


