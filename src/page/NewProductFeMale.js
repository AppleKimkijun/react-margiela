import React, { useEffect,useState } from "react";

import FeMaleProductCard from "../component/FeMaleProductCard";

const NewProductFeMale = () => {
  const [productList, setProductList] = useState([]);
  const getProduct = async () => {
    let url = `https://my-json-server.typicode.com/AppleKimkijun/react-margiela/feMaleProducts`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  });
  return (
    <div>
      <div className="sub_title_wrap">
        <div className="sub_img">
          <img
            src="https://mblogthumb-phinf.pstatic.net/MjAxOTEyMDNfMjIz/MDAxNTc1MzQwMTg5NTgy.VwzGws8AyrUgrkpNtFrBzps696qdfmYJF44P3RrC8D4g.CSxapA9kwPz16PHOmQLxswxrtAvvoGJv2BV28Jc_MfMg.JPEG.h_unny/NaverBlog_20191203_112949_61.jpg?type=w2"
            alt=""
            style={{ width: "60vw", height: "30vw" }}
          />
        </div>
        <div className="sub_ex">여성 신제품</div>
      </div>

      <div className="product_wrap">
        <div className="product_card_wrap">
          {productList.map((menu) => (
            <FeMaleProductCard item={menu}/>
          ))}
        </div>
      </div>


    </div>
  );
};

export default NewProductFeMale;
