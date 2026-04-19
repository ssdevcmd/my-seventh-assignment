import React from "react";
import errorImg from '../../assets/404-page-not-found-png.jpg'


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <img src={errorImg} alt="" className="max-w-full animate-bounce">
      </img>

      <p className="mt-4 text-xl text-gray-600">
        Oops! Page not found
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Go Home
      </a>
    </div>
  );
};

export default ErrorPage;