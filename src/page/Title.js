import React,{useEffect,useState} from 'react';
import {Pagination,Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigate, useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Title = () => {
  const navigate = useNavigate();
  const goToMale = ()=>{
    navigate("/newProductMale");
  }
  const goToFeMale = ()=>{
    navigate("/newProductFeMale");
  }
  const goToMM = ()=>{
    navigate("/newProductMM");
  }
  return (
    <div className='title_wrap'>
        <Swiper
      modules={[ Pagination, Autoplay]}
      autoplay={{delay:"3000"}}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="https://cdn.jentestore.io/resource/md/event/74/banner_640_2.jpeg" alt="" style={{width:"100vw",height:"88vh"}}/></SwiperSlide>
      <SwiperSlide><img src="https://i.ytimg.com/vi/A7RoAEEI1_k/maxresdefault.jpg" alt="" style={{width:"100vw",height:"88vh"}}/></SwiperSlide>
      <SwiperSlide><img src="https://mblogthumb-phinf.pstatic.net/20130513_297/twenty__136845181900891Opv_JPEG/banner1.jpg?type=w2" alt="" style={{width:"100vw",height:"88vh"}}/></SwiperSlide>
      <SwiperSlide><img src="https://cdn.mustit.co.kr/lib/upload/admin/exhibition/2a78f764f57f25db690a76ee5253e4d2.jpeg" alt="" style={{width:"100vw",height:"88vh"}}/></SwiperSlide>
    </Swiper>
       <div className='title_main'>
       </div>

       <div className='title_new'>

            <div className='new_product'>
                <img src="https://media.catchfashion.com/images/h_l?url=https%3A%2F%2Fimages.lvrcdn.com%2FBig74I%2FL6V%2F009_ece7789c-a32f-4774-9333-8da0d36d3fbe.JPG&t=bp" alt="mail_img" style={{width:"30vw",height:"75vh"}}/>
                <div onClick={goToMale}>남성 신제품</div>
            </div>

            <div className='new_product'>
                <img src="https://img.giglio.com/images/prodZoom/C71656.028_2.jpg" alt="mail_img" style={{width:"30vw",height:"75vh"}}/>
                <div onClick={goToFeMale}>여성 신제품</div>
            </div>

       </div>
       
       <div className='new_mm'>
        <img src="https://post-phinf.pstatic.net/MjAxODA2MTNfMjIw/MDAxNTI4ODY4MjY5NTQz.tCP0dhXF2uGTV_03lejlHxDvo8RUhFNVacfW_NyK9p8g.j56bR6XELPENGVsAPOZCbTXvfCtDw-S5mYdzyRHmmCcg.JPEG/background_2.jpg?type=w1200" alt="mail_img" style={{width:"74vw",height:"75vh"}} />
        <div onClick={goToMM}>MM 신제품</div>
       </div>
    </div>
  )
}

export default Title