import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"

export default function Home() {
  return (
    <DefaultLayout>
      <div className="home">
        <section className="home__hero">
          <div className="container">Helloworld</div>
        </section>
        <section className="home__exists">
          <div className="container">Helloworld</div>
        </section>
      </div>
    </DefaultLayout>
  )
}
