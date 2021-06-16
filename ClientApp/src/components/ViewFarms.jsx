import React, { useState, useEffect } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function ViewFarms() {
  const [farms, setFarms] = useState([])

  useEffect(() => {
    async function loadFarms() {
      const response = await fetch('/api/Farms')

      if (response.ok) {
        const json = await response.json()
        setFarms(json)
      }
    }
    loadFarms()
  }, [])

  return (
    <>
      <div className="filter">
        <ul className="filterbar">
          <h4>Find a Farm</h4>
          <li>
            <input
              className="search-farms"
              placeholder="search by farm name"
            ></input>
          </li>
          <ul className="filter">
            <li>
              <select name="city" id="city">
                <option value="city">City (choose one)</option>
                <option value="tampa">Tampa</option>
                <option value="stpete">St. Pete</option>
                <option value="riverview">Riverview</option>
              </select>
            </li>
            <li>
              <select name="organic" id="organic">
                <option value="organic">Certified Organic?</option>
                <option>Yes</option>
              </select>
            </li>
            <li>
              <select name="meat" id="meat">
                <option value="meat">Meat?</option>
                <option>Yes</option>
              </select>
            </li>
            <li>
              <select name="eggs" id="eggs">
                <option value="eggs">Eggs?</option>
                <option>Yes</option>
              </select>
            </li>
            <li>
              <select name="dairy" id="dairy">
                <option value="dairy">Dairy?</option>
                <option>Yes</option>
              </select>
            </li>
          </ul>
        </ul>
      </div>

      <section>
        <ul className="farmlist">
          {farms.map((farm) => (
            <li>
              <p className="farm-image">
                <img
                  className="farm-image"
                  src={
                    'https://images.squarespace-cdn.com/content/v1/5ac4165c9d5abb096069c163/1526611351559-0WDGD8E8QRBR9USSYSEY/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1274.JPG?format=1500w'
                  }
                ></img>
              </p>
              <Link to="/farmdetails" className="farmName">
                {farm.name}
              </Link>

              <p>{farm.address}</p>
              <p>Farm City</p>
            </li>
            // <img
            //   className="farmlistimage"
            //   src={
            //     'https://images.squarespace-cdn.com/content/v1/5ac4165c9d5abb096069c163/1526611351559-0WDGD8E8QRBR9USSYSEY/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1274.JPG?format=1500w'
            //   }
            // ></img>
            //   </li>
            // </li>
          ))}
        </ul>
      </section>
    </>
  )
}
