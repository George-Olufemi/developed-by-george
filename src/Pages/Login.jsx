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
    <section class="py-26 bg-white pt-16">
      <div class="container px-4 mx-auto">
        <div class="max-w-lg mx-auto">
          <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-extrabold mb-2 pt-10">Sign in</h2>
          </div>
          <form action="">
            <div class="mb-6">
              <label class="block mb-2 font-extrabold" for="">Name:</label>
              <input onChange={e => setUser(e.target.value)} class="inline-block w-full p-4 leading-6 font-semibold placeholder-gray-400 bg-white shadow-xl border-2 border-gray-900 rounded" type="text" placeholder="your name" />
            </div>
            <div class="mb-6">
              <label class="block mb-2 font-extrabold" for="">Password:</label>
              <input onChange={e => setPassword(e.target.value)} class="inline-block w-full p-4 leading-6 text-lg font-thin placeholder-gray-400 bg-white shadow-xl border-2 border-gray-900 rounded" type="password" placeholder="**********" />
            </div>
            <div class="flex flex-wrap -mx-4 mb-6 items-center justify-between">
            </div>
            <button onClick={handleLogin} class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-gray-900 hover:bg-gray-800 border-3 border-indigo-900 shadow-xl rounded transition-all duration-300 tracking-wider hover:drop-shadow-2xl">Sign in</button>
          </form>
        </div>
      </div>
    </section>
    {/* <div className='flex justify-center items-center'>
        <div>
            <label>username:</label><br />
            <input className="border-blue-400 bg-gray-300 rounded-lg" type='text' placeholder="enter username" onChange={e => setUser(e.target.value)} /><br /><br />
            <label>password:</label><br />
            <input className="border-blue-400 bg-gray-300 rounded-lg" type='password' placeholder="enter password" onChange={e => setPassword(e.target.value)} /><br /><br />
            <button onClick={handleLogin} className="bg-blue-500 px-3 py-1 text-white rounded-lg hover:scale-105 transition-all hover:bg-blue-700">Login</button>
        </div>
    </div> */}
    </React.Fragment>
  );
}

export default Login;
