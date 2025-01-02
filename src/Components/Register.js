import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Register.css'; // Include your custom styles

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && password) {
      // Save to localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = existingUsers.find((user) => user.username === username);

      if (userExists) {
        setError('Username already exists.');
      } else {
        existingUsers.push({ username, password });
        localStorage.setItem('users', JSON.stringify(existingUsers));
        setError('');
        navigate('/login'); // Redirect to login after registration
      }
    } else {
      setError('Please fill all fields.');
    }
  };

  return (
    <div id="container">
      <div id="box">
      <img id="close" src={`${process.env.PUBLIC_URL}/Close.jpg`} alt="" onClick={() => navigate('/')}></img>
        <h2 id="reg">Register</h2>
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
        
        <button onClick={handleRegister} id="regbtn">Register</button>
      </div>
    </div>
  );
};

export default Register;