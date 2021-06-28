import React from 'react'
import github from '../images/github2.png'
import linkedin from '../images/li.png'

export function Footer() {
  return (
    <>
      <footer>
        <h2 className="footer-left">made by mary toth 2021</h2>
        <ul className="footer-list">
          <li>
            <img className="icon" src={github}></img>
          </li>
          <li>
            <img className="icon" src={linkedin}></img>
          </li>
        </ul>
      </footer>
    </>
  )
}
