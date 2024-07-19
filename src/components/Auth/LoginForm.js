import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../actions/authActions';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector(state => state.auth);
  const { isAuthenticated } = auth;

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    };
    dispatch(login(userData));
  };

  // Redirect if logged in
  if (isAuthenticated) {
    history.push('/dashboard'); // Redirect to dashboard after successful login
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white p-5 rounded shadow">
        <h2 className="text-2xl mb-5 text-center font-bold">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white p-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
