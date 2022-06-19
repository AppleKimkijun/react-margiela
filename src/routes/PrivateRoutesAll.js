import React from 'react'
import ProductsAllDetail from '../page/ProductsAllDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoutesAll = ({authenticate}) => {
  return (
    authenticate == true?<ProductsAllDetail/>:<Navigate to="/login"/>
    )
}

export default PrivateRoutesAll