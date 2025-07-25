import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import Swal from 'sweetalert2'



export default function Bucket() {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.bucketReducer)
    const reqem = useSelector(state => state.dataReducers)


    console.log(selector)
    const [say, setSay] = useState(1)
    const hesabla = () => {
        let a = 0
        selector.map(index => {
            a += Number(index.qiymet) * index.sayi
        })
        return a
    }
   const opensweetalert = () =>
    {
      Swal.fire({
        title: 'Səbət təstiq edildi',
        // text: "Hello",
        type: 'success',
        
      })
    }
    const opensweetalertdanger = () =>
  {
    Swal.fire({
      title: 'Səbət boşdur',
    //   text: "OOPS",
      type: 'warning',
      
      
    })
  }
    return (
        <div>
            <div className='head'></div>
            <div className='menubox back'>
                <p className='mfont'>Səbət</p>
            </div>
            <div className='sebetdf'>
                <div  className='sebets' >

                    {
                      selector.length > 0 ?   selector.map(index => (
                        <div key={index.id}>
                            <div className='sebet'>
                                <div className='mboxi'><img className='imgs' src={index.url} /></div>
                                <div>
                                <div className='mboxa'>{index.adi}  </div>
                                <div className='mbox'>{index.qiymet} ₼ </div>
                                <div className='mbox'>sayı: {index.sayi}</div>
                                </div>
                                <div className='mbox'><button className='btnx' onClick={() => dispatch({
                                    type: "SEBETDEN_SIL",
                                    payload: index.id
                                })}>
                                    X
                                </button></div>
                            </div>

                        </div>
                    )) :<p className='sebetext'>Səbətə əlavə edilmiş məhsul yoxdur.</p>
                    }
                </div>
                <div className='right'>
                    <p className='umumi'>Ümumi ödəniləcək:   {hesabla()} ₼</p>
                  {
                  selector.length > 0 ? 
                    <button className='btnadd' onClick={opensweetalert}>Səbəti təstiq et</button>
                  :
                   <button className='btnadd' onClick={opensweetalertdanger}>Səbəti təstiq et</button>
                  }
                </div>
            </div>
        </div>
    )
}

