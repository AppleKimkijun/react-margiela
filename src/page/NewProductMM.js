import React,{useEffect,useState} from 'react'

import MMProductCard from '../component/MMProductCard'

const NewProductMM = () => {
  const [productList,setProductList] = useState([]);
  const getProduct = async() =>{
    let url = `https://my-json-server.typicode.com/AppleKimkijun/react-margiela/MMProducts`;
    
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }


  useEffect(()=>{
    getProduct();
  },[])
  return (
    <div>
        <div className="sub_title_wrap">
        <div className="sub_img">
          <img
            src="https://static.coupangcdn.com/image/vendor_inventory/efd6/f7d119057dd54463be73aabd337e495cf3400a1bf49dcefda34fda8624dd.jpg"
            alt=""
            style={{ width: "60vw", height: "30vw" }}
          />
        </div>
        <div className="sub_ex">MM 신제품</div>
      </div>


      <div className="product_wrap">
        <div className="product_card_wrap">
          {productList.map((menu) => (
            <MMProductCard item={menu} />
          ))}
        </div>
      </div>


    </div>
  )
}

export default NewProductMM