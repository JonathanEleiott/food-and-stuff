import { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async() => {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const allProducts = await response.json();
      setProducts(allProducts);
    }
    
    getProducts();
  }, []);
  
  return (
    <>
      <h2>All Products</h2>
      { 
        products.map((singleProduct) => {

          return (
            <section key={singleProduct.id}>
              <h2>{singleProduct.title}</h2>
              <img width="250" height="250" src={singleProduct.images[0].slice(2).slice(0, -2)} alt="product image" />
            </section>
          ) 
        })
      }
    </>
  )
}

export default AllProducts;