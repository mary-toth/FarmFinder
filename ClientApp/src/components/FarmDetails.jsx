import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'

export function FarmDetails() {
  const params = useParams()
  const id = params.id
  const [farmInfo, setFarmInfo] = useState({
    id: undefined,
    name: '',
    address: '',
    city: '',
    phone: '',
    description: '',
    organic: '',
    meat: '',
    eggs: '',
    dairy: '',
  })

  useState(() => {
    const fetchFarm = async () => {
      const response = await fetch(`/api/Farms/${id}`)
      const apiData = await response.json()

      setFarmInfo(apiData)
    }

    fetchFarm()
  }, [id])

  return (
    <>
      {/* <div className="head"></div> */}

      <nav className="farm-detail-page">
        <ul className="farm-info">
          <li className="farm-info">
            {' '}
            <h2 className="name-header">{farmInfo.name}</h2>
          </li>
          <li className="farm-info">
            <img
              className="farm-info"
              src="https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            ></img>
          </li>
          <li className="farm-info">
            {farmInfo.address}, {farmInfo.city} FL
          </li>
          <li className="farm-info">Phone: {farmInfo.phone}</li>
          <li className="farm-info-description">{farmInfo.description}</li>
          <li className="farm-info"></li>
          <li className="farm-info">
            <button className="website">
              Click here to visit their website!
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
