import React, { useState, useEffect } from 'react'
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
      <nav className="details">
        <ul className="details">
          <li>
            <img
              src={
                'https://images.squarespace-cdn.com/content/v1/5ac4165c9d5abb096069c163/1526611351559-0WDGD8E8QRBR9USSYSEY/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1274.JPG?format=1500w'
              }
            ></img>
          </li>
          <li className="farm-detail-name">{farmInfo.name}</li>

          <p className="farm-detail-txt">{farmInfo.description}</p>
          <div className="farm-detail-info">
            <li>Address: {farmInfo.address}</li>
            <li>City: {farmInfo.city}</li>
            <li>Phone: {farmInfo.phone}</li>
            <li>Organic? {farmInfo.organic}</li>
          </div>
        </ul>
      </nav>
    </>
  )
}
