import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import axios from "axios"




export default function Dessertler() {
    const selector = useSelector(state => state.dessertlerReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get("http://localhost:3004/dessertler")
            .then(res => res.data)
            .then(res => dispatch({
                type: "GELEN_DATA",
                payload: res
            }))
    }, [])

    return (
        <div>
             <div className='mbasliq'>Dessertlər</div>
            <div className='mline'></div>
            <div className="cont">
                {
                    selector.map(index => (

                        <div key={index.id} className='card'>
                            <img className='img1' src={index.url} />
                            <p className='adi1'>{index.adi}</p>
                            <p className='qiymet1'>{index.qiymet}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
