import React, { useState } from "react";
import LoginNav from "../Components/LoginNav";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/auth';

function Login() {
    const [user, setUser, setPassword] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogin = () => {
      auth.login(user)
      navigate('/', {replace: true})
    }
  return(
    <React.Fragment>
    <LoginNav />
    <div className='flex justify-center items-center'>
        <div>
            <label>username:</label><br />
            <input className="border-blue-400 bg-gray-300 rounded-lg" type='text' placeholder="enter username" onChange={e => setUser(e.target.value)} /><br /><br />
            <label>password:</label><br />
            <input className="border-blue-400 bg-gray-300 rounded-lg" type='password' placeholder="enter password" onChange={e => setPassword(e.target.value)} /><br /><br />
            <button onClick={handleLogin} className="bg-blue-500 px-3 py-1 text-white rounded-lg hover:scale-105 transition-all hover:bg-blue-700">Login</button>
        </div>
    </div>
    </React.Fragment>
  );
}

export default Login;
