import React from 'react'
import Component from 'react'
import Carousel from 'react-bootstrap/Carousel'
import coffee2 from './images/coffee2.png'
import alt from './images/alt.png'
import altliq from './images/altliq.png'
import { NavLink } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { FiCalendar } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import lg1 from './images/lg1.png'
import lg2 from './images/lg2.png'
import lg3 from './images/lg3.png'
import lg4 from './images/lg4.png'
import lg5 from './images/lg5.png'
import lg6 from './images/lg6.png'
import CountUp from 'react-countup';
import { FiHeart } from "react-icons/fi";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

export default function Home() {
  
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  // const selector = useSelector(state => state.bloqReducer)

  let settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll:2 ,
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
  // // saygac
  // const valueDisplays = document.querySelectorAll(".eded")
  // console.log(valueDisplays)
  // const interval = 5000
  // valueDisplays.forEach((valueDisplay) => {
  //   const startValue = 0;
  //   const endValue = parseInt(valueDisplay.getAtribute("data-val"));
  //   console.log(endValue)
  //   const duration = Math.floor(interval / endValue);
  //   const counter = setInterval(function () {
  //     startValue += 1;
  //     valueDisplay.textContent = startValue;
  //     if (startValue == endValue) {
  //       clearInterval(counter);
  //     }
  //   }, duration)
  // });

  const dispatch = useDispatch()
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
      <div className="hoome1" >

        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/home-1-slider-image-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <img className='coffeelogo' src={coffee2} />
              <h1 className='basliq'>HƏR NÖV QƏHVƏLƏR</h1>
              <img className='altlogo' src={alt} />
              <p className='altbasliq'>Qəhvə dənəciklərindən hazırlanmış içki növləri tərkibində olan kofein sayəsində stimullaşdırıcı təsirə malikdir.</p>
              <NavLink to="/menyu/istiq"><button className='homebtn'>Daha çox</button></NavLink>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/home-1-slider-image-2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <img className='coffeelogo' src={coffee2} />
              <h1 className='basliq'>QƏHVƏ DƏNƏLƏRİ</h1>
              <img className='altlogo' src={alt} />
              <p className='altbasliq'>Qəhvə dənəciklərindən hazırlanmış içki növləri tərkibində olan kofein sayəsində stimullaşdırıcı təsirə malikdir.</p>
              <NavLink to="/magaza/mehsullar"><button className='homebtn'>Daha çox</button></NavLink>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/home-1-slider-image-3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <img className='coffeelogo' src={coffee2} />
              <h1 className='basliq'>QƏHVƏ MAŞINLARI</h1>
              <img className='altlogo' src={alt} />
              <p className='altbasliq'>Qəhvə dənəciklərindən hazırlanmış içki növləri tərkibində olan kofein sayəsində stimullaşdırıcı təsirə malikdir.</p>
              <NavLink to="magaza/avadanliqlar"><button className='homebtn'>Daha çox</button></NavLink>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <ScrollContainer>
      <ScrollPage page={1}> */}
      <div className='con'>
        <div className='box1'>
          <p className='font1'>QƏHVƏ MAĞAZASI</p>
          <img src={altliq} />
          {/* <p className='font2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p> */}
        </div>
      {/* <Animator animation={MoveIn(0, 1000)}> */}
        <div className='box2'>
          <div className='contt'>
            <div className='column'>
              <img src={icon1} />
              <p className='font3'>QƏHVƏLƏR</p>
              <p className='font4'>Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo</p>
            </div>
            <div className='column'>
              <img src={icon3} />
              <p className='font3'>DESSERTLƏR</p>
              <p className='font4'>Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo</p>
            </div>
            <div className='column'>
              <img src={icon2} />
              <p className='font3'>QƏHVƏ DƏNƏLƏRİ</p>
              <p className='font4'>Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo</p>
            </div>
            <div className='column'>
              <img src={icon4} />
              <p className='font3'>MƏHSULLAR</p>
              <p className='font4'>Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo</p>
            </div>
          </div>
        </div>
              {/* </Animator> */}
      </div>
      {/* </ScrollPage>
      </ScrollContainer> */}
      <div className='box3'>
        <p className='font5'>Menu</p>
        <Slider {...settings}>
          <div >
            <div className='card'>
              <img className='img1' src='https://globalassets.starbucks.com/assets/cacdf793d82648329cfec7df33148da4.jpg?impolicy=1by1_wide_topcrop_630' />
              <p className='adi1'>Caramel Frappuccino</p>
              <p className='qiymet1'>8.20 ₼</p>
            </div>
          </div>
          <div className='sliderdiv'>
            <div className='card'>
              <img className='img1' src='https://globalassets.starbucks.com/assets/b5ee0554cdd64959a86530922cea7991.jpg?impolicy=1by1_wide_topcrop_630' />
              <p className='adi1'>Iced Caramel Latte</p>
              <p className='qiymet1'>7.50 ₼</p>
            </div>
          </div>
          <div className='sliderdiv'>
            <div className='card'>
              <img className='img1' src='https://globalassets.starbucks.com/assets/7d4665b4af2541e387336966c6e3f1fb.jpg?impolicy=1by1_medium_630' />
              <p className='adi1'>Qaragiləli Muffin</p>
              <p className='qiymet1'>5.70 ₼</p>
            </div>
          </div>
          <div className='sliderdiv'>
            <div className='card'>
              <img className='img1' src='https://globalassets.starbucks.com/assets/e39e1d6044634535a027301d982c5842.jpg?impolicy=1by1_medium_630' />
              <p className='adi1'>Kruasan</p>
              <p className='qiymet1'>4.50 ₼</p>
            </div>
          </div>
          <div className='sliderdiv'>
            <div className='card'>
              <img className='img1' src='https://globalassets.starbucks.com/assets/f9a4cd143c4342abbb4f60b7fab4e6df.jpg?impolicy=1by1_medium_630' />
              <p className='adi1'>Sendviç</p>
              <p className='qiymet1'>5.80 ₼</p>
            </div>
          </div>
          <div className='sliderdiv'>
            <div className='card'>
              <img className='img1' src='https://globalassets.starbucks.com/assets/87caae0d7e7a46f9868b9e49208f6b02.jpg?impolicy=1by1_medium_630' />
              <p className='adi1'>Pendir Protein Box</p>
              <p className='qiymet1'>10.50 ₼</p>
            </div>
          </div>
        </Slider>
      </div>

      <div className='box3 clr'>
        <div className='box1 paad'>
          <p className='font1 '>Mağaza</p>
          <img src={altliq} />
          {/* <p className='font2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p> */}
        </div>
        <Slider {...settings}>
          <div className='sliderdiv'>
            <div className='card color'>
              {/* <Link to="/42"> */}
                <img className='img1' src="https://mokko.az/images/thumbnails/550/450/detailed/9/2c1a1d9ee12311e9a62cacb57d58667e_223d20bde17011e9a62dacb57d58667e.jpg" />
              {/* </Link> */}
            <FiHeart className="cardheart" />

              <p className='adi1 av'>DELONGHİ 850.M</p>
              <p className='qiymet1'>899.00 ₼</p>
              <button className='btnadd'>
                Səbətə əlavə et
              </button>
            </div>
          </div>
          <div className='sliderdiv'>
            <div className='card color'>
              {/* <Link to="/46"> */}
                <img className='img1' src="https://mokko.az/images/thumbnails/550/450/detailed/9/a750060d880e11ea92a0685d43a36857_a750060e880e11ea92a0685d43a36857.png" />
              {/* </Link> */}
            <FiHeart className="cardheart" />

              <p className='adi1 av'>PHİLİPS EP2224</p>
              <p className='qiymet1'>1170.00 ₼</p>
              <button className='btnadd'>
                Səbətə əlavə et
              </button>
            </div>
          </div>
        
            <div className='sliderdiv'>
                <div className='card color'>
              {/* <Link to="/49"> */}
                  <img className='img1' src="https://mokko.az/images/thumbnails/550/450/detailed/9/3_a548-vw.jpg" />
              {/* </Link> */}
            <FiHeart className="cardheart" />

                  <p className='adi1 av'>HAND GRİNDER</p>
                  <p className='qiymet1'>31.10 ₼</p>
                  <button className='btnadd'>
                    Səbətə əlavə et
                  </button>
                </div>
            </div>
   
          <div className='sliderdiv'>
            <div className='card color'>
              {/* <Link to="/57"> */}
                <img className='img1' src="https://mokko.az/images/thumbnails/550/450/detailed/9/810cb91e434b11ea8b987ee7bc5febea_750d8b61444711ea8b987ee7bc5febea.jpg" />
              {/* </Link> */}
            <FiHeart className="cardheart" />

              <p className='adi1 av'>MONDO BAR</p>
              <p className='qiymet1'>35.00 ₼</p>
              <button className='btnadd'>
                Səbətə əlavə et
              </button>
            </div>
          </div>
          <div className='sliderdiv' >
            <div className='card color'>
              {/* <Link to="/58"> */}
                <img className='img1' src="https://mokko.az/images/thumbnails/550/450/detailed/9/692f0f96c90811e9a628364b50b7ef2d_8d76d692dd6411e9a62bacb57d58667e.jpg" />
              {/* </Link> */}
            <FiHeart className="cardheart" />

              <p className='adi1 av'>MONDO BEAN</p>
              <p className='qiymet1'>9.50 ₼</p>
              <button className='btnadd'>
                Səbətə əlavə et
              </button>
            </div>
          </div>
          <div className='sliderdiv'>
              <div className='card color'>
            {/* <Link to="/59"> */}
                <img className='img1' src="https://mokko.az/images/thumbnails/550/450/detailed/9/692f0f95c90811e9a628364b50b7ef2d_87da201cdc8911e9a629364b50b7ef2d.jpg" />
            {/* </Link> */}
            <FiHeart className="cardheart" />

                <p className='adi1 av'>MONDO BEANS</p>
                <p className='qiymet1'>9.50 ₼</p>
                <button className='btnadd'>
                  Səbətə əlavə et
                </button>
              </div>
          </div>

        </Slider>
      </div>
      <AnimationOnScroll animateIn="animate__bounceIn">
      <div className='Ebox'>
        <div className='ebox'>
          <span className='eded' >
            <CountUp delay={0} start={0} end={132} duration={5}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp></span>
          <h5>QƏHVƏLƏR</h5>
          {/* <p className='txt'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean</p> */}
        </div>
        <div className='ebox'>
          <span className='eded'><CountUp delay={0} start={0} end={242} duration={7}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp></span>
          <h5>MƏHSULLAR</h5>
          {/* <p className='txt'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean</p> */}
        </div>
        <div className='ebox'>
          <span className='eded'><CountUp delay={0} start={0} end={158} duration={7}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp></span>
          <h5>ŞİRNİYYATLAR</h5>
          {/* <p className='txt'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean</p> */}
        </div>
        <div className='ebox'>
          <span className='eded'>    <CountUp delay={0} start={0} end={147} duration={7}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp></span>
          <h5>QƏLYANATLILAR</h5>
          {/* <p className='txt'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean</p> */}
        </div>
      </div>
      </AnimationOnScroll>
      <div className='box5 clr backimg'>
        <div className='box1 paad'>
          <p className='font1 '>Bloq</p>
          <img src={altliq} />
          {/* <p className='font2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p> */}
        </div>

        <div className='blogs dflx'>
        {/* {
          selector.map(tek => (

            <div key={tek.id} className='cardd'>
              <Link to={`/blog/${tek.id}`}>
                <img className='imgb' src={tek.url} />
                <h4 className='bbasliq'>{tek.basliq}</h4>
              </Link>
              <div className='padding'>
                <div className='tb'>
                  <span className='tarix'><FiCalendar className='cal' />    {tek.tarix} </span>
                  <span className='baxis'><FiEye className='cal' />    {tek.baxis} </span>
                </div>
                <p className='onsoz'>{tek.onsoz} </p>
                <Link to={`/blog/${tek.id}`}>
                  <button className='btnadd'>
                    Daha çox <FiChevronRight className='cal' />
                  </button>
                  </Link>
              </div>
            </div>
          ))
        } */}
          <div className='cardd'>
            <a href="http://localhost:3000/blog/81">
            <img className='imgb' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-1.jpg" />
            <h4 className='bbasliq'>QƏHVƏNİN TARİXİ</h4>
            </a>
            <div className='padding'>
              <div className='tb'>
                <span className='tarix'><FiCalendar className='cal' />    10.03.2022 </span>
                <span className='baxis'><FiEye className='cal' />    132 </span>
              </div>
              <p className='onsoz'>İlk dəfə qəhvə Həbəşistanın cənub qərbində yerləşən Qaffa bölgəsində aşkar olunmuşdur. Sonralar qəhvə Mərkəzi Ərəbistana gətirilir. Yəmənin cənub qərb hissəsində... </p>
              <a href="http://localhost:3000/blog/81">
              <button className='btnadd'>
                Daha çox <FiChevronRight className='cal' />
              </button>
              </a>
            </div>
          </div>
          <div className='cardd'>
            <a href="http://localhost:3000/blog/82">
            <img className='imgb' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-3.jpg" />
            <h4 className='bbasliq'>ƏN ÇOX QƏHVƏ İÇƏN 10 ÖLKƏ</h4>
            </a>
            <div className='padding'>
              <div className='tb'>
                <span className='tarix'><FiCalendar className='cal' />    21.03.2022 </span>
                <span className='baxis'><FiEye className='cal' />    345 </span>
              </div>
              <p className='onsoz'>Təsəvvür etmək çətindir ki, hər küncdə 'Starbucks', 'Dunkin Donat' və ya 'MacKafe' olan Amerika kimi ölkədən başqa haradasa daha çox qəhvə içilə bilər. Ancaq adambaşına istehlak edilən .... </p>
              <a href="http://localhost:3000/blog/82">
              <button className='btnadd'>
                Daha çox <FiChevronRight className='cal' />
              </button>
              </a>
            </div>
          </div>
          <div className='cardd'>
            <a href="http://localhost:3000/blog/83">
            <img className='imgb' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-12.jpg" />
            <h4 className='bbasliq'>ƏN BAHALI QƏHVƏ</h4>
            </a>
            <div className='padding'>
              <div className='tb'>
                <span className='tarix'><FiCalendar className='cal' />    12.04.2022 </span>
                <span className='baxis'><FiEye className='cal' />    264 </span>
              </div>
              <p className='onsoz'>'Arabika' adlı qəhvə dənələri fillərin nəcisindən əldə edilir.Qəhvə dənələri yem halında hazırlanır, xüsusi nəzarət altında saxlanılan fillərə uddurulur və daha sonra təkrar heyvanların nəcisindən... </p>
              <a href="http://localhost:3000/blog/83">
              <button className='btnadd'>
                Daha çox <FiChevronRight className='cal' />
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='logoslider'>
        <Slider {...settings}>
          <div  className='sliderdiv'>
        <img className='lg' src={lg1} />
          </div>
          <div  className='sliderdiv'>
        <img className='lg' src={lg2} />
          </div>
          <div  className='sliderdiv'>
        <img className='lg' src={lg3} />
          </div>
          <div  className='sliderdiv'>
        <img className='lg' src={lg4} />
          </div>
          <div  className='sliderdiv'>
        <img className='lg' src={lg5} />
          </div>
          <div  className='sliderdiv'>
        <img className='lg' src={lg6} />
          </div>
        </Slider>
      </div>
      <div className='footertop fimg'>
           <h5>Fəaliyyətimizlə bağlı hər hansı irad və ya təklifiniz varsa, zəhmət olmazsa bildirin.</h5>
           <Link to="contact"><button className='btna'>ƏLAQƏ</button></Link>
           </div>
      </div>
  )
}
