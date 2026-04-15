import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-lg">Page Not Found</p>

      <Link to="/">
        <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-red-600">
          Go back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;