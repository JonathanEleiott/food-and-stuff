import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Link to='/'>Home</Link><br />
      <Link to='/products'>All Products</Link><br />
      <Link to='/my-account'>My Account</Link><br />
      <Link to='/login'>Log In / Register</Link><br />
    </>
  )
}

export default NavBar;