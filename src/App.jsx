import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/About/about'
import Services from './components/Services/services'
import Testimonials from './components/Testimonials/testimonials'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App