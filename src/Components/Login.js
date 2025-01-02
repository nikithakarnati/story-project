import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom'; // Changed useHistory to useNavigate

import '../Styles/Register.css'; // Include your custom styles

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = existingUsers.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        setError('');
        navigate('/Dashboard'); // Redirect to homepage after successful login
      } else {
        setError('Invalid username or password.');
      }
    } else {
      setError('Please fill all fields.');
    }
  };

  return (
    <div id="container">
      <div id="box">
      <img id="close" src={`${process.env.PUBLIC_URL}/Close.jpg`} alt="" onClick={() => navigate('/')}></img>
        <h2 id="reg">Login</h2>
        {error && <p id="error-msg">{error}</p>}
        <div class="input-field">
          <label id="user">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div class="input-field">
          <label id="pass">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button onClick={handleLogin} id="regbtn">Login</button>
      </div>
    </div>
  );
};

export default Login;