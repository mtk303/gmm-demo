import React from 'react'
import download from '../../assets/img/playerInfo/download.png'
import deposit from '../../assets/img/playerInfo/deposit.png'
import transfer from '../../assets/img/playerInfo/transfer.png'
import withdraw from '../../assets/img/playerInfo/withdraw.png'
import { NavLink } from 'react-router-dom'
import { FaMoneyBill } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";

const PlayerInfo = () => {
    const playerInfos=[
        {img:deposit,title:'Deposit',icon:<FaMoneyBill  size={35} color='#b80000' />,link:'/deposit?tab=deposit'},
        {img:transfer,title:'Transfer',icon:<FaMoneyBillTransfer  size={35} color='#b80000' />,link:'/deposit?tab=transfer'},
        {img:withdraw,title:'With Draw',icon:<BiMoneyWithdraw  size={35} color='#b80000' />,link:'/deposit?tab=withdraw'}
    ]
  return (
    <div className='px-2 px-sm-5  d-flex  justify-content-between  '>
      {playerInfos.map((item)=>{
        return <NavLink  className='bankImg d-flex flex-column align-items-center  align-items-center   text-decoration-none ' to={item.link}>
          
          {item.icon}
         
            
            <span   className=' fw-bolder text-danger  playerInfoTitle'>{item.title}</span>
        </NavLink>
      })}
    </div>
  )
}

export default PlayerInfo
