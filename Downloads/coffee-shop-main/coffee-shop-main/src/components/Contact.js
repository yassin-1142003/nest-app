import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import altliq from './images/altliq.png'



export default function Contact() {


  return (
    <div>
      <div className='head'></div>
      <div className='box1 paad back blogpad'>
          <p className='font1 blogfont'>Əlaqə</p>
          <img src={altliq} />
          {/* <p className='font2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p> */}
        </div>
      <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14459.830668783927!2d49.837576779643776!3d40.368849206271705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db421b119e9%3A0xff5b11b19c648c27!2sCOFFEESHOP%20Company!5e0!3m2!1sen!2s!4v1650106539021!5m2!1sen!2s" width="100%" height="350" ></iframe></div>
      <div className='disfle elaqebox'>
        <div className='col-lg-4 col-md-12 col-sm-12 wclr'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum lobortis odio, in gravida quam cursus sit amet. Donec</p>
          <div className='elaqe'>
            <p className='ext e'><FaMapMarkerAlt className='ficon' />37 Cəfər Cabbarlı küçəsi, Bakı</p>
            <p className='ext e'>< FaPhoneAlt className='ficon' />+994 50 206 50 60</p>
            <p className='ext e'>< FaEnvelope className='ficon' />info@coffeeshop.az</p>
          </div>
          <div className='display'>
            <div className='ibox xbox'><FaFacebookF className='icons' /></div>
            <div className='ibox xbox'><FaInstagram className='icons' /></div>
            <div className='ibox xbox'><FaTwitter className='icons' /></div>
            <div className='ibox xbox'><FaLinkedinIn className='icons' /></div>
          </div>
        </div>
        <div className='form col-lg-6 col-md-12 col-sm-12'>
           <form>
          <div className='inputflex'>
            <input type="text"  placeholder="Ad"/>
            <input type="text"  placeholder="Soyad" /></div>
            <div className='inputflex'>
            <input type="email" placeholder="E-poçt ünvanı"/>
            <input type="text"  placeholder="Başlıq" />
          </div>
            <textarea cols="10" rows="5" placeholder='Mesaj...'></textarea>
            <button>Göndər</button>
           </form>
            </div>
      </div>
    </div>
  )
}
