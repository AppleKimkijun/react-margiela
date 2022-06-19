import React, { useEffect,useState } from "react";
import ProductsAllCard from "../component/ProductsAllCard";
import { useSearchParams } from "react-router-dom";

const ProductsAll = () => {
    const [productList, setProductList] = useState([]);
    const [query,setQuery] = useSearchParams();

  const getProduct = async () => {
    let searchQuery = query.get('q') ||"";


    let url = `https://my-json-server.typicode.com/AppleKimkijun/react-margiela/productsAll?q=${searchQuery}`;
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
            src="https://www.maisonmargiela.com/cloud/margielawp/uploads/2022/06/hp_mm_womensbag_dk-1.png?impolicy=margiela-moduleNotFullScreen&imwidth=2442"
            alt=""
            style={{ width: "60vw", height: "30vw" }}
          />
        </div>
        <div className="sub_ex">검색 결과</div>
      </div>

      <div className="product_wrap">
        <div className="product_card_wrap">
          {productList.map((menu) => (
            <ProductsAllCard item={menu}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsAll