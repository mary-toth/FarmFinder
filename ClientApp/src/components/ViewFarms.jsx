import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

export function ViewFarms() {
  const [farms, setFarms] = useState([])
  const [filter, setFilter] = useState('')
  const [isOrganicChecked, setIsOrganicChecked] = useState(false)
  const [isMeatChecked, setIsMeatChecked] = useState(false)
  const [isEggsChecked, setIsEggsChecked] = useState(false)
  const [isDairyChecked, setIsDairyChecked] = useState(false)
  // const [isTampaSelected, setIsTampaSelected] = useState('tampa')
  // const [isStPeteSelected, setIsStPeteSelected] = useState('st. pete')
  // const [isRiverviewSelected, setIsRiverviewSelected] = useState('riverview')

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
  const handleClear = () => {
    setFilter('')
    if (isOrganicChecked) setIsOrganicChecked(!isOrganicChecked)
    if (isMeatChecked) setIsMeatChecked(!isMeatChecked)
    if (isEggsChecked) setIsEggsChecked(!isEggsChecked)
    if (isDairyChecked) setIsDairyChecked(!isDairyChecked)
  }

  return (
    <>
      <div className="filter">
        <h4>Find a Farm</h4>
      </div>
      <section className="filter-section">
        <ul className="filterbar">
          <ul className="filter">
            <li>
              <input
                type="text"
                className="search-farms"
                placeholder="search by farm name"
                // value={filter}
                onChange={function (event) {
                  setFilter(event.target.value)
                }}
              ></input>{' '}
              OR
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
            <li>
              <button
                name="clear-button"
                className="clear-button"
                onClick={handleClear}
              >
                Clear Filters
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
                {farm.photoURL ? (
                  <img
                    className="farm-image"
                    alt="Restaurant Photo"
                    width={200}
                    height={200}
                    src={farm.photoURL}
                  />
                ) : null}
              </p>
              <p className="farm-name">
                <Link to={`/farms/${farm.id}`}>{farm.name}</Link>
              </p>
              <p className="farm-address">
                {farm.address}, {farm.city} FL
              </p>
              <button className="view">
                <Link to={`/farms/${farm.id}`}>View Details</Link>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
