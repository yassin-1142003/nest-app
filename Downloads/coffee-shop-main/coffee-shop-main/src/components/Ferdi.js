import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useDispatch } from 'react-redux'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import { Link } from "react-router-dom"
import Slider from "react-slick";



export default function Ferdi() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  const bucket = useSelector(state => state.bucketReducer)

  const handleAdd = (ferdi) => {
    const addedItem = bucket.filter(index => Number(index.id) == Number(ferdi.id))

    if (addedItem.length !== 0) {
      addedItem[0].sayi += 1
    } else {
      dispatch({
        type: "SEBETE_ELAVE_ET",
        payload: ferdi
      })
    }
  }
  const dispatch = useDispatch()
  const reqem = useSelector(state => state.dataReducers)
  const params = useParams()
  const selector = useSelector(state => state.avadanliqlarReducer.filter(index => index.id == params.topicId))
  const currentFerdi = selector[0]

  const [say, setSay] = useState(1)
  const sayiArtir = () => {
    currentFerdi.sayi = currentFerdi.sayi + 1
    setSay(say + 1)
    console.log(currentFerdi);
  }
  const sayiAzalt = () => {
    if (say > 1 && currentFerdi.sayi > 1) {
      currentFerdi.sayi = currentFerdi.sayi - 1
      setSay(say - 1)
      console.log(currentFerdi);
    }
  }
  // const imageClick = () => {
  //     currentFerdi.url="http://localhost:3000/static/media/img1.693427af2ad8b9e33446.jpg"
  //   }
  return (
    <div>
      <div className='head'></div>
      <div className='menubox back'>
        <p className='mfont'>Mağaza</p>
      </div>
      {
        currentFerdi === undefined ? <h1>Loading</h1> : <div className='padd'>

          <div className='dfl'>
            <div className='imgdf'>
              {/* <div className='imgcar'>
                                <img src={img1} />
                                <img src={img1}  onClick={() => imageClick()}/>
                                <img src={img2} />
                                <img src={img5} />
                            </div> */}
              <img className='ferdimg' src={currentFerdi && currentFerdi.url} />
            </div>
            <div className='pad'>
              <p className='ferdiadi'>{currentFerdi && currentFerdi.adi}</p>
              <p className='ferdiqiy'>{currentFerdi && currentFerdi.qiymet} ₼</p>
              <p className='ferdigucu'>Dərəcə ..........................................................................{currentFerdi && currentFerdi.derece}</p>
              <p className='ferdiceki'>Çəki ............................................................................{currentFerdi && currentFerdi.ceki}</p>
              {/* <p className='ferdihecmi'>Həcmi  ..............................................................................{currentFerdi && currentFerdi.hecmi} litr</p> */}
              <div className='df'> <p className='reqem'>{say}</p>
                <div className='btns'>
                  <button className='btnn' onClick={() => sayiArtir()}>
                    +
                  </button>
                  <button className='btnn' onClick={() => sayiAzalt()}>
                    -
                  </button></div></div>
              <div> <button className='btnadd' onClick={() => handleAdd(currentFerdi)}>
                Səbətə əlavə et
              </button></div>
            </div>
          </div>
          <div className='ferditesvir'>
            <p className='tesviri'>Təsviri</p>
            <p className='tesvirii'>{currentFerdi && currentFerdi.tesviri}</p>
          </div>

        </div>

      }
      <div className='box3 clr'>
        <div className='box1 paad'>
          <p className='start '>Digər məhsullar</p>
        </div>
        <Slider {...settings}>
          <div className='sliderdiv'>
            <div className='card color'>
              <Link to="/42">
                <img className='img1' src="https://mokko.az/images/thumbnails/550/450/detailed/9/2c1a1d9ee12311e9a62cacb57d58667e_223d20bde17011e9a62dacb57d58667e.jpg" />
              </Link>
              <p className='adi1 av'>DELONGHİ</p>
              <p className='qiymet1'>899.00 ₼</p>
              <button className='btnadd'>
                Səbətə əlavə et
              </button>
            </div>
          </div>
          <div className='sliderdiv'>
            <div className='card color'>
              <Link to="/46">
                <img className='img1' src="https://mokko.az/images/thumbnails/550/450/detailed/9/a750060d880e11ea92a0685d43a36857_a750060e880e11ea92a0685d43a36857.png" />
              </Link>
              <p className='adi1 av'>PHİLİPS</p>
              <p className='qiymet1'>1170.00 ₼</p>
              <button className='btnadd'>
                Səbətə əlavə et
              </button>
            </div>
          </div>
          <div className='sliderdiv'>
            <Link to="/49">
              <div className='card color'>
                <img className='img1' src="https://mokko.az/images/thumbnails/550/450/detailed/9/3_a548-vw.jpg" />
                <p className='adi1 av'>HAND GRİNDER</p>
                <p className='qiymet1'>31.10 ₼</p>
                <button className='btnadd'>
                  Səbətə əlavə et
                </button>
              </div>
            </Link>
          </div>
          <div className='sliderdiv'>
            <div className='card color'>
              <Link to="/57">
                <img className='img1' src="https://mokko.az/images/thumbnails/550/450/detailed/9/810cb91e434b11ea8b987ee7bc5febea_750d8b61444711ea8b987ee7bc5febea.jpg" />
              </Link>
              <p className='adi1 av'>MONDO</p>
              <p className='qiymet1'>35.00 ₼</p>
              <button className='btnadd'>
                Səbətə əlavə et
              </button>
            </div>
          </div>
          <div className='sliderdiv'>
            <div className='card color'>
              <Link to="/58">
                <img className='img1' src="https://mokko.az/images/thumbnails/550/450/detailed/9/692f0f96c90811e9a628364b50b7ef2d_8d76d692dd6411e9a62bacb57d58667e.jpg" />
              </Link>
              <p className='adi1 av'>ESPRESSO</p>
              <p className='qiymet1'>9.50 ₼</p>
              <button className='btnadd'>
                Səbətə əlavə et
              </button>
            </div>
          </div>
          <div className='sliderdiv'>
            <div className='card color'>
              <Link to="/60">
                <img className='img1' src="https://mokko.az/images/thumbnails/550/450/detailed/8/1622b4d04bff11ea8b987ee7bc5febea_22895e2d88d511ea92a0685d43a36857.jpg" />
              </Link>
              <p className='adi1 av'>SCARLATTO</p>
              <p className='qiymet1'>16.00 ₼</p>
              <button className='btnadd'>
                Səbətə əlavə et
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}
