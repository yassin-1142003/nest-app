import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import Slider from "react-slick";
import { FiCalendar } from "react-icons/fi";
import axios from "axios"
import { useEffect } from 'react';



export default function Blogs() {
  const selectorr = useSelector(state => state.bloqReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("http://localhost:3004/bloq")
      .then(res => res.data)
      .then(res => dispatch({
        type: "GELEN_DATA",
        payload: res
      }))
  }, [])

  const params = useParams()
  const selector = useSelector(state => state.bloqReducer.filter(tek => tek.id == params.id))
  const currentTek = selector[0]
  console.log(currentTek)
  return (
    <div>
      <div className='head'></div>
      <div className='blogss'>
        <p className='blogsfont'>Bloq</p>
      </div>
      {
        currentTek === undefined ? <h1>Loading</h1> :
          <div className='dfblogs'>
            <div className='blogs1'>
              <img className='imgbs' src={currentTek && currentTek.url} />
              <div className='padb'>
                <p><FiCalendar className='cal' />{currentTek && currentTek.tarix}</p>
                <h4 className='basliqb'>{currentTek && currentTek.basliq}</h4>
                <p className='mezmunb'>{currentTek && currentTek.mezmun}</p>
              </div>
            </div>
            <div className='blogs2 '>
              <h3 className='diger'>Digər postlar</h3>
              {
                selectorr.map(tek => (
                  <Link to={`/blog/${tek.id}`}>
                    <div key={tek.id} className='dfminiblogs'>
                      <img className='minimg' src={tek.url} />
                      <div className='miniblogsdf'>
                        <h6>{tek.basliq}</h6>
                        <p><FiCalendar className='cal' />{tek.tarix}</p></div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
      }
      <div className='footertop fimg'>
        <h5>Fəaliyyətimizlə bağlı hər hansı irad və ya təklifiniz varsa, zəhmət olmazsa bildirin.</h5>
        <a href="http://localhost:3001/contact"><button className='btna'>ƏLAQƏ</button></a>
      </div>
    </div>
  )
}
