import { BrowserRouter } from "react-router-dom"
// import {About, Contact, Experience, Feedbacks, Hero, Tech, Work, StarsCanvas, Navbar} from './components'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Works from './components/Works';
import Feedbacks from './components/Feedbacks';
import Contact from './components/Contact';
import Stars from './components/canvas/Stars';

const App = () => {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
        <Contact/>
        <Stars/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
