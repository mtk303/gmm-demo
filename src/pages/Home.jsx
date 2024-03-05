import React from 'react'
import Carousel from '../components/Home/Carousel'
import Marquee from '../components/Home/Marquee'
import PlayerInfo from '../components/Home/PlayerInfo'
import HomeTabs from '../components/Home/HomeTabs'
import Sidebar from '../components/Home/Sidebar'

const Home = () => {
  return (
    <div className=''>
      <Carousel/>
      <Marquee/>
      {/* <PlayerInfo/> */}
      <Sidebar/>
      <HomeTabs/>
    </div>
  )
}

export default Home
