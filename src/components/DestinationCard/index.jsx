import './index.css'

const fallbackImage =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80'

function DestinationCard({ destination }) {
  return (
    <article className="destination-card">
      <img
        src={destination.image || fallbackImage}
        alt={destination.name}
        className="destination-image"
      />

      <div className="destination-info">
        <div className="card-title-row">
          <h3>{destination.name}</h3>
          <span className="rating">Rating: {destination.rating}</span>
        </div>
        <p className="location">{destination.location}</p>
        <span className="tag">{destination.tag}</span>
      </div>
    </article>
  )
}

export default DestinationCard
