import React, { useState } from "react"
import "../assets/scss/app.scss"

function Header() {
  //   const [toggle, setToggle] = useState(false)
  //   alert(toggle)
  return (
    <nav>
      <div className="header-content">
        <img
          src="https://res.cloudinary.com/dctmgu7mb/image/upload/v1601332391/devLogo_ocngza.png"
          alt="DevCareer_Logo"
          className="header-content_image"
        />

        <ul className="nav-links">
          <div className="nav-links_content">
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Resources</li>
            <li>Talents</li>
            <li>
              <button>Support Us</button>
            </li>
          </div>
          <img
            src="https://res.cloudinary.com/dctmgu7mb/image/upload/v1601335268/square_qdvc8c.png"
            alt="Hamburger_Menu"
            className="nav-links_hamburger"
            // onClick={() => {
            //   setToggle(!toggle)
            // }}
          />
        </ul>

        <ul className="nav-links_mobile">
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Resources</li>
          <li>Talents</li>
          <li>
            <button>Support Us</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Header
