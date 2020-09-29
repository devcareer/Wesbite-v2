import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
function Card({ name, title, socials }) {
  return (
    <>
      <div className="card">
        <img
          src="https://res.cloudinary.com/gfellah45/image/upload/v1601374966/img/pictures_tdnnso.png"
          className="card-img"
          alt="candidate"
        />
        <div className="card-body">
          <p className="card-title">{name}</p>
          <p className="card-text">{title}</p>
          <p className="card-company">DevCareer</p>
          <div>
            {socials.map((each, idx) => (
              <div className="card-socials" key={idx}>
                {" "}
                <Link to={each.twitter}>
                  <img
                    src="https://res.cloudinary.com/gfellah45/image/upload/v1601374991/img/twitter_tqfwrj.png"
                    alt="twitter"
                  />
                </Link>
                <Link to={each.github}>
                  <img
                    src="https://res.cloudinary.com/gfellah45/image/upload/v1601374976/img/github_typexk.png"
                    alt="github"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  socials: PropTypes.array,
}

export default Card
