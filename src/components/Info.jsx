import React from "react"
import { cards, infoItems } from "../data/InfoContent"
function Info() {
  return (
    <section className="info">
      <div className="container">
        <div className="info__header">
          <h3>
            Your journey of a thousand miles, starts with a one tweet pitch..
          </h3>
        </div>
        <div className="info__cards">
          <div className="cards">
            {cards.map((card, index) => {
              return (
                <div className="card__item" key={index}>
                  <div className="icon">
                    <img src={card.icon} alt="soemthing" />
                  </div>
                  <div className="card__heading">
                    <h3>{card.header}</h3>
                  </div>
                  <div className="card__para">
                    <p>{card.paragraph}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <section className="info__about__us">
          <div className="about__dev">
            <h3>
              All About Us in <span style={{ display: "block" }}>One DIV</span>
            </h3>
          </div>
          <div className="info__items">
            <div className="items">
              {infoItems.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <h3>{item.heading}</h3>
                    <p>{item.paragraph}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Info
