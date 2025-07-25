import React from 'react'

export default function Qeydiyyat() {
  return (
    <div className='giris'>
      <form className='formgiris'>
        <input type="text" placeholder="Ad" />
        <input type="text" placeholder="Soyad" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Şifrə" />
        <div className='check'>
          <input type="checkbox" /> <label>İstifadəçi şərtlərini təsdiq edirəm.</label>
        </div>
        <button>Qeydiyyatdan keçmək</button>
      </form>
    </div>
  )
}
