import React from "react";

import '../../assets/css/sidebar.css'


import home from '../../assets/img/footerIcons/home.png'
import promo from '../../assets/img/footerIcons/promo.png'
import wallet from '../../assets/img/footerIcons/wallet.png'
import profile from '../../assets/img/footerIcons/account.png'
import { NavLink } from "react-router-dom";

const sideIcons = [
    {id:1,img:home,title:'home',link:'/'},
    {id:2,img:wallet,title:'wallet',link:'/deposit'},
    {id:3,img:promo,title:'promotion',link:'/promotion'},
    {id:4,img:profile,title:'profile',link:'/profile'}
]

const Sidebar = () => {
    return (
        <>
        <div className="relative d-md-block d-none">
        <div className="sidebars">
            {
                sideIcons.map((icons)=>{
                    return (<>
                    <NavLink to={icons.link} title={icons.title} className="d-grid p-3 m-2 rounded"  style={{width:'60px',background:'#b80000'}}>
                        <img src={icons.img} alt="" height={30}/>
                    </NavLink>
                    </>)
                })
            }
        </div>
        </div>

            {/* <div className="bg-dark d-inline p-2 m-2 rounded">
                <img src={home} alt="" height={30}/>
            </div> */}
        </>
    )
}

export default Sidebar