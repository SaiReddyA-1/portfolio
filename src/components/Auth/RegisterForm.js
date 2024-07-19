import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../actions/authActions';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, password, confirmPassword } = formData;

  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector(state => state.auth);
  const { isAuthenticated } = auth;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // Handle password mismatch
      return;
    }
    const userData = {
      name,
      email,
      password
    };
    dispatch(register(userData, history));
  };

  // Redirect if logged in
  if (isAuthenticated) {
    history.push('/dashboard'); // Redirect to dashboard after successful registration
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white p-5 rounded shadow">
        <h2 className="text-2xl mb-5 text-center font-bold">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" value={email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white p-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
