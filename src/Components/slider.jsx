import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Keyboard,Pagination,Navigation } from 'swiper/modules';
function Slider() {
  return (<>
    <Swiper
    breakpoints={{
      0:{
        slidesPerView:1,
        spaceBetween:50
      },
      425:{
        slidesPerView:2,
        spaceBetween:50
      },
      1024:{
        slidesPerView:6,
        spaceBetween:50
      },
    }}
      initialSlide={4}
      navigation={true}
      keyboard={{
        enabled: true,
      }}
      centeredSlides={true}
      modules={[Keyboard,Pagination,Navigation]}
      className="my"
    >
      <SwiperSlide>
          <div className='slideLogoContainer'>
            <img className=' max-w-5' src={require("../Assets/Icons/logo.png")} alt="" />
          </div>
          <p className=' text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          <div className="miniProfileContainer ">
            <img className='miniProfilePhoto' src={require("../Assets/Images/profilePhoto.jpg")} alt="" />
            <div className='miniProfileContent'>
              <p className='miniProfileName'>
                Hellen Jummy
              </p>
              <p className='miniProfilePosition'>Team Lead</p>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className='slideLogoContainer'>
            <img className=' max-w-5' src={require("../Assets/Icons/logo.png")} alt="" />
          </div>
          <p className=' text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          <div className="miniProfileContainer ">
            <img className='miniProfilePhoto' src={require("../Assets/Images/profilePhoto.jpg")} alt="" />
            <div className='miniProfileContent'>
              <p className='miniProfileName'>
                Hellen Jummy
              </p>
              <p className='miniProfilePosition'>Team Lead</p>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className='slideLogoContainer'>
            <img className=' max-w-5' src={require("../Assets/Icons/logo.png")} alt="" />
          </div>
          <p className=' text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          <div className="miniProfileContainer ">
            <img className='miniProfilePhoto' src={require("../Assets/Images/profilePhoto.jpg")} alt="" />
            <div className='miniProfileContent'>
              <p className='miniProfileName'>
                Hellen Jummy
              </p>
              <p className='miniProfilePosition'>Team Lead</p>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className='slideLogoContainer'>
            <img className=' max-w-5' src={require("../Assets/Icons/logo.png")} alt="" />
          </div>
          <p className=' text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          <div className="miniProfileContainer ">
            <img className='miniProfilePhoto' src={require("../Assets/Images/profilePhoto.jpg")} alt="" />
            <div className='miniProfileContent'>
              <p className='miniProfileName'>
                Hellen Jummy
              </p>
              <p className='miniProfilePosition'>Team Lead</p>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className='slideLogoContainer'>
            <img className=' max-w-5' src={require("../Assets/Icons/logo.png")} alt="" />
          </div>
          <p className=' text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          <div className="miniProfileContainer ">
            <img className='miniProfilePhoto' src={require("../Assets/Images/profilePhoto.jpg")} alt="" />
            <div className='miniProfileContent'>
              <p className='miniProfileName'>
                Hellen Jummy
              </p>
              <p className='miniProfilePosition'>Team Lead</p>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className='slideLogoContainer'>
            <img className=' max-w-5' src={require("../Assets/Icons/logo.png")} alt="" />
          </div>
          <p className=' text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          <div className="miniProfileContainer ">
            <img className='miniProfilePhoto' src={require("../Assets/Images/profilePhoto.jpg")} alt="" />
            <div className='miniProfileContent'>
              <p className='miniProfileName'>
                Hellen Jummy
              </p>
              <p className='miniProfilePosition'>Team Lead</p>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className='slideLogoContainer'>
            <img className=' max-w-5' src={require("../Assets/Icons/logo.png")} alt="" />
          </div>
          <p className=' text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          <div className="miniProfileContainer ">
            <img className='miniProfilePhoto' src={require("../Assets/Images/profilePhoto.jpg")} alt="" />
            <div className='miniProfileContent'>
              <p className='miniProfileName'>
                Hellen Jummy
              </p>
              <p className='miniProfilePosition'>Team Lead</p>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className='slideLogoContainer'>
            <img className=' max-w-5' src={require("../Assets/Icons/logo.png")} alt="" />
          </div>
          <p className=' text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          <div className="miniProfileContainer ">
            <img className='miniProfilePhoto' src={require("../Assets/Images/profilePhoto.jpg")} alt="" />
            <div className='miniProfileContent'>
              <p className='miniProfileName'>
                Hellen Jummy
              </p>
              <p className='miniProfilePosition'>Team Lead</p>
            </div>
          </div>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Slider
/*  function sliderMove(a){
    const childrens = document.getElementById("sliderCard").children
    var slides = []
    var visibleSlides = []
    for(let i = 0; i<childrens.length; i++){
      if(childrens[i].classList.contains("onSlide"))visibleSlides.push(childrens[i])
      slides.push(childrens[i])
    }
    if(a){
      for(let i = 0 ; i<visibleSlides.length;i++){
        for(let j = i + 1 ; j<visibleSlides.length; j++){
          if(visibleSlides[i].getAttribute("value")<visibleSlides[j].getAttribute("value")){
            let a = visibleSlides[i]
            visibleSlides[i] = visibleSlides[j]
            visibleSlides[j] = a
          }
        }
      }
      if(visibleSlides[0] === childrens.lastChild){
        if(visibleSlides[visibleSlides.length-1] === (childrens.firstChild)){
          if(visibleSlides[visibleSlides.length-1].getAttribute("value") + 1 ===  visibleSlides[visibleSlides.length-2].getAttribute("value")){
            visibleSlides[0].classList.remove("onSlide")
            console.log(slides.filter(a=>a.getAttribute("value")===visibleSlides[visibleSlides.length-2].getAttribute("value")+1))
          }
        }
      }
      console.log(childrens.lastChild)
    }
  }
  return (
    <>
      <button>Sol</button>
      <button onClick={()=>sliderMove(true)}>Sağ</button>
      <div id='sliderCard' className='grid grid-cols-3 gap-4 whitespace-nowrap justify-center items-center text-center'>
        <div value={1} className='sliderContent onSlide'>a</div>
        <div value={2} className='sliderContent onSlide'>b</div>
        <div value={3} className='sliderContent '>c</div>
        <div value={4} className='sliderContent '>d</div>
        <div value={5} className='sliderContent onSlide'>e</div>
      </div>
    </>
  )*/