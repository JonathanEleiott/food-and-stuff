import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Welcome to Food and Stuff</h1>} />
      </Routes>
    </>
  )
}

export default App
