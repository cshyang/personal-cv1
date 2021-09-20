import './App.css'
import HeroSection from './HeroSection'
import Avatar from './Avatar'
import Jobs from './Jobs'
import Skills from './Skills'
import Footer from './Footer'
import Navbar from './Navbar'
import Wave1 from './Wave1'
import Wave2 from './Wave2'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Avatar />
      <Wave1 />
      <Skills />
      <Wave2 />
      <Jobs />
      <Footer />
    </div>
  )
}

export default App
