'use client'

// components/NavigationPage.js

import { useState } from 'react';

const NavigationPage = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [routeType, setRouteType] = useState('safest');

  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  const handleRouteTypeChange = (type) => {
    setRouteType(type);
  };

  const handleGoButtonClick = () => {
    // Handle navigation logic
    console.log('From:', from, 'To:', to, 'Route Type:', routeType);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen">
      <div className="w-full lg:w-1/3 bg-gray-100 flex-shrink-0">
        {/* Sidebar for inputs and route type selection */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">Navigation Options</h2>
          <div className="mb-4">
            <label htmlFor="from" className="block text-gray-700 font-medium mb-1">From</label>
            <input
              type="text"
              id="from"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter starting location"
              value={from}
              onChange={handleFromChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="to" className="block text-gray-700 font-medium mb-1">To</label>
            <input
              type="text"
              id="to"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter destination"
              value={to}
              onChange={handleToChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Route Type</label>
            <div className="flex">
              <button
                onClick={() => handleRouteTypeChange('safest')}
                className={`flex-1 bg-blue-500 text-white rounded-md py-2 px-4 mr-2 hover:bg-blue-600 transition duration-300 ${
                  routeType === 'safest' && 'bg-blue-600'
                }`}
              >
                Safest
              </button>
              <button
                onClick={() => handleRouteTypeChange('shortest')}
                className={`flex-1 bg-blue-500 text-white rounded-md py-2 px-4 ml-2 hover:bg-blue-600 transition duration-300 ${
                  routeType === 'shortest' && 'bg-blue-600'
                }`}
              >
                Shortest
              </button>
            </div>
          </div>
          <button
            onClick={handleGoButtonClick}
            className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300"
          >
            Go
          </button>
        </div>
      </div>
      <div className="w-full lg:w-2/3">
        {/* Map component goes here */}
        <div className="bg-gray-500 h-full">
          <p className="text-white text-center py-6">Map goes here</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationPage;
