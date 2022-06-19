import React from "react";

import { useNavigate } from 'react-router-dom'

const FeMaleProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail =()=>{
      navigate(`/productDetailFeMale/${item.id}`)
  }

  return (

        <div className="product_ex" onClick={showDetail}>

          <div className="product_img_wrap">
            <img src={item?.img} alt="" />
          </div>
          <div className="product_info_wrap">
            <p>{item?.title}</p>
            <p>{item?.price}</p>
          </div>

        </div>

  );
};

export default FeMaleProductCard;
