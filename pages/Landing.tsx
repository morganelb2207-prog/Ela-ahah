import React from 'react';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        ELA System
      </h1>
      <p className="text-xl text-gray-300">Le système est en ligne 🟢</p>
    </div>
  );
};

export default Landing;
