import React, { useState } from "react"
import "../../assets/scss/app.scss"

function Header() {
  const [mobileNav, setMobileNav] = useState(false)
  const [navHiddenClass, setNavHiddenClass] = useState("")

  return (
    <nav>
      <div className="header-content">
        <img
          src="https://res.cloudinary.com/dctmgu7mb/image/upload/v1601332391/devLogo_ocngza.png"
          alt="DevCareer_Logo"
          className="header-content__image"
        />

        <ul className="nav-links-desktop">
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Resources</li>
          <li>Talents</li>
          <li>
            <button className="button button--outline">Support Us</button>
          </li>
        </ul>

        <div
          onClick={() => {
            setMobileNav(!mobileNav)
            if (mobileNav) setNavHiddenClass("slide-out-left")
          }}
          className="mobile-nav-toggle"
        >
          {!mobileNav ? (
            <img
              src="https://res.cloudinary.com/drqltx8ye/image/upload/v1601483589/menu_1_l4desc.svg"
              alt="Hamburger icon"
              className="mobile-nav-toggle__open"
            />
          ) : (
            <img
              src="https://res.cloudinary.com/drqltx8ye/image/upload/v1601484000/close_1_bx0uzk.svg"
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
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Resources</li>
            <li>Talents</li>
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
