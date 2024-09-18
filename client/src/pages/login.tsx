import { useState, FormEvent, ChangeEvent } from 'react';
import Auth from '../utils/auth.ts';
import { login } from '../api/authAPI.tsx';

const Login = () => {
    const [loginData, setLoginData] = useState({ 
        email: '', 
        password: '' 
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setLoginData({ 
            ...loginData, 
            [e.target.name]: e.target.value 
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const data = await login(loginData);
            Auth.login(data.token);
        } catch (error) {
            console.error('Failed to login', error);
        }
    };

    return (
        <div className='container'>
          <form className='form' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label >email</label>
            <input 
              type='text'
              name='email'
              value={loginData.email || ''}
              onChange={handleChange}
            />
          <label>Password</label>
            <input 
              type='password'
              name='password'
              value={loginData.password || ''}
              onChange={handleChange}
            />
            <button type='submit'>Submit Form</button>
          </form>
        </div>
        
      )
    };
    
    export default Login;
    //function for logging in