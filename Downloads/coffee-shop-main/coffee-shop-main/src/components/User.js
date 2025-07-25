import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Link } from "react-router-dom"


export default function User() {
    return (
        <div>
            <div className='back'>
                <div className='head'></div>
                <div className='box1 paad back blogpad'>
                    <div className='sela'>
                        <NavLink className='select' to="giris">Giriş</NavLink>
                        <div className='selectline'></div>
                        <NavLink className='select' to="qeydiyyat">Qeydiyyat</NavLink>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}
