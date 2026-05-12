import { useState } from 'react'
import './index.css'

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    destination: '',
  })

  const [successMessage, setSuccessMessage] = useState('')

  function handleInputChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    setSuccessMessage(
      `Thanks ${formData.name}! Your trip request has been received.`,
    )

    setFormData({
      name: '',
      email: '',
      date: '',
      destination: '',
    })
  }

  return (
    <section className="section booking-section" id="booking">
      <div className="booking-card">
        <div className="booking-card-heading">
          <h2>Book now</h2>
          <p>
            Reserve your tropical escape by sharing a few quick details.
          </p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Placeholder"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <input
              id="destination"
              name="destination"
              type="text"
              placeholder="Example: Maldives"
              value={formData.destination}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              name="date"
              type="text"
              placeholder="11 October"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <button className="button primary-button form-button" type="submit">
            BOOK NOW
          </button>
        </form>
      </div>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </section>
  )
}

export default BookingForm
