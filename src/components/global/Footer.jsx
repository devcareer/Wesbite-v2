import React from "react"
import { Link } from "gatsby"
import { GrTwitter, GrLinkedin } from "react-icons/gr"

function Footer() {
  const footerLinks = [
    {
      text: "Create CV",
      location: "https://devcareer.io/join",
      class: "link",
    },
    {
      text: "FAQ's",
      location: "/faq",
      class: "link",
    },
    {
      text: "Gallery",
      location: "/gallery",
      class: "link",
    },
    {
      text: "Contact Us",
      location: "/contact-us",
      class: "link",
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__content">
          <h1 className="footer__header">Stay Updated</h1>
          <p className="footer__text">
            Subscribe to stay connected to our activities <br /> to know when
            your next program will be holding
          </p>
        </div>
        <form action="">
          <div className="inputs">
            <input
              type="email"
              placeholder="Email Address"
              className="form__input"
            />
            <button className="form__btn">Subscribe</button>
          </div>
        </form>
        {/*  */}
        <div className="footer__links">
          <ul className="links">
            {footerLinks.map((footerLink, index) => {
              return (
                <li className={footerLink.class} key={index}>
                  <Link to={footerLink.location}>{footerLink.text}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="social__links">
          <div className="icons">
            <Link to="https://twitter.com/dev_careers" className="icon">
              <GrTwitter />
            </Link>
            <Link
              to="https://www.linkedin.com/company/devcareers/"
              className="icon"
            >
              <GrLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
