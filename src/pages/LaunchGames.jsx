import React from 'react'
import Carousel from '../components/Home/Carousel'
import sport1 from '../assets/img/homeTab/sport1.png'
import sport2 from '../assets/img/homeTab/sport2.png'
import sport3 from '../assets/img/homeTab/sport3.png'
import sport4 from '../assets/img/homeTab/sport4.png'
import esport1 from '../assets/img/homeTab/esport1.png'
import casino1 from '../assets/img/homeTab/casino1.png'
import casino2 from '../assets/img/homeTab/casino2.png'
import casino3 from '../assets/img/homeTab/casino3.png'
import casino4 from '../assets/img/homeTab/casino4.png'
import casino5 from '../assets/img/homeTab/casino5.png'
import casino6 from '../assets/img/homeTab/casino6.png'
import slot1 from '../assets/img/homeTab/slot1.png'
import slot2 from '../assets/img/homeTab/slot2.png'
import slot3 from '../assets/img/homeTab/slot3.png'
import slot4 from '../assets/img/homeTab/slot4.png'
import slot5 from '../assets/img/homeTab/slot5.png'
import slot6 from '../assets/img/homeTab/slot6.png'
import fish1 from '../assets/img/homeTab/fish1.png'
import fish2 from '../assets/img/homeTab/fish2.png'
import fish3 from '../assets/img/homeTab/fish3.png'
import fish4 from '../assets/img/homeTab/fish4.png'
import fish5 from '../assets/img/homeTab/fish5.png'
const LaunchGames = () => {
    const games=[
        sport1,sport2,sport3,sport4,
        esport1,casino1,casino2,casino3,casino4,casino5,casino6,
        slot1,slot2,slot3,slot4,slot5,slot6,
        fish1,fish2,fish3,fish4,fish5
    ]
  return (
    <div>
        <Carousel/>
        <div className="py-5 px-2 p-sm-5">
        <h1 className="text-dark mb-5 text-center">Pragramatic</h1>
        <div className="row">
        {games.map((gameImg,key)=>{
            return <img key={key}
             className='col-12 col-sm-6 col-lg-4 col-xl-3 mb-4' src={gameImg} />
        })}
        </div>
        </div>
    </div>
  )
}

export default LaunchGames
