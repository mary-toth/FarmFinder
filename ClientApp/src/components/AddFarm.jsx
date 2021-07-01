import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useDropzone } from 'react-dropzone'

export function AddFarm() {
  const history = useHistory()
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
    photoURL: '',
  })
  const [isUploading, setIsUploading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })

  async function onDropFile(acceptedFiles) {
    // Do something with the files
    const fileToUpload = acceptedFiles[0]
    console.log(fileToUpload)

    setIsUploading(true)

    // Create a formData object so we can send this
    // to the API that is expecting som form data.
    const formData = new FormData()

    // Append a field that is the form upload itself
    formData.append('file', fileToUpload)

    try {
      // Use fetch to send an authorization header and
      // a body containing the form data with the file
      const response = await fetch('/api/Uploads', {
        method: 'POST',
        headers: {},
        body: formData,
      })

      // If we receive a 200 OK response, set the
      // URL of the photo in our state so that it is
      // sent along when creating the restaurant,
      // otherwise show an error
      if (response.status === 200) {
        const apiResponse = await response.json()

        const url = apiResponse.url

        setNewFarm({ ...newFarm, photoURL: url })
      } else {
        setErrorMessage('Unable to upload image')
      }
    } catch {
      // Catch any network errors and show the user we could not process their upload
      // console.debug(error)
      setErrorMessage('Unable to upload image')
    }

    setIsUploading(false)
  }

  let dropZoneMessage = 'Drag a picture of the farm here to upload!'

  if (isUploading) {
    dropZoneMessage = 'Uploading...'
  }

  if (isDragActive) {
    dropZoneMessage = 'Drop the files here ...'
  }

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
    const json = await response.json()

    if (response.status === 400) {
      setErrorMessage(Object.values(json.errors).join(' '))
    } else {
      history.push('/farms')
    }
  }

  return (
    <>
      <div className="add-farm-msg"></div>

      <form className="add-farm" onSubmit={handleFormSubmit}>
        <ul className="flex-outer">
          <li className="add-farm-txt">Add a Farm</li>
          <li> Fill out the form below to add a farm to the database.</li>

          <li className="error-msg">
            {errorMessage ? <p>{errorMessage}</p> : null}
          </li>
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
              className="add-city"
              onChange={handleStringFieldChange}
            >
              <option value="choose">Choose one:</option>
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
              placeholder="https://www.website.com (https:// is required)"
              onChange={handleStringFieldChange}
            />
          </li>
          <section className="boolean-form">
            <li>
              <label htmlFor="organic">Certified Organic?</label>

              <input
                type="checkbox"
                name="organic"
                onClick={handleBooleanFieldChange}
              ></input>
            </li>
            <li>
              <label htmlFor="meat">Sells meat?</label>

              <input
                type="checkbox"
                name="meat"
                onClick={handleBooleanFieldChange}
              ></input>
            </li>
            <li>
              <label htmlFor="eggs">Sells eggs?</label>
              <input
                type="checkbox"
                name="eggs"
                onClick={handleBooleanFieldChange}
              ></input>
            </li>
            <li>
              <label htmlFor="dairy">Sells dairy?</label>

              <input
                type="checkbox"
                name="dairy"
                onClick={handleBooleanFieldChange}
              ></input>
            </li>
          </section>

          {newFarm.photoURL ? (
            <p>
              <img
                className="farm-photo"
                alt="Farm Photo"
                width={200}
                height={200}
                src={newFarm.photoURL}
              />
            </p>
          ) : null}
          <div className="img-upload">
            <div className="file-drop-zone">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {dropZoneMessage}
              </div>
            </div>
          </div>

          <li>
            <button type="submit" className="submit" onClick={handleFormSubmit}>
              Add Farm
            </button>
          </li>
        </ul>
      </form>
    </>
  )
}
