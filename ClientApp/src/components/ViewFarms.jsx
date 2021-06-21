import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function ViewFarms() {
  const [farms, setFarms] = useState([])
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    async function loadFarms() {
      const url =
        filterText.length === 0
          ? '/api/Farms'
          : `/api/Farms?filter=${filterText}`
      const response = await fetch(url)

      if (response.ok) {
        const json = await response.json()
        setFarms(json)
      }
    }
    loadFarms()
  }, [filterText])

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
              value={filterText}
              onChange={function (event) {
                setFilterText(event.target.value)
              }}
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
              <input
                type="checkbox"
                id="organic"
                value="organic"
                onChange={function (event) {
                  setFilterText(event.target.value)
                }}
              />
              <label for="organic">Certified Organic?</label>
            </li>
            <li>
              <li>
                <input
                  type="checkbox"
                  id="meat"
                  value="meat"
                  onChange={function (event) {
                    setFilterText(event.target.value)
                  }}
                />
                <label for="meat">Meat?</label>
              </li>
            </li>
            <li>
              <input
                type="checkbox"
                id="eggs"
                value="eggs"
                onChange={function (event) {
                  setFilterText(event.target.value)
                }}
              />
              <label for="eggs">Eggs?</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="dairy"
                value="dairy"
                onChange={function (event) {
                  setFilterText(event.target.value)
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
              <Link to={`/farms/${farm.id}`}>{farm.name}</Link>

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
