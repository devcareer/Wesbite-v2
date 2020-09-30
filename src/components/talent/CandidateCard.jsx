import React from "react"
import PropTypes from "prop-types"
function Card({ name, image, title, socials }) {
  return (
    <>
      <div className="card">
        <img src={image} className="card__img" alt={name} />
        <div className="card__body">
          <p className="card__title">{name}</p>
          <p className="card__text">{title}</p>
          <p className="card__company">DevCareer</p>

          {socials.map((each, idx) => (
            <div className="card__socials" key={idx}>
              {" "}
              <a href={each.twitter} target="_blank" rel="noreferrer">
                <img
                  src="https://res.cloudinary.com/gfellah45/image/upload/v1601474738/img/githubsvg_e9snoa.svg"
                  alt="twitter"
                />
              </a>
              <a href={each.github} target="_blank" rel="noreferrer">
                <img
                  src="https://res.cloudinary.com/gfellah45/image/upload/v1601474738/img/twitersvg_amzlth.svg"
                  alt="github"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  socials: PropTypes.array.isRequired,
}

export default Card
