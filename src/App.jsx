import Navbar from './components/Navbar/index.jsx'
import HeroSection from './components/HeroSection/index.jsx'
import Destinations from './components/Destinations/index.jsx'
import Promotions from './components/Promotions/index.jsx'
import BookingForm from './components/BookingForm/index.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <Destinations />
        <Promotions />
        <BookingForm />
      </main>
    </div>
  )
}

export default App
