import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dropdown from './components/Dropdown'
import Heading from './components/Heading'
import HeaderCarousel from './components/HeaderCarousel'
import AboutCard from './components/AboutCard'
import CommingSoonCard from './components/CommingSoonCard'
import Review from './components/Review'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Dropdown/>
      <Heading/>
      <HeaderCarousel/>
      <CommingSoonCard />
      <AboutCard />
      <Review />
      <Footer />
    </>
  )
}

export default App
