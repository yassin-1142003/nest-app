import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FiHeart } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom"

export default function Heart(props) {

    const bucket = useSelector(state => state.bucketReducer)
    const heart = useSelector(state => state.heartReducer)
    const [isActive, setActive] = useState("false");
    const [isActivee, setActivee] = useState("false");

    const dispatch = useDispatch()
    const handleAdd = (ferdi) => {
        setActivee(!isActivee)

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

    const heartAdd = (ferdi) => {

        setActive(!isActive)
        const addedItem = heart.filter(index => Number(index.id) === Number(ferdi.id))

        if (addedItem.length !== 0) {
            addedItem[0].sayi += 1
        } else {
            dispatch({
                type: "BEYEN",
                payload: ferdi
            })
        }
    }
    return (

        <div key={props.index.id} className='card color'>
            <Link to={`/${props.index.id}`}>
                <img className='img1' src={props.index.url} />
            </Link>
            <FiHeart className={isActive ? "cardheart" : "activeheart"} onClick={() => heartAdd(props.index)} />
            <p className='adi1 av'>{props.index.adi}</p>
            <p className='qiymet1'>{props.index.qiymet} ₼</p>
            <button className={isActivee  ?"btnadd":"btnaddd" } onClick={() => handleAdd(props.index)}>
                Səbətə əlavə et
            </button>
        </div>
    )

}
