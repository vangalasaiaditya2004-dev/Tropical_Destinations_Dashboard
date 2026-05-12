import './index.css'

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <p className="hero-kicker">Discover the beauty of the tropics</p>
        <h1>Tropical Destinations For Students</h1> 
        <p className="hero-description">
          Explore sunny islands, peaceful beaches, and affordable travel plans
          made for student adventures.
        </p>
        <a className="button primary-button" href="#destinations">
          See More
        </a>
      </div>

      <div className="hero-image-area" aria-hidden="true">
        <div className="circle circle-green"></div>
        <div className="circle circle-orange"></div>
        <img
          className="hero-traveler-image"
          src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=80"
          alt=""
        />
      </div>
    </section>
  )
}

export default HeroSection
