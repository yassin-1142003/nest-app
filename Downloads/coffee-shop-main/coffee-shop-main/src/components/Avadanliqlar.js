import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import axios from "axios"
import Heart from './Heart';





export default function Avadanliqlar() {
    const reqem = useSelector(state => state.dataReducers)
    const selector = useSelector(state => state.avadanliqlarReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get("http://localhost:3004/avadanliqlar")
            .then(res => res.data)
            .then(res => dispatch({
                type: "GELEN_DATA",
                payload: res
            }))
    }, [])



    return (
        <div>
            <div className="cont back">
                {
                    selector.map(index => (

                        <Heart index={index} />
                        
                    ))
                }
            </div>
        </div>
    )
}

