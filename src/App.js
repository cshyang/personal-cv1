import "./App.css";
import HeroSection from "./HeroSection";
import Avatar from "./Avatar";
import Jobs from "./Jobs";
import Skills from "./Skills";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Avatar />
      <Skills />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
