import React from 'react'
import Hero from '../components/Hero'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import SEO from '../components/SEO'


const Home = () => {
  return (
    <div>
     
     <SEO title='Glownest | Best Beauty Services in Ktm' description='Glownest provides premium salon and beauty services in Amrit Nagar, Kalanki, Kathmandu with online booking and trained professionals..'/>
        <Hero/>
        <About/>
        <Services/>
        <Contact/>
        
    </div>
  )
}

export default Home