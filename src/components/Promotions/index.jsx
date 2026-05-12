import './index.css'

function Promotions() {
  return (
    <section className="promotion-section" id="membership">
      <div>
        <p className="section-label">Student offer</p>
        <h2>Save 30% on your first tropical group trip</h2>
        <p>
          Students can unlock special discounts on selected island stays,
          weekend tours, and guided beach activities.
        </p>
      </div>

      <a className="button dark-button" href="#booking">
        Book Your Trip
      </a>
    </section>
  )
}

export default Promotions
