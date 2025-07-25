import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { NavLink, Link } from "react-router-dom"
import axios from "axios"
import altliq from './images/altliq.png'
import { FiHeart } from "react-icons/fi";
import { useState } from 'react';
import Heart2 from './Heart2';





export default function Mehsullar() {
    const selector = useSelector(state => state.mehsullarReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get("http://localhost:3004/mehsullar")
            .then(res => res.data)
            .then(res => dispatch({
                type: "GELEN_DATA",
                payload: res
            }))
    }, [])
    const bucket = useSelector(state => state.bucketReducer)

    const handleAdd = (ferdi) => {
        const addedItem = bucket.filter(index => Number(index.id) === Number(ferdi.id))

        if (addedItem.length !== 0) {
            addedItem[0].sayi += 1
        } else {
            dispatch({
                type: "SEBETE_ELAVE_ET",
                payload: ferdi
            })
        }
    }
    const heart = useSelector(state => state.heartReducer)
    const [isActive, setActive] = useState("false");
    const heartAdd = (ferdi) => {

        const addedItem = heart.filter(index => Number(index.id) === Number(ferdi.id))

        if (addedItem.length !== 0) {
            addedItem[0].sayi += 1
        } else {
            dispatch({
                type: "BEYEN",
                payload: ferdi
            })
        }
        setActive(!isActive);
    }
    return (
        <div>
          <div className="cont back">
                {
                    selector.map(index => (

                        <Heart2 index={index} />
                    ))
                }
            </div>
        </div>
    )
}

