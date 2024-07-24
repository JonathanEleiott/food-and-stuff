import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SingleProduct = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({})
  
  useEffect(() => {
    const getSingleProduct = async() => {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      const productInfo = await response.json();
      setProductDetails(productInfo);
    }

    getSingleProduct();
  }, [])

  return (
    <>
    {
      productDetails.images ? 
        <>
          <h2>{productDetails.title}</h2>
          <img width="200" height="200" src={productDetails.images[0].slice(2).slice(0, -2)} alt="product image"/>
          <p>{productDetails.description}</p>
          <p>${productDetails.price}</p>

          <button>Pay Now</button>
        </> : null
    }
    </>
  )
}

export default SingleProduct;