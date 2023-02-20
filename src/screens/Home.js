import React from 'react'
import HomeFeatures from '../components/HomeFeatures'
import HomeLanding from '../components/HomeLanding'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
        <Navbar/>
        <HomeLanding/>
        <HomeFeatures />
    </>
  )
}

export default Home