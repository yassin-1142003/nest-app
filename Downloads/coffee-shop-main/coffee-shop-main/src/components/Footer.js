import React from 'react'
import logo from './images/logo.svg'
import { NavLink, Link } from "react-router-dom"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import foot from './images/q.png'


export default function Footer() {
    return (
       <div>
           {/* <div className='footertop'>
           <h5>Fəaliyyətimizlə bağlı hər hansı irad və ya təklifiniz varsa, zəhmət olmazsa bildirin.</h5>
           <Link to="contact"><button className='btna'>ƏLAQƏ</button></Link>
           </div> */}
            <div className='footer'>
            <div className='col-lg-5 col-md-9 col-sm-9 w75'>
                <div className="log"><Link to="/"><img className='logo' src={logo} />COFFEE SHOP</Link></div>
                <p className='txt2'>Azərbaycanda beynəlxalq brendlərin qəhvəxanaları açılandan sonra qəhvə gənclər arasında dəbdə olan içkiyə çevrilib. Çoxları bir dəfə dəmlənmiş qəhvənin dadına baxandan sonra onun həvəskarına çevrilir, bəziləri isə evdə də belə qəhvə içmək imkanı əldə etmək istəyirlər. </p>
            </div>
            <div className='col-lg-3 ftr col-md-3 col-sm-3 pad768'>
            <NavLink to="/menyu/istiq">Menu</NavLink>
            <NavLink to="/magaza/avadanliqlar">Mağaza</NavLink>
            <NavLink to="/blog">Bloq</NavLink>
            <NavLink to="user/giris">Giriş</NavLink>
            <NavLink to="user/qeydiyyat">Qeydiyyat</NavLink>
            </div>
            <div className='col-lg-3 col-md-10 col-sm-10 pad768'>
                <h4 className='foote'>ƏLAQƏ</h4>
                <div className='elaqe'>
                    <p className='ext'><FaMapMarkerAlt className='ficon' />37 Cəfər Cabbarlı küçəsi, Bakı</p>
                    <p className='ext'>< FaPhoneAlt className='ficon' />+994 50 206 50 60</p>
                    <p className='ext'>< FaEnvelope className='ficon' />info@coffeeshop.az</p>
                </div>
                <div className='display'>
                    <div className='ibox'><FaFacebookF className='icons' /></div>
                    <div className='ibox'><FaInstagram className='icons' /></div>
                    <div className='ibox'><FaTwitter className='icons' /></div>
                    <div className='ibox'><FaLinkedinIn className='icons' /></div>
                </div>
            </div>
            <div>
               <img className='footimg' src={foot} />
            </div>
        </div>
       </div>

    )
}
