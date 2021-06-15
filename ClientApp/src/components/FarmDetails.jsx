import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function FarmDetails() {
  return (
    <>
      <nav className="details">
        <ul className="details">
          <li>
            <img
              src={
                'https://images.squarespace-cdn.com/content/v1/5ac4165c9d5abb096069c163/1526611351559-0WDGD8E8QRBR9USSYSEY/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1274.JPG?format=1500w'
              }
            ></img>
          </li>
          <li className="name">Farm Name</li>

          <p>Address: 123 Main St</p>
          <p>Phone: 123-456-7890</p>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, numquam aspernatur? Eaque, dicta quaerat tempore odio
            nesciunt sapiente. Sint praesentium eius perspiciatis itaque odio et
            dicta nobis. Dolorum, ab dignissimos?
          </h4>
          <p>Certified Organic</p>
          <p>Sells Meat: Yes</p>
          <p>Sells Eggs: Yes</p>
        </ul>
      </nav>
    </>
  )
}
