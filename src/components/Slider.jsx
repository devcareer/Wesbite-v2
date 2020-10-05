import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const Slider = () => {
  return (
    <>
      <section className="slider__container">
        <div className="container">
          <div className="slider__header">
            <h1>Testimonials</h1>
          </div>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            showDots={true}
            arrows={false}
            swipeable={true}
            draggable={true}
            infinite={true}
            dotListClass="custom-dot-list-style"
          >
            <div className="clearfix"></div>
            <div className="slider">
              <div className="slider__img">
                <img
                  src="https://res.cloudinary.com/everich1/image/upload/v1601640926/slider1_ch2btr.png"
                  alt=""
                />
              </div>
              <div className="slider__content">
                <div className="slider__para">
                  <p>
                    Our program is full time and lasts 3 months, Lorem Isujk
                    you're welcome to apply if you currently do not have a full
                    time dedication to something else.
                  </p>
                </div>
                <div className="slider__name">
                  <p>John Doe</p>
                  <span>Frontend Developer</span>
                </div>
              </div>
            </div>
            <div className="slider">
              <div className="slider__img">
                <img
                  src="https://res.cloudinary.com/everich1/image/upload/v1601640926/slider1_ch2btr.png"
                  alt=""
                />
              </div>
              <div className="slider__content">
                <div className="slider__para">
                  <p>
                    Our program is full time and lasts 3 months, Lorem Isujk
                    you're welcome to apply if you currently do not have a full
                    time dedication to something else.
                  </p>
                </div>
                <div className="slider__name">
                  <p>John Doe</p>
                  <span>Frontend Developer</span>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  )
}

export default Slider
