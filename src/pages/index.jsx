import React from "react"
import Showcase from "../components/Showcase"
import DefaultLayout from "../layouts/DefaultLayout"

export default function Home() {
  return (
    <DefaultLayout>
      <div className="home">
        <section className="home__hero">
          <div className="container">
            <Showcase />
          </div>
        </section>
        <section className="home__exists">
          <div className="container">Helloworld</div>
        </section>
      </div>
    </DefaultLayout>
  )
}
