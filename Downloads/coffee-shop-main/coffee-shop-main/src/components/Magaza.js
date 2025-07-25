import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import altliq from './images/altliq.png'
import { Link } from "react-router-dom"


export default function Magaza() {
  return (
    <div>
         <div className='head'></div>
        <div className='box1 paad back blogpad'>
          <p className='font1 blogfont'>Mağaza</p> 
       <div className='selbtn'>
           <NavLink className='selbtn' to="avadanliqlar"><button  className='abtn'>Qəhvə Maşınları</button></NavLink>
           <NavLink className='selbtn' to="mehsullar"><button className='abtn'>Qəhvə Dənələri</button></NavLink>
       </div>
        </div>
       <Outlet/>
       <div className='footertop'>
            <h5>Fəaliyyətimizlə bağlı hər hansı irad və ya təklifiniz varsa, zəhmət olmazsa bildirin.</h5>
            <a href="http://localhost:3000/contact"><button className='btna'>ƏLAQƏ</button></a>
          </div>
    </div>
  )
}
