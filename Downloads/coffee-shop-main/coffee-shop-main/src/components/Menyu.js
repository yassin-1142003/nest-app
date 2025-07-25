import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"




export default function Menyu() {
  const selector = useSelector(state => state.istiqReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("http://localhost:3004/istiq")
      .then(res => res.data)
      .then(res => dispatch({
        type: "GELEN_DATA",
        payload: res
      }))
  }, [])

  return (
    <div className='murl'>
      <div className='head'></div>
      <div className='menubox'>
        <p className='mfont'>Menu</p></div>
      <div className='mflex'>
        <div className='col-lg-2 col-md-12 col-sm-12 mcol'>
         <div className='mcoll'>
         <h4>İçkilər</h4>
          <NavLink to="istiq">İsti Qəhvələr</NavLink>
          <NavLink to="istic">İsti Çaylar</NavLink>
          <NavLink to="qarisiq">Qarışıq içkilər</NavLink>
          <NavLink to="soyuqq">Soyuq Qəhvələr</NavLink>
          <NavLink to="soyuqc">Soyuq Çaylar</NavLink>
         </div>
         <div className='mcoll'>
         <h4>Şirniyyatlar</h4>
          <NavLink to="dessertler">Dessertlər</NavLink>
          <h4>Qəlyanaltılar</h4>
          <NavLink to="qelyanalti">Sendviçlər</NavLink>
          <NavLink to="box" id='box'>Protein Box</NavLink>
         </div>
        </div>
        <div className='col-lg-8 col-md-9'>
          <Outlet />
        </div>


      </div>

      <div className='footertop fimg'>
        <h5>Fəaliyyətimizlə bağlı hər hansı irad və ya təklifiniz varsa, zəhmət olmazsa bildirin.</h5>
        <a href="http://localhost:3000/contact"><button className='btna'>ƏLAQƏ</button></a>
      </div>

    </div>
  )
}
