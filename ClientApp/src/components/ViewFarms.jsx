import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

export function ViewFarms() {
  const [farms, setFarms] = useState([])
  const [filter, setFilter] = useState('')
  const [isOrganicChecked, setIsOrganicChecked] = useState(true)
  const [isMeatChecked, setIsMeatChecked] = useState(true)
  const [isEggsChecked, setIsEggsChecked] = useState(true)
  const [isDairyChecked, setIsDairyChecked] = useState(true)

  const history = useHistory()

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

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isOrganicChecked && !isMeatChecked && !isEggsChecked && !isDairyChecked)
      setFilter('o')
    else if (
      isOrganicChecked &&
      isMeatChecked &&
      !isEggsChecked &&
      !isDairyChecked
    )
      setFilter('om')
    else if (
      isOrganicChecked &&
      !isMeatChecked &&
      isEggsChecked &&
      !isDairyChecked
    )
      setFilter('oe')
    else if (
      isOrganicChecked &&
      !isMeatChecked &&
      !isEggsChecked &&
      isDairyChecked
    )
      setFilter('od')
    else if (
      isOrganicChecked &&
      isMeatChecked &&
      isEggsChecked &&
      !isDairyChecked
    )
      setFilter('ome')
    else if (
      isOrganicChecked &&
      isMeatChecked &&
      !isEggsChecked &&
      !isDairyChecked
    )
      setFilter('omd')
    else if (
      isOrganicChecked &&
      isMeatChecked &&
      isEggsChecked &&
      isDairyChecked
    )
      setFilter('omed')
    else if (
      !isOrganicChecked &&
      isMeatChecked &&
      !isEggsChecked &&
      !isDairyChecked
    )
      setFilter('m')
    else if (
      !isOrganicChecked &&
      isMeatChecked &&
      isEggsChecked &&
      !isDairyChecked
    )
      setFilter('me')
    else if (
      !isOrganicChecked &&
      isMeatChecked &&
      !isEggsChecked &&
      isDairyChecked
    )
      setFilter('md')
    else if (
      !isOrganicChecked &&
      isMeatChecked &&
      isEggsChecked &&
      isDairyChecked
    )
      setFilter('mde')
    else if (
      !isOrganicChecked &&
      !isMeatChecked &&
      isEggsChecked &&
      !isDairyChecked
    )
      setFilter('e')
    else if (
      !isOrganicChecked &&
      !isMeatChecked &&
      isEggsChecked &&
      isDairyChecked
    )
      setFilter('ed')
    else if (
      !isOrganicChecked &&
      !isMeatChecked &&
      !isEggsChecked &&
      isDairyChecked
    )
      setFilter('d')
  }

  const handleOrganicChange = () => {
    setIsOrganicChecked(!isOrganicChecked)
  }

  const handleMeatChange = () => {
    setIsMeatChecked(!isMeatChecked)
  }
  const handleEggsChange = () => {
    setIsEggsChecked(!isEggsChecked)
  }
  const handleDairyChange = () => {
    setIsDairyChecked(!isDairyChecked)
  }

  return (
    <>
      <div className="filter">
        <h4>Find a Farm</h4>
      </div>
      <section className="filter-section">
        <ul className="filterbar">
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
                value="o"
                checked={isOrganicChecked}
                onChange={handleOrganicChange}
              />
              <label for="organic">Certified Organic?</label>
            </li>
            <li>
              <li>
                <input
                  type="checkbox"
                  className="meat"
                  value="m"
                  checked={isMeatChecked}
                  onChange={handleMeatChange}
                />
                <label for="meat">Meat?</label>
              </li>
            </li>
            <li>
              <input
                type="checkbox"
                className="eggs"
                value="e"
                checked={isEggsChecked}
                onChange={handleEggsChange}
              />
              <label for="eggs">Eggs?</label>
            </li>
            <li>
              <input
                type="checkbox"
                className="dairy"
                value="d"
                checked={isDairyChecked}
                onChange={handleDairyChange}
              />
              <label for="dairy">Dairy?</label>
            </li>
            <li>
              <button
                name="list-button"
                className="list-button"
                onClick={handleSubmit}
              >
                Search
              </button>
            </li>
          </ul>
        </ul>
      </section>

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
