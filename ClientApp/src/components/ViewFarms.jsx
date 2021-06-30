import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function ViewFarms() {
  const [farms, setFarms] = useState([])
  const [filter, setFilter] = useState('')
  const [isOrganicChecked, setIsOrganicChecked] = useState(false)
  const [isMeatChecked, setIsMeatChecked] = useState(false)
  const [isEggsChecked, setIsEggsChecked] = useState(false)
  const [isDairyChecked, setIsDairyChecked] = useState(false)
  const [isTampaSelected, setIsTampaSelected] = useState(false)
  const [isStPeteSelected, setIsStPeteSelected] = useState(false)

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

    if (
      !isTampaSelected &&
      isStPeteSelected &&
      !isOrganicChecked &&
      !isMeatChecked &&
      !isEggsChecked &&
      !isDairyChecked
    )
      setFilter('st. pete')
    if (
      isTampaSelected &&
      !isStPeteSelected &&
      !isOrganicChecked &&
      !isMeatChecked &&
      !isEggsChecked &&
      !isDairyChecked
    )
      setFilter('tampa')

    if (isOrganicChecked && !isMeatChecked && !isEggsChecked && !isDairyChecked)
      setFilter('o')

    if (!isOrganicChecked && isMeatChecked && !isEggsChecked && !isDairyChecked)
      setFilter('m')
    if (!isOrganicChecked && !isMeatChecked && isEggsChecked && !isDairyChecked)
      setFilter('e')
    if (!isOrganicChecked && !isMeatChecked && !isEggsChecked && isDairyChecked)
      setFilter('d')
    if (
      isTampaSelected &&
      !isStPeteSelected &&
      isOrganicChecked &&
      !isMeatChecked &&
      !isEggsChecked &&
      !isDairyChecked
    )
      setFilter('to')
    if (
      isTampaSelected &&
      !isStPeteSelected &&
      !isOrganicChecked &&
      isMeatChecked &&
      !isEggsChecked &&
      !isDairyChecked
    )
      setFilter('tm')
    if (
      isTampaSelected &&
      !isStPeteSelected &&
      !isOrganicChecked &&
      !isMeatChecked &&
      !isEggsChecked &&
      isDairyChecked
    )
      setFilter('td')

    if (
      !isTampaSelected &&
      isStPeteSelected &&
      isOrganicChecked &&
      !isMeatChecked &&
      !isEggsChecked &&
      !isDairyChecked
    )
      setFilter('so')
    if (
      !isTampaSelected &&
      isStPeteSelected &&
      !isOrganicChecked &&
      !isMeatChecked &&
      isEggsChecked &&
      !isDairyChecked
    )
      setFilter('se')
    if (
      !isTampaSelected &&
      isStPeteSelected &&
      !isOrganicChecked &&
      !isMeatChecked &&
      !isEggsChecked &&
      isDairyChecked
    )
      setFilter('sd')
    if (
      !isTampaSelected &&
      isStPeteSelected &&
      !isOrganicChecked &&
      isMeatChecked &&
      !isEggsChecked &&
      !isDairyChecked
    )
      setFilter('sm')
    if (isOrganicChecked && isMeatChecked && !isEggsChecked && !isDairyChecked)
      setFilter('om')
    if (isOrganicChecked && !isMeatChecked && isEggsChecked && !isDairyChecked)
      setFilter('oe')
    if (isOrganicChecked && !isMeatChecked && !isEggsChecked && isDairyChecked)
      setFilter('od')

    if (
      isTampaSelected &&
      !isStPeteSelected &&
      !isOrganicChecked &&
      !isMeatChecked &&
      isEggsChecked &&
      !isDairyChecked
    )
      setFilter('te')
    if (!isOrganicChecked && isMeatChecked && isEggsChecked && !isDairyChecked)
      setFilter('me')
    if (!isOrganicChecked && isMeatChecked && !isEggsChecked && isDairyChecked)
      setFilter('md')
    if (!isOrganicChecked && !isMeatChecked && isEggsChecked && isDairyChecked)
      setFilter('ed')
    if (
      isTampaSelected &&
      !isStPeteSelected &&
      isOrganicChecked &&
      isMeatChecked &&
      !isEggsChecked &&
      !isDairyChecked
    )
      setFilter('tom')
    if (
      isStPeteSelected &&
      !isTampaSelected &&
      isOrganicChecked &&
      isMeatChecked &&
      !isEggsChecked &&
      !isDairyChecked
    )
      setFilter('som')
    if (!isOrganicChecked && isMeatChecked && isEggsChecked && isDairyChecked)
      setFilter('mde')

    if (
      isTampaSelected &&
      !isStPeteSelected &&
      !isOrganicChecked &&
      !isMeatChecked &&
      isEggsChecked &&
      isDairyChecked
    )
      setFilter('ted')
    if (
      !isTampaSelected &&
      isStPeteSelected &&
      !isOrganicChecked &&
      !isMeatChecked &&
      isEggsChecked &&
      isDairyChecked
    )
      setFilter('sed')
    if (
      isTampaSelected &&
      !isStPeteSelected &&
      isOrganicChecked &&
      !isMeatChecked &&
      isEggsChecked &&
      !isDairyChecked
    )
      setFilter('toe')
    if (
      !isTampaSelected &&
      isStPeteSelected &&
      isOrganicChecked &&
      !isMeatChecked &&
      isEggsChecked &&
      !isDairyChecked
    )
      setFilter('soe')

    if (
      isTampaSelected &&
      !isStPeteSelected &&
      isOrganicChecked &&
      !isMeatChecked &&
      !isEggsChecked &&
      isDairyChecked
    )
      setFilter('tod')
    if (isOrganicChecked && isMeatChecked && isEggsChecked && !isDairyChecked)
      setFilter('ome')
    if (
      isTampaSelected &&
      !isStPeteSelected &&
      !isOrganicChecked &&
      isMeatChecked &&
      isEggsChecked &&
      !isDairyChecked
    )
      setFilter('tme')
    if (isOrganicChecked && isMeatChecked && !isEggsChecked && isDairyChecked)
      setFilter('omd')
    if (
      !isTampaSelected &&
      isStPeteSelected &&
      isOrganicChecked &&
      !isMeatChecked &&
      !isEggsChecked &&
      isDairyChecked
    )
      setFilter('sod')

    if (
      !isTampaSelected &&
      isStPeteSelected &&
      !isOrganicChecked &&
      isMeatChecked &&
      isEggsChecked &&
      !isDairyChecked
    )
      setFilter('sme')

    if (
      isTampaSelected &&
      !isStPeteSelected &&
      !isOrganicChecked &&
      isMeatChecked &&
      !isEggsChecked &&
      isDairyChecked
    )
      setFilter('tmd')
    if (
      !isTampaSelected &&
      isStPeteSelected &&
      !isOrganicChecked &&
      isMeatChecked &&
      !isEggsChecked &&
      isDairyChecked
    )
      setFilter('smd')

    if (
      isTampaSelected &&
      !isStPeteSelected &&
      !isOrganicChecked &&
      isMeatChecked &&
      isEggsChecked &&
      isDairyChecked
    )
      setFilter('tmde')
    if (
      isTampaSelected &&
      !isStPeteSelected &&
      isOrganicChecked &&
      isMeatChecked &&
      isEggsChecked &&
      !isDairyChecked
    )
      setFilter('tome')
    if (
      !isTampaSelected &&
      isStPeteSelected &&
      isOrganicChecked &&
      isMeatChecked &&
      isEggsChecked &&
      !isDairyChecked
    )
      setFilter('some')

    if (
      isTampaSelected &&
      !isStPeteSelected &&
      isOrganicChecked &&
      isMeatChecked &&
      !isEggsChecked &&
      isDairyChecked
    )
      setFilter('tomd')
    if (
      !isTampaSelected &&
      isStPeteSelected &&
      isOrganicChecked &&
      isMeatChecked &&
      !isEggsChecked &&
      isDairyChecked
    )
      setFilter('somd')

    if (isOrganicChecked && isMeatChecked && isEggsChecked && isDairyChecked)
      setFilter('omed')
    if (
      !isTampaSelected &&
      isStPeteSelected &&
      !isOrganicChecked &&
      isMeatChecked &&
      isEggsChecked &&
      isDairyChecked
    )
      setFilter('smde')
    if (
      isTampaSelected &&
      !isStPeteSelected &&
      isOrganicChecked &&
      isMeatChecked &&
      isEggsChecked &&
      isDairyChecked
    )
      setFilter('tomed')
    if (
      !isTampaSelected &&
      isStPeteSelected &&
      isOrganicChecked &&
      isMeatChecked &&
      isEggsChecked &&
      isDairyChecked
    )
      setFilter('somed')
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
  const handleTampaSelect = () => {
    setIsTampaSelected(!isTampaSelected)
  }
  const handleStPeteSelect = () => {
    setIsStPeteSelected(!isStPeteSelected)
  }

  const handleClear = () => {
    setFilter('')
    setIsOrganicChecked(false)
    setIsMeatChecked(false)
    setIsEggsChecked(false)
    setIsDairyChecked(false)
    setIsTampaSelected(false)
    setIsStPeteSelected(false)
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
                value={
                  isTampaSelected
                    ? 'tampa'
                    : isStPeteSelected
                    ? 'st. pete'
                    : 'city'
                }
                onChange={function (event) {
                  if (event.target.value === 'tampa') {
                    setIsTampaSelected(true)
                    setIsStPeteSelected(false)
                  }
                  if (event.target.value === 'st. pete') {
                    setIsTampaSelected(false)
                    setIsStPeteSelected(true)
                  }
                  if (event.target.value === 'city') {
                    setIsStPeteSelected(false)
                    setIsTampaSelected(false)
                  }
                }}
              >
                <option value="city">City (choose one)</option>
                <option value="tampa">Tampa</option>
                <option value="st. pete">St. Pete</option>
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
