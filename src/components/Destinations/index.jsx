import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar'
import DestinationCard from '../DestinationCard'
import './index.css'

const API_URL =
  'https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/19e5009c-c751-4324-a3fe-3a29d46587f2_destinationData.json'

function Destinations() {
  const [destinations, setDestinations] = useState([])
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getDestinations() {
      const response = await fetch(API_URL)
      const data = await response.json()

      setDestinations(data)
      setIsLoading(false)
    }

    getDestinations()
  }, [])

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchText.toLowerCase()),
  )

  return (
    <section className="section destinations-section" id="destinations">
      <div className="section-heading">
        <p className="section-label">Top destinations</p>
        <h2>Pick your next tropical escape</h2>
        <p>Browse handpicked beach destinations and quickly search by name.</p>
      </div>

      <SearchBar searchText={searchText} onSearchChange={setSearchText} />

      {isLoading && <p className="message">Loading destinations...</p>}

      {!isLoading && filteredDestinations.length === 0 && (
        <p className="message">No such destination</p>
      )}

      <div className="destinations-grid">
        {filteredDestinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  )
}

export default Destinations
