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
    website: '',
    description: '',
    organic: '',
    meat: '',
    eggs: '',
    dairy: '',
    photoURL: '',
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

      <nav className="farm-detail-page">
        <ul className="farm-info">
          <li className="farm-info">
            {' '}
            <h2 className="name-header">{farmInfo.name}</h2>
          </li>
          <li className="farm-info">
            {farmInfo.photoURL ? (
              <img
                className="detail-photo"
                alt="farm Photo"
                width={280}
                height={280}
                src={farmInfo.photoURL}
              />
            ) : null}
          </li>
          <li className="farm-info">
            {farmInfo.address}, {farmInfo.city} FL
          </li>
          <li className="farm-info">{farmInfo.phone}</li>
          <li className="farm-info-description">{farmInfo.description}</li>
          <li className="farm-info"></li>
          <li className="farm-info">
            <button className="website">
              <a href={farmInfo.website}>Click here to visit their website!</a>
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
