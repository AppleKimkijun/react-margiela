import React from 'react'
import ProductDetailMale from '../page/ProductDetailMale'
import { Navigate } from 'react-router-dom'

const PrivateRoutesMale = ({authenticate}) => {
  return (
    authenticate == true?<ProductDetailMale/>:<Navigate to="/login"/>
    )
}

export default PrivateRoutesMale