import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import slider1 from "../../../assets/images/slider1.png"

export default function Testimonials(props) {
  const responsive = {
    mobile: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  return (
    <div className="testimonials-carousel">
      <h3 className="text-center testimonials-carousel__title">Testimonials</h3>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2500}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        showDots={true}
        itemClass="carousel-item-padding-40-px"
        dotListClass="custom-dot-list-style"
      >
        <div className="d-md-flex align-items-center">
          <img
            src={slider1}
            alt="slider"
            className="mr-md-5 testimonials-carousel__image"
          />
          <div>
            <p className="testimonials-carousel__text">
              Our program is full time and lasts 3 months, Lorem Isujk you're
              welcome to apply if you currently do not have a full time
              dedication to something else.
            </p>
            <div className="testimonials-carousel__name">
              James Benson <br />
              <span className="testimonials-carousel__role">
                Frontend Developer
              </span>
            </div>
          </div>
        </div>

        <div className="d-md-flex align-items-center">
          <img
            src={slider1}
            alt="slider"
            className="mr-md-5 testimonials-carousel__image"
          />
          <div>
            <p className="testimonials-carousel__text">
              Our program is full time and lasts 3 months, Lorem Isujk you're
              welcome to apply if you currently do not have a full time
              dedication to something else.
            </p>
            <div className="testimonials-carousel__name">
              James Benson <br />
              <span className="testimonials-carousel__role">
                Frontend Developer
              </span>
            </div>
          </div>
        </div>

        <div className="d-md-flex align-items-center">
          <img
            src={slider1}
            alt="slider"
            className="mr-md-5 testimonials-carousel__image"
          />
          <div>
            <p className="testimonials-carousel__text">
              Our program is full time and lasts 3 months, Lorem Isujk you're
              welcome to apply if you currently do not have a full time
              dedication to something else.
            </p>
            <div className="testimonials-carousel__name">
              James Benson <br />
              <span className="testimonials-carousel__role">
                Frontend Developer
              </span>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
