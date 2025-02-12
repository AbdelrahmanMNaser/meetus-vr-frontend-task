import React from 'react';

const WelcomeHeader = ({ userName }) => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome, {userName}
      </h1>
    </header>
  );
};

export default WelcomeHeader;