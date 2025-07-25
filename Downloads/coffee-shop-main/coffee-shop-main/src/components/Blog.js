import React from 'react'
import altliq from './images/altliq.png'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import { FiCalendar } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";



export default function Blog() {
  const selector = useSelector(state => state.bloqReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("http://localhost:3004/bloq")
      .then(res => res.data)
      .then(res => dispatch({
        type: "GELEN_DATA",
        payload: res
      }))
  }, [])

  return (
    <div>
      <div className='head'></div>
      {/* <div className='foto back'>Bloq
      <img src={altliq} />
          <p className='font2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
       </div> */}
         <div className='box1 paad back blogpad'>
          <p className='font1 blogfont'>Bloq</p>
          <img src={altliq} />
          {/* <p className='font2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p> */}
        </div>
      <div className="cont back bolgs">
        {
          selector.map(tek => (

            <div key={tek.id} className='cardd'>
              <Link to={`/blog/${tek.id}`}>
                <img className='imgb' src={tek.url} />
                <h4 className='bbasliq'>{tek.basliq}</h4>
              </Link>
              <div className='padding'>
                <div className='tb'>
                  <span className='tarix'><FiCalendar className='cal' />    {tek.tarix} </span>
                  <span className='baxis'><FiEye className='cal' />    {tek.baxis} </span>
                </div>
                <p className='onsoz'>{tek.onsoz} </p>
                <Link to={`/blog/${tek.id}`}>
                  <button className='btnadd'>
                    Daha çox <FiChevronRight className='cal' />
                  </button>
                  </Link>
              </div>
            </div>
          ))
        }
      </div>

      <div className='footertop'>
            <h5>Fəaliyyətimizlə bağlı hər hansı irad və ya təklifiniz varsa, zəhmət olmazsa bildirin.</h5>
            <a href="http://localhost:3000/contact"><button className='btna'>ƏLAQƏ</button></a>
          </div>
    </div>
  )
}
