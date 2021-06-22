import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function ViewFarms() {
  const [farms, setFarms] = useState([])
  const [filter, setFilter] = useState('')
  // const [organic, setOrganic] = useState('')
  // const [meat, setMeat] = useState('')
  // const [eggs, setEggs] = useState('')
  // const [dairy, setDairy] = useState('')

  useEffect(() => {
    async function loadFarms() {
      const url =
        filter.length === 0 ? '/api/Farms' : `/api/Farms?filter=${filter}`
      const response = await fetch(url)

      if (response.ok) {
        const json = await response.json()
        setFarms(json)
      }
    }
    loadFarms()
  }, [filter])

  return (
    <>
      <div className="filter">
        <ul className="filterbar">
          <h4>Find a Farm</h4>
          <li>
            <input
              type="text"
              className="search-farms"
              placeholder="search by farm name"
              // value={filter}
              onChange={function (event) {
                setFilter(event.target.value)
              }}
            ></input>
          </li>
          <li>
            <select
              name="city"
              className="city"
              onChange={function (event) {
                setFilter(event.target.value)
              }}
            >
              <option value="city">City (choose one)</option>
              <option value="tampa">Tampa</option>
              <option value="st. pete">St. Pete</option>
              <option value="riverview">Riverview</option>
            </select>
          </li>
          <ul className="filter">
            <li>
              <input
                type="checkbox"
                className="organic"
                value="organic"
                onChange={function (event) {
                  setFilter(event.target.value)
                }}
              />
              <label for="organic">Certified Organic?</label>
            </li>
            <li>
              <li>
                <input
                  type="checkbox"
                  className="meat"
                  value="meat"
                  onChange={function (event) {
                    setFilter(event.target.value)
                  }}
                />
                <label for="meat">Meat?</label>
              </li>
            </li>
            <li>
              <input
                type="checkbox"
                className="eggs"
                value="eggs"
                onChange={function (event) {
                  setFilter(event.target.value)
                }}
              />
              <label for="eggs">Eggs?</label>
            </li>
            <li>
              <input
                type="checkbox"
                className="dairy"
                value="dairy"
                onChange={function (event) {
                  setFilter(event.target.value)
                }}
              />
              <label for="dairy">Dairy?</label>
            </li>
          </ul>
        </ul>
      </div>

      <section>
        <ul className="farmlist">
          {farms.map((farm) => (
            <li key={farm.id}>
              <p className="farm-image">
                <img
                  className="farm-image"
                  src={
                    'https://images.squarespace-cdn.com/content/v1/5ac4165c9d5abb096069c163/1526611351559-0WDGD8E8QRBR9USSYSEY/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1274.JPG?format=1500w'
                  }
                ></img>
              </p>
              <p className="farm-name">
                <Link to={`/farms/${farm.id}`}>{farm.name}</Link>
              </p>

              <p>{farm.address}</p>
              <p>{farm.city}</p>
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
