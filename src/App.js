import {useState, useEffect} from "react"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"

import { Routes, Route } from "react-router-dom";
import Title from './page/Title';
import Login from './page/Login';
import NewProductMale from "./page/NewProductMale";
import NewProductFeMale from "./page/NewProductFeMale";
import NewProductMM from "./page/NewProductMM";

import ProductsAll from "./page/ProductsAll";
import PrivateRoutesFeMale from "./routes/PrivateRoutesFeMale";
import PrivateRoutesMale from "./routes/PrivateRoutesMale";
import PrivateRoutesMM from "./routes/PrivateRoutesMM";
import PrivateRoutesAll from "./routes/PrivateRoutesAll";


function App() {
  const [authenticate,setAuthenticate] = useState(false);

  useEffect(()=>{
  },[authenticate])



  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
        <Routes>
          <Route path="/" element={<Title/>}/>
          <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
          <Route path="/newProductMale" element={<NewProductMale/>}/>
          <Route path="/newProductFeMale" element={<NewProductFeMale/>}/>
          <Route path="/newProductMM" element={<NewProductMM/>}/>
          <Route path="/productsAll" element={<ProductsAll/>}/>
          <Route path="/productDetailFeMale/:id" element={<PrivateRoutesFeMale authenticate={authenticate}/>}/>
          <Route path="/productDetailMale/:id" element={<PrivateRoutesMale authenticate={authenticate}/>}/>
          <Route path="/productDetailMM/:id" element={<PrivateRoutesMM authenticate={authenticate}/>}/>
          <Route path="/productAllDetail/:id" element={<PrivateRoutesAll authenticate={authenticate}/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
