import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useState } from 'react';
import { BiX } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom"



export default function Beyenme() {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.heartReducer)
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
    return (
        <div>
            <div className='head'></div>
            <div className='box1 paad back blogpad'>
                <p className='font1 blogfont'>Bəyəndiklərim</p> </div>
            <div className="cont back">
                {
                    selector.length > 0 ? selector.map(index => (

                        <div key={index.id} className='card color'>
                            <Link to={`/${index.id}`}>
                                <img className='img1' src={index.url} />
                            </Link>
                            <BiX className='x' onClick={() => dispatch({
                                        type: "BEYENME",
                                        payload: index.id
                                    })} />
                            <p className='adi1 av'>{index.adi}</p>
                            <p className='qiymet1'>{index.qiymet} ₼</p>
                            <button className='btnadd' onClick={() => handleAdd(index)}>
                                Səbətə əlavə et
                            </button>
                        </div>
                    )) : <p className='beyentxt'>Bəyəndiyiniz məhsul yoxdur</p>
                }
            </div></div>
    )
}
