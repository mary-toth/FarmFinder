import React, { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function AddFarm() {
  const [newFarm, setNewFarm] = useState({
    name: '',
    address: '',
    city: '',
    description: '',
    phone: '',
    website: '',
    organic: false,
    meat: false,
    eggs: false,
    dairy: false,
  })

  function handleStringFieldChange(event) {
    const newAddressText = event.target.value
    const fieldName = event.target.name

    const newerFarm = { ...newFarm, [fieldName]: newAddressText }
    setNewFarm(newerFarm)
  }

  function handleBooleanFieldChange(event) {
    const newBoolean = event.target.checked
    const fieldName = event.target.name

    const newerFarm = { ...newFarm, [fieldName]: newBoolean }
    setNewFarm(newerFarm)
  }

  return (
    <>
      <div className="add-farm-msg"></div>

      <form>
        <ul className="flex-outer">
          <li className="add-farm-txt">Add a Farm</li>
          <li> Fill out the form below to add a farm to the database.</li>

          <li>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={newFarm.name}
              placeholder="Enter the farm's name"
              onChange={handleStringFieldChange}
            />
          </li>
          <li>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={newFarm.address}
              id="address"
              placeholder="Enter the farm's address"
              onChange={handleStringFieldChange}
            />
          </li>
          <li>
            <label htmlFor="city">City</label>
            <select name="city" className="city">
              <option value="tampa">Tampa</option>
              <option value="stpete">St. Pete</option>
              <option value="riverview">Riverview</option>
            </select>
          </li>
          <li>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={newFarm.phone}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              placeholder="XXX-XXX-XXXX"
              onChange={handleStringFieldChange}
            />
          </li>
          <li>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              value={newFarm.description}
              placeholder="Enter a description of the farm"
              onChange={handleStringFieldChange}
            ></textarea>
          </li>

          <li>
            <label htmlFor="website">Website</label>
            <input
              type="text"
              name="website"
              id="website"
              value={newFarm.website}
              placeholder="www.website.com"
              onChange={handleStringFieldChange}
            />
          </li>
          <li>
            <label htmlFor="organic">Certified Organic?</label>
            <select
              name="organic"
              className="organic"
              value={newFarm.organic}
              onChange={handleBooleanFieldChange}
            >
              <option>Choose an option</option>
              <option>Yes</option>
            </select>
          </li>
          <li>
            <label htmlFor="meat">Sells meat?</label>
            <select
              name="meat"
              className="meat"
              value={newFarm.meat}
              onChange={handleBooleanFieldChange}
            >
              <option>Choose an option</option>
              <option>Yes</option>
            </select>
          </li>
          <li>
            <label htmlFor="eggs">Sells eggs?</label>
            <select
              name="eggs"
              className="eggs"
              value={newFarm.eggs}
              onChange={handleBooleanFieldChange}
            >
              <option>Choose an option</option>
              <option>Yes</option>
            </select>
          </li>
          <li>
            <label htmlFor="dairy">Sells dairy?</label>
            <select
              name="dairy"
              className="dairy"
              value={newFarm.dairy}
              onChange={handleBooleanFieldChange}
            >
              <option>Choose an option</option>
              <option>Yes</option>
            </select>
          </li>
          <li>
            {/* make this button an input. input type=submit */}
            <button type="submit" className="submit">
              Submit
            </button>
          </li>
        </ul>
      </form>
    </>
  )
}
