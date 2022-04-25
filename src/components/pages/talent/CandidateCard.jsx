import React from "react"
import PropTypes from "prop-types"
import { GrLinkedin } from "react-icons/gr"
function Card({ name, image, title, socials, company }) {
  return (
    <>
      <div className="candidate m-4">
        <img src={image} className="candidate__img" alt={name} />
        <div className="candidate__body">
          <p className="candidate__title">{name}</p>
          <p className="candidate__text">{title}</p>
          <p className="candidate__company">{company}</p>

          {socials.map((each, idx) => (
            <div className="candidate__socials" key={idx}>
              {" "}
              <a href={each.twitter} target="_blank" rel="noreferrer">
                <img
                  src="https://res.cloudinary.com/gfellah45/image/upload/v1601474738/img/githubsvg_e9snoa.svg"
                  alt="twitter"
                />
              </a>
              <a href={each.github} target="_blank" rel="noreferrer">
                <GrLinkedin style={{ color: "#2b3236" }} />
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
  company: PropTypes.string.isRequired,
  socials: PropTypes.array.isRequired,
}

export default Card
