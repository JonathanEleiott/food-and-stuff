import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [nameInput, setNameInput] = useState("");
  const [avatarUrlInput, setAvatarUrlInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const navigate = useNavigate();

  const registerUser = async() => {
    const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: nameInput,
        email: emailInput,
        password: passwordInput,
        avatar: avatarUrlInput
      })
    });

    const json = await response.json();
    setNameInput("");
    setAvatarUrlInput("");
    setEmailInput("");
    setPasswordInput("");
  }

  const logInUser = async() => {
    const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput
      })
    });

    const json = await response.json();
    console.log(json.access_token);
    navigate('/products');
  }

  return (
    <>
      <form>
        {
          showLogin ? 
            null :
            <>
              <input value={nameInput} onChange={(event) => { setNameInput(event.target.value) }} placeholder="name" />
              <input value={avatarUrlInput} onChange={(event) => { setAvatarUrlInput(event.target.value) }} placeholder="avatar" />
            </> 
        }
        
        <input value={emailInput} onChange={(event) => { setEmailInput(event.target.value) }} type="email" placeholder="email" />
        <input value={passwordInput} onChange={(event) => { setPasswordInput(event.target.value) }} type="password" placeholder="password" />
        {
          showLogin ? <button onClick={logInUser}>Log In</button> : <button onClick={registerUser}>Register</button>
        }
        
      </form>

      {
        showLogin ? 
          <p>Not a member? <button onClick={() => { setShowLogin(false) }}>Register here</button></p> :
          <p>Already a member? <button onClick={() => { setShowLogin(true) }}>Log in here</button></p>
      }
      
    </>
  )
}

export default Auth;