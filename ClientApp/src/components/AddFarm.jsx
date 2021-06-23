import React, { useState, useHistory } from 'react'

export function AddFarm() {
  // const history = useHistory()

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
    const value = event.target.value
    const fieldName = event.target.name

    const newerFarm = { ...newFarm, [fieldName]: value }
    setNewFarm(newerFarm)
  }

  function handleBooleanFieldChange(event) {
    const checked = event.target.checked
    const fieldName = event.target.name

    const newerFarm = { ...newFarm, [fieldName]: checked }
    setNewFarm(newerFarm)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Farms', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newFarm),
    })
    if (response.code === 201) {
      // history.push('/')
    }
  }

  return (
    <>
      <div className="add-farm-msg"></div>

      <form onSubmit={handleFormSubmit}>
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
            <select
              name="city"
              className="city"
              // value={newFarm.city}
              onChange={handleStringFieldChange}
            >
              <option value="Tampa">Tampa</option>
              <option value="St. Pete">St. Pete</option>
              <option value="Riverview">Riverview</option>
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
          <section className="boolean-form">
            <li>
              <label htmlFor="organic">Certified Organic?</label>
              {/* <select
              name="organic"
              className="organic"
              value={newFarm.organic}
              onChange={handleBooleanFieldChange}
            > */}
              {/* <option>Choose an option</option>
              <option>Yes</option> */}
              <input
                type="checkbox"
                name="organic"
                onClick={handleBooleanFieldChange}
              ></input>
              {/* </select> */}
            </li>
            <li>
              <label htmlFor="meat">Sells meat?</label>
              {/* <select
              name="meat"
              className="meat"
              value={newFarm.meat}
              onChange={handleBooleanFieldChange}
            >
              <option>Choose an option</option>
              <option>Yes</option>
            </select> */}
              <input
                type="checkbox"
                name="meat"
                onClick={handleBooleanFieldChange}
              ></input>
            </li>
            <li>
              <label htmlFor="eggs">Sells eggs?</label>
              {/* <select
              name="eggs"
              className="eggs"
              value={newFarm.eggs}
              onChange={handleBooleanFieldChange}
            >
              <option>Choose an option</option>
              <option>Yes</option>
            </select> */}
              <input
                type="checkbox"
                name="eggs"
                onClick={handleBooleanFieldChange}
              ></input>
            </li>
            <li>
              <label htmlFor="dairy">Sells dairy?</label>
              {/* <select
              name="dairy"
              className="dairy"
              value={newFarm.dairy}
              onChange={handleBooleanFieldChange}
            >
              <option>Choose an option</option>
              <option>Yes</option>
            </select> */}
              <input
                type="checkbox"
                name="dairy"
                onClick={handleBooleanFieldChange}
              ></input>
            </li>
          </section>
          <li>
            <button type="submit" className="submit" onClick={handleFormSubmit}>
              Submit
            </button>
          </li>
        </ul>
      </form>
    </>
  )
}
