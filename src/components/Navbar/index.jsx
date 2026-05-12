import './index.css'

function Navbar() {
  const navLinks = ['Home', 'About', 'Schedule', 'Membership', 'Pricing']

  return (
    <header className="navbar">
      <a className="logo" href="#home" aria-label="Tropical Destinations home">
        Tropica
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>

      <a className="button explore-button" href="#destinations">
        Explore
      </a>
    </header>
  )
}

export default Navbar
