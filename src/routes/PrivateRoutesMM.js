import React from 'react'
import ProductDetailMM from '../page/ProductDetailMM'
import { Navigate } from 'react-router-dom'

const PrivateRoutesMale = ({authenticate}) => {
  return (
    authenticate == true?<ProductDetailMM/>:<Navigate to="/login"/>
    )
}

export default PrivateRoutesMale