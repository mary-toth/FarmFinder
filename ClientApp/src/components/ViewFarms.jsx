import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function ViewFarms() {
  return (
    <>
      <section>
        <article className="farm">
          <ul>
            <li className="farmName">
              <Link to="/farmdetails"> Farm Name</Link>
            </li>
            <li className="farminfo">description</li>
            <li className="farminfo">address</li>
            <li className="farminfo">phone</li>
          </ul>
        </article>
        <article className="farm">Farm Name</article>
        <article className="farm">Farm Name</article>
        <article className="farm">Farm Name</article>
        <article className="farm">Farm Name</article>
        <article className="farm">Farm Name</article>
        <article className="farm">Farm Name</article>
        <article className="farm">Farm Name</article>
        <article className="farm">Farm Name</article>
      </section>
    </>
  )
}
