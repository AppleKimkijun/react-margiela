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
      <SwiperSlide><img src="https://www.maisonmargiela.com/cloud/margielawp/uploads/2022/06/hp_mm_womensbag_dk-1.png?impolicy=margiela-moduleNotFullScreen&imwidth=2442" alt="" style={{width:"100vw",height:"88vh"}}/></SwiperSlide>
      <SwiperSlide><img src="https://www.maisonmargiela.com/cloud/margielawp/uploads/2022/06/hp_mm6_newsin_dk.png?impolicy=margiela-moduleNotFullScreen&imwidth=2442" alt="" style={{width:"100vw",height:"88vh"}}/></SwiperSlide>
      <SwiperSlide><img src="https://www.maisonmargiela.com/cloud/margielawp/uploads/2022/05/cp_mm_newarrivals_women__May13_dk.jpg?impolicy=margiela-modulePlpMainModule&imdensity=1&imwidth=1832" alt="" style={{width:"100vw",height:"88vh"}}/></SwiperSlide>
      <SwiperSlide><img src="https://www.maisonmargiela.com/cloud/margielawp/uploads/2022/05/cp_mm_newarrivals_men__May13_dk.jpg?impolicy=margiela-modulePlpMainModule&imdensity=1&imwidth=1832" alt="" style={{width:"100vw",height:"88vh"}}/></SwiperSlide>
    </Swiper>
       <div className='title_main'>
       </div>

       <div className='title_new'>

            <div className='new_product'>
                <img src="https://www.maisonmargiela.com/cloud/margielawp/uploads/2022/06/hp_mm_mensnewarrivals_dk-1.png?impolicy=margiela-moduleDouble&imdensity=1&imwidth=1060" alt="mail_img" style={{width:"30vw",height:"75vh"}}/>
                <div onClick={goToMale}>남성 신제품</div>
            </div>

            <div className='new_product'>
                <img src="https://www.maisonmargiela.com/cloud/margielawp/uploads/2022/06/hp_mm_womennewarrivals_dk-1.png?impolicy=margiela-moduleDouble&https://www.maisonmargiela.com/cloud/margielawp/uploads/2022/06/hp_mm_mensnewarrivals_dk-1.png?impolicy=margiela-moduleDouble&imdensity=1&imwidth=1060" alt="mail_img" style={{width:"30vw",height:"75vh"}}/>
                <div onClick={goToFeMale}>여성 신제품</div>
            </div>

       </div>
       
       <div className='new_mm'>
        <img src="https://www.maisonmargiela.com/cloud/margielawp/uploads/2022/06/hp_mm6_newsin_dk.png?impolicy=margiela-moduleNotFullScreen&imwidth=2442" alt="mail_img" style={{width:"74vw",height:"75vh"}} />
        <div onClick={goToMM}>MM 신제품</div>
       </div>
    </div>
  )
}

export default Title