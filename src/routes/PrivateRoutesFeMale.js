import React from 'react'
import ProductDetailFeMale from '../page/ProductDetailFeMale'
import { Navigate } from 'react-router-dom'

const PrivateRoutesFeMale = ({authenticate}) => {
  return (
    authenticate == true?<ProductDetailFeMale/>:<Navigate to="/login"/>
    )
}

export default PrivateRoutesFeMale