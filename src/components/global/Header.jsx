import React, { useState } from "react"
import { Link } from "gatsby"
import "../../assets/scss/app.scss"

function Header() {
  const [mobileNav, setMobileNav] = useState(false)
  const [navHiddenClass, setNavHiddenClass] = useState("")

  return (
    <nav>
      <div className="header-content">
        <Link to="/">
        <img
          src="https://res.cloudinary.com/dctmgu7mb/image/upload/v1601332391/devLogo_ocngza.png"
          alt="DevCareer_Logo"
          className="header-content__image"
          />
          </Link>

        <ul className="nav-links-desktop">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="#">Resources</Link>
          </li>
          <li>
            <Link to="/talent">Talents</Link>
          </li>
          <li>
            <Link to="/support-us"><button className="button button--outline">Support Us</button></Link>
          </li>
        </ul>

        <div
          onClick={() => {
            setMobileNav(!mobileNav)
            if (mobileNav) {
              setNavHiddenClass("slide-out-left")
              document.body.style.position = ""
            } else {
              document.body.style.position = "fixed"
            }
          }}
          onKeyDown={() => {
            setMobileNav(!mobileNav)
            if (mobileNav) {
              setNavHiddenClass("slide-out-left")
              document.body.style.position = ""
            } else {
              document.body.style.position = "fixed"
            }
          }}
          className="mobile-nav-toggle"
          role="button"
          tabIndex={0}
        >
          {!mobileNav ? (
            <img
              src="https://res.cloudinary.com/drqltx8ye/image/upload/v1601483589/menu_1_l4desc.svg"
              alt="Hamburger icon"
              className="mobile-nav-toggle__open"
            />
          ) : (
            <img
              src="https://res.cloudinary.com/drqltx8ye/image/upload/v1601644095/close_2_vluprf.svg"
              alt="Close icon"
              className="mobile-nav-toggle__close"
            />
          )}
        </div>

        <div
          className={`mobile-nav ${
            mobileNav ? "mobile-nav--visible slide-in-left" : navHiddenClass
          }`}
        >
          <ul className="mobile-nav__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="#">Resources</Link>
            </li>
            <li>
              <Link to="/talent">Talents</Link>
            </li>
            <li>
              <button className="button button--outline">Support Us</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header
