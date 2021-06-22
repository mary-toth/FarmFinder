import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function AddFarm() {
  return (
    <>
      <div className="add-farm-msg"></div>

      <form>
        <ul className="flex-outer">
          <li className="add-farm-txt">Add a Farm</li>
          <li> Fill out the form below to add a farm to the database.</li>

          <li>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter the farm's name" />
          </li>
          <li>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter the farm's address"
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
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Enter a description of the farm"
            ></textarea>
          </li>

          <li>
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              placeholder="Enter the farm's website URL"
            />
          </li>
          <li>
            <label htmlFor="organic">Certified Organic?</label>
            <select name="organic" className="organic">
              <option>Choose an option</option>
              <option>Yes</option>
            </select>
          </li>
          <li>
            <label htmlFor="meat">Sells meat?</label>
            <select name="meat" className="meat">
              <option>Choose an option</option>
              <option>Yes</option>
            </select>
          </li>
          <li>
            <label htmlFor="eggs">Sells eggs?</label>
            <select name="eggs" className="eggs">
              <option>Choose an option</option>
              <option>Yes</option>
            </select>
          </li>
          <li>
            <label htmlFor="dairy">Sells dairy?</label>
            <select name="dairy" className="dairy">
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
