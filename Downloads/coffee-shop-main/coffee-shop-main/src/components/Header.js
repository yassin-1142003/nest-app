import React from 'react'
import { NavLink, Link } from "react-router-dom"
import logo from './images/logo.svg'
import { useSelector, useDispatch } from "react-redux"
import cart from './images/cart3.svg';
import person from './images/person.svg'
import { FiHeart } from "react-icons/fi";
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { BiX } from "react-icons/bi";

export default function Header() {
    const selector = useSelector(state => state.bucketReducer)
    const selectorr = useSelector(state => state.heartReducer)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 5) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    const [isNavExpanded, setIsNavExpanded] = useState(false)
console.log(selectorr)

    // const [style, setStyle] = useState("cont");

    // const changeStyle = () => {
    //   console.log("you just clicked");

    //   setStyle("cont2");
    // };
    // const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <div className="container ">
                <div className="row faiz">
                    <div className="col-lg-3 col-sm-10 log"><Link to="/"><img className='logo' src={logo} />COFFEE SHOP</Link></div>
                    <div className='col-lg-9'>

                        <div className='col-lg-1 front dropdown'>
                            <div className="dropbtn"><NavLink to="/menyu/istiq">Menu</NavLink></div>
                        </div>
                        <div className='col-lg-1 front dropdown' >
                            <div className="dropbtn" ><NavLink to="/magaza/avadanliqlar"> Mağaza</NavLink></div>
                        </div>
                        <div className="col-lg-1 front hidden"><NavLink to="/contact">Əlaqə</NavLink></div>
                        <div className="col-lg-1 front "><NavLink to="/blog">Bloq</NavLink></div>
                        <div className="col-lg-2 front hicons">
                            <NavLink to="/user/giris"><img className='person' src={person} /></NavLink>
                            <NavLink to="/beyenme"><FiHeart className='heart' /><span className='count'>{selectorr.length}</span></NavLink>
                            <NavLink to="/sebet"><img className='cart' src={cart} /><span className='count'>{selector.length}</span></NavLink>
                        </div>

                    </div>
                    <div className=" col-lg-1 col-sm-1 menudf">
                        <FiMenu className='fimenu' onClick={() => { setIsNavExpanded(!isNavExpanded) }} />
                    </div>
                </div>
            </div>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"} >
                <ul>
                    <div><BiX className='navx'  onClick={() => { setIsNavExpanded(!isNavExpanded) }} /></div>
                    <li><Link to="menyu/istiq"  onClick={() => { setIsNavExpanded(!isNavExpanded) }} >Menu</Link></li>
                    <li><Link to="magaza/avadanliqlar"  onClick={() => { setIsNavExpanded(!isNavExpanded) }} >Mağaza</Link></li>
                    <li><Link to="contact"  onClick={() => { setIsNavExpanded(!isNavExpanded) }} >Əlaqe</Link></li>
                    <li><Link to="blog"  onClick={() => { setIsNavExpanded(!isNavExpanded) }} >Bloq</Link></li>
                    <div className='navicons'>
                        <NavLink to="/user/giris"  onClick={() => { setIsNavExpanded(!isNavExpanded) }} ><img className='person' src={person} /></NavLink>
                        <NavLink to="/beyenme"  onClick={() => { setIsNavExpanded(!isNavExpanded) }} ><FiHeart className='heart' /><span className='count'>{selectorr.length}</span></NavLink>
                        <NavLink to="/sebet"  onClick={() => { setIsNavExpanded(!isNavExpanded) }} ><img className='cart' src={cart} /><span className='count'>{selector.length}</span></NavLink>
                    </div>
                </ul>
            </div>

        </div>
    )
}
