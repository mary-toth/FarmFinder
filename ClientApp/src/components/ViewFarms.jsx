import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function ViewFarms() {
  return (
    <>
      <section>
        <nav className="farmlist">
          <ul className="farmlist">
            <li>
              <img
                className="farmlistimage"
                src={
                  'https://images.squarespace-cdn.com/content/v1/5ac4165c9d5abb096069c163/1526611351559-0WDGD8E8QRBR9USSYSEY/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1274.JPG?format=1500w'
                }
              ></img>
            </li>
            <Link to="/farmdetails" className="farmName">
              Meacham Urban Farm
            </Link>
            <p>Address: 123 Main St</p>
            <p>City: Tampa</p>
          </ul>
        </nav>
        <nav className="farmlist">
          <ul className="farmlist">
            <li>
              <img
                className="farmlistimage"
                src={
                  'https://images.squarespace-cdn.com/content/v1/5ac4165c9d5abb096069c163/1526611351559-0WDGD8E8QRBR9USSYSEY/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1274.JPG?format=1500w'
                }
              ></img>
            </li>
            <Link to="/farmdetails" className="farmName">
              Meacham Urban Farm
            </Link>
            <p>Address: 123 Main St</p>
            <p>City: Tampa</p>
          </ul>
        </nav>
        <nav className="farmlist">
          <ul className="farmlist">
            <li>
              <img
                className="farmlistimage"
                src={
                  'https://images.squarespace-cdn.com/content/v1/5ac4165c9d5abb096069c163/1526611351559-0WDGD8E8QRBR9USSYSEY/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1274.JPG?format=1500w'
                }
              ></img>
            </li>
            <Link to="/farmdetails" className="farmName">
              Meacham Urban Farm
            </Link>
            <p>Address: 123 Main St</p>
            <p>City: Tampa</p>
          </ul>
        </nav>
        <nav className="farmlist">
          <ul className="farmlist">
            <li></li>
            <li className="name">Farm Name</li>
            <p>Address: 123 Main St</p>
            <p>City: Tampa</p>
          </ul>
        </nav>
        <nav className="farmlist">
          <ul className="farmlist">
            <li></li>
            <li className="name">Farm Name</li>
            <p>Address: 123 Main St</p>
            <p>City: Tampa</p>
          </ul>
        </nav>
        <nav className="farmlist">
          <ul className="farmlist">
            <li></li>
            <li className="name">
              <Link to="/farmdetails">Farm Name</Link>
            </li>
            <p>Address: 123 Main St</p>
            <p>City: Tampa</p>
          </ul>
        </nav>
        <nav className="farmlist">
          <ul className="farmlist">
            <li></li>
            <li className="name">Farm Name</li>
            <p>Address: 123 Main St</p>
            <p>City: Tampa</p>
          </ul>
        </nav>
        <nav className="farmlist">
          <ul className="farmlist">
            <li></li>
            <li className="name">Farm Name</li>
            <p>Address: 123 Main St</p>
            <p>City: Tampa</p>
          </ul>
        </nav>
        <nav className="farmlist">
          <ul className="farmlist">
            <li></li>
            <li className="name">Farm Name</li>
            <p>Address: 123 Main St</p>
            <p>City: Tampa</p>
          </ul>
        </nav>
      </section>

      {/* <section>
        <article className="farm">
          <ul>
            <li className="farmName">
              <Link to="/farmdetails"> Farm Name</Link>
            </li>
            <li className="farminfo">address</li>
            <li className="farminfo">phone</li>
          </ul>
        </article>
        <article className="farm">Farm Name</article>
        <article className="farm">Farm Name</article>
        <article className="farm">Farm Name</article>
        <article className="farm">Farm Name</article>
        <article className="farm">Farm Name</article>
        <article className="farm">Farm Name</article>
        <article className="farm">Farm Name</article>
        <article className="farm">Farm Name</article>
      </section> */}
    </>
  )
}
