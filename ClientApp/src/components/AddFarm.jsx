import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function AddFarm() {
  return (
    <>
      <form>
        <ul className="flex-outer">
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
            <select name="city" id="city">
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
          <ul className="flex-inner">
            <li>
              <label htmlFor="organic">Certified Organic?</label>
              <select name="organic" id="organic">
                <option>Choose an option</option>
                <option>Yes</option>
              </select>
            </li>
            <li>
              <label htmlFor="meat">Sells meat?</label>
              <select name="meat" id="meat">
                <option>Choose an option</option>
                <option>Yes</option>
              </select>
            </li>
            <li>
              <label htmlFor="eggs">Sells eggs?</label>
              <select name="eggs" id="eggs">
                <option>Choose an option</option>
                <option>Yes</option>
              </select>
            </li>
            <li>
              <label htmlFor="dairy">Sells milk?</label>
              <select name="milk" id="milk">
                <option>Choose an option</option>
                <option>Yes</option>
              </select>
            </li>
          </ul>
          <li>
            <button type="submit" className="submit">
              Submit
            </button>
          </li>
        </ul>
      </form>
    </>
  )
}
