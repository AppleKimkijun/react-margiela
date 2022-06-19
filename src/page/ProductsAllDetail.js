import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

const ProductsAllDetail = () => {
    let{id} = useParams()
  const [product,setProduct] = useState(null)
  const getProductDetail = async()=>{
    let url = `https://my-json-server.typicode.com/AppleKimkijun/react-margiela/productsAll/${id}`;

    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(()=>{
    getProductDetail()
  })



  return (
    <div className='product_detail_wrap'>
        <div className='product_detail_img'>
            <img src={product?.img} alt="" />
            <img src={product?.img2} alt="" />
        </div>
        <div className='product_detail_info'>
            <div className="title">{product?.title}</div>
            <div className="price">{product?.price}</div>
            <div className='color_info'>선택하는 컬러에 따라 사이즈의 재고 현황이 달라질 수 있습니다.</div>
            <div className="color">Color : 
            {product?.color.map((item)=>(<div className={"color_sel"}>{item}</div>))}
            </div>
            <div className="size">Size : 
            {product?.size.map((item)=>(<div className={"size_sel"}>{item}</div>))}
            </div>
            <div className="btn">Add To Shopping Bag</div>
        </div>
    </div>
  )
}

export default ProductsAllDetail