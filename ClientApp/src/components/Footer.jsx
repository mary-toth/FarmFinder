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
            <a href="https://github.com/mary-toth">
              <img className="icon" src={github}></img>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mary-toth-a2004812b/">
              <img className="icon" src={linkedin}></img>
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}
