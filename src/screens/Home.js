import React from 'react'
import Footer from '../components/Footer'
import HomeFeatures from '../components/HomeFeatures'
import HomeLanding from '../components/HomeLanding'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
        <Navbar/>
        <HomeLanding/>
        <HomeFeatures />
        <Footer/>
    </>
  )
}

export default Home