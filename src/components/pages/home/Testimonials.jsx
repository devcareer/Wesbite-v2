import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

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
            src="https://res.cloudinary.com/broma/image/upload/v1605558222/devcareer/IMG-20200709-WA0010_-_owojori_ernest_dsvkpx.jpg"
            alt="slider"
            className="mr-md-5 testimonials-carousel__image"
          />
          <div>
            <p className="testimonials-carousel__text">
              I am ever glad to have joined the first cohort of Devcareers.
              Devcareers exposed me to the requirements of being a world class
              developer as I desire and consistently working in the solid
              foundation given to me have landed me a job with a Tech company in
              Lagos. I definitely recommend #laptop4developer for any vision
              minded fellow
            </p>
            <div className="testimonials-carousel__name">
              Ernest Owojori <br />
              <span className="testimonials-carousel__role">
                Data Scientist
              </span>
            </div>
          </div>
        </div>

        <div className="d-md-flex align-items-center">
          <img
            src="https://res.cloudinary.com/broma/image/upload/v1605558203/devcareer/Ayomikun-pics_-_AYOMIKUN_EMMANUEL_oqczte.jpg"
            alt="slider"
            className="mr-md-5 testimonials-carousel__image"
          />
          <div>
            <p className="testimonials-carousel__text">
              Having the opportunity to participate in the first cohort of
              Devcareer program was one of the best thing that happened to me in
              year 2019, I knew about the program the time I was planning to
              transition fully into tech. The program gave me a good foundation
              and I never regretted leaving a research graduate assistant job
              for it.
            </p>
            <div className="testimonials-carousel__name">
              Ayomikun Emmanuel
              <br />
              <span className="testimonials-carousel__role">
                Backend Developer
              </span>
            </div>
          </div>
        </div>

        <div className="d-md-flex align-items-center">
          <img
            src="https://res.cloudinary.com/broma/image/upload/v1605558202/devcareer/My_image_-_Ajeigbe_John_Oluwaseyi_rqkgdc.jpg"
            alt="slider"
            className="mr-md-5 testimonials-carousel__image"
          />
          <div>
            <p className="testimonials-carousel__text">
              I got into DevCareer with no direction in the tech field,
              DevCareer gave me all the supports and fast-tracked my tech
              journey. Within the three months of Training, collaboration on
              Projects, mentorship, learning and support, I was transformed into
              a Software Engineer. Right now, I work with a Fintech company with
              a lot of experience in the bag.
            </p>
            <div className="testimonials-carousel__name">
              John Ajeigbe
              <br />
              <span className="testimonials-carousel__role">
                Frontend Developer
              </span>
            </div>
          </div>
        </div>

        <div className="d-md-flex align-items-center">
          <img
            src="https://res.cloudinary.com/broma/image/upload/v1605558212/devcareer/IMG-20200115-WA0015_-_Idris_Abolade_bmpupd.jpg"
            alt="slider"
            className="mr-md-5 testimonials-carousel__image"
          />
          <div>
            <p className="testimonials-carousel__text">
              DevCareers was the turning point of my Tech career, there won't be
              my success story in the tech industry without DevCareers. The
              mentorship I got from the #laptop4developers program was, in fact,
              a huge push to my technical and collaborative skills and right now
              I can easily pick up any technology and create magic with it
              whether individually or in a team. A big thank you to the guys at
              Devcareers
            </p>
            <div className="testimonials-carousel__name">
              Idris Olaoye <br />
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
