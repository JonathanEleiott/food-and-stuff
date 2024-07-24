import { Routes, Route } from 'react-router-dom';
import AllProducts from './AllProducts.jsx';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Welcome to Food and Stuff</h1>} />
        <Route path='/products' element={<AllProducts />} />
      </Routes>
    </>
  )
}

export default App
