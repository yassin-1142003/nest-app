import React from 'react'

export default function Giris() {
  return (
    <div className='giris'>
          <form className='formgiris'>
            <input type="email" placeholder="E-mail"/>
            <input type="password"  placeholder="Şifrə" />
           <div className='check'> 
             <input type="checkbox" /> <label>Məni yadda saxla</label>
             </div>
            <button>Giriş</button>
           </form>
    </div>
  )
}
