'use client'


import { SetStateAction, useState } from 'react';

const WelcomePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Email:', email, 'Password:', password);
  };

  const handleGoogleSignup = () => {
    // Handle Google signup logic
    console.log('Google signup clicked');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-500">WeNAv: Navigate with confidence, rain or shine.</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md py-2 px-4 mb-2 hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 transition duration-300"
        >
          <a href="/route-map"> Sign Up with Google</a>
         
        </button>
      </form>
    </div>
  );
};

export default WelcomePage;
