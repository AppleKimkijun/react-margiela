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
            src="https://www.maisonmargiela.com/cloud/margielawp/uploads/2022/06/cat_mm6_newsin_dk.png?impolicy=margiela-modulePlpMainModule&imdensity=1&imwidth=1832"
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