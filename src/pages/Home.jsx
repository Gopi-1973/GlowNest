import React from 'react'
import Hero from '../components/Hero'
import Services from './Services'
import About from './About'
import Contact from './Contact'


const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
        <Contact/>
        
    </div>
  )
}

export default Home