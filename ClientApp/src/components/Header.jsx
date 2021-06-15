import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

export function Header() {
  return (
    <>
      <div className="dot">.</div>

      <header>
        <h2 className="name"> Farm Finder</h2>
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
