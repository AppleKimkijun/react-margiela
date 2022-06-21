import React, { useEffect, useState } from "react";

import MaleProductCard from "../component/MaleProductCard";

const NewProductMale = () => {
  const [productList, setProductList] = useState([]);

  const getProduct = async () => {
    let url = `https://my-json-server.typicode.com/AppleKimkijun/react-margiela/maleProducts`;

    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div className="sub_title_wrap">
        <div className="sub_img">
          <img
            src="https://www.maisonmargiela.com/cloud/margielawp/uploads/2022/05/cp_mm_newarrivals_men__May13_dk.jpg?impolicy=margiela-modulePlpMainModule&imdensity=1&imwidth=1832"
            alt=""
            style={{ width: "60vw", height: "30vw" }}
          />
        </div>
        <div className="sub_ex">남성 신제품</div>
      </div>

      <div className="product_wrap">
        <div className="product_card_wrap">
          {productList.map((menu) => (
            <MaleProductCard item={menu} />
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default NewProductMale;
