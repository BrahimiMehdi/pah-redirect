"use client"
import React, { useEffect } from 'react'

type Props = {}

const Redirect = (props: Props) => {
 useEffect(() => {
    const currentPath = window.location.pathname + window.location.search + window.location.hash;
    const newUrl = `https://pharma-at-hand.app${currentPath}`;
      window.location.href = newUrl;
    
    // Redirect after a brief delay to show the landing page
    // const redirectTimer = setTimeout(() => {
    // }, 1500);
    
    // return () => clearTimeout(redirectTimer);
  }, []);

  const handleRedirect = () => {
    const currentPath = window.location.pathname + window.location.search + window.location.hash;
    window.location.href = `https://pharma-at-hand.app${currentPath}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-600 to-blue-400">
      <div style={{padding:"4rem"}} className="bg-white gap-3   backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col justify-center items-center text-center max-w-md w-full">
        <img src="/logoBlue.png" className='w-48 rounded-md object-cover object-center' alt="" />
        <h1 style={{marginTop:"2rem"}} className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Pharma at Hand
        </h1>
        <p className="text-gray-700 mt-5 text-lg mb-8">
          We moved domains to <strong className="text-blue-600">pharma-at-hand.app</strong>
        </p>
        <button 
        style={{paddingLeft:"2rem",paddingRight:"2rem"}}
          onClick={handleRedirect}
          className="bg-blue-600 h-12 mt-8  cursor-pointer hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg mb-4"
        >
          Go to pharma-at-hand.app
        </button>
        <p className="text-gray-500 text-sm italic">
          Redirecting you automatically...
        </p>
      </div>
    </div>
  );
}

export default Redirect