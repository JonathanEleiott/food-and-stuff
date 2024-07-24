import { Routes, Route } from 'react-router-dom';
import AllProducts from './AllProducts.jsx';
import SingleProduct from './SingleProduct.jsx'

const App = () => {

  return (
    <>
      


      <Routes>
        <Route path='/' element={<h1>Welcome to Food and Stuff</h1>} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/products/:id' element={<SingleProduct />} />
      </Routes>
    </>
  )
}

export default App
