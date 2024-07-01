import React from 'react'
// import usecontext
import all_product from '../Components/Assets/all_product';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import Productdisplay from '../Components/ProductDisplay/Productdisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId));

  return (
    <div className='product'>
      <Breadcrum product={product} />
      <Productdisplay product ={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product
