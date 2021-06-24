import React from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <>
      <div className="dot">.</div>

      <header>
        <h2 className="name">
          <Link className="farm-finder" to="/">
            <img
              className="header-icon"
              src="https://i2.wp.com/www.farmtoyoudirect.com.au/wp-content/uploads/2020/08/cropped-farmtoyoudirect_icon.png?fit=512%2C512&ssl=1"
            ></img>
            Farm Finder
          </Link>
        </h2>
        <nav>
          <ul className="nav_links">
            <li>
              <Link to="/">Home</Link>
            </li>
            |
            <li>
              <Link to="/farms">Find a Farm</Link>
            </li>
            |
            <li>
              <Link to="/addfarm">Add a Farm</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
