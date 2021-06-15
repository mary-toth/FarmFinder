import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { AddFarm } from './components/AddFarm'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { ViewFarms } from './components/ViewFarms'
import { FarmDetails } from './components/FarmDetails'

export function App() {
  return (
    <>
      <Header></Header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/farms">
          <ViewFarms />
        </Route>
        <Route exact path="/addfarm">
          <AddFarm />
        </Route>
        <Route exact path="/farmdetails">
          <FarmDetails />
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>

      <Footer />
    </>
  )
}
