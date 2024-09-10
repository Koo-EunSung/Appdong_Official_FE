import React, { useState } from 'react';
import axios from '../api/customAxios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    axios.post('/auth/loginProc', formData, {
      headers: {
        'Content-Type':'multipart/form-data'},
        withCredentials: true
    }    
    )
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
          if(response.data.authorities === "[ROLE_ADMIN]")
            navigate('/admin', {state: response.data});
          else
            navigate('/');
        } else {
          console.log(response);
          alert('Login failed');
        }
      })
      .catch(error => console.error('Login error:', error));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
