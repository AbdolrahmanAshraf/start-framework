import React from 'react';
import HomeImage from '../../assets/Home.svg';

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-teal-500 flex justify-center items-center py-8"
    >
      <div className="container text-center px-4">
        {/* Image with Hover Effect */}
        <img
          src={HomeImage}
          className="max-w-xs mx-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
          alt="avatar"
        />
        
        {/* Title */}
        <h1 className="text-white text-4xl font-bold mt-6 mb-4">START FRAMEWORK</h1>

        {/* Separator */}
        <div className="star-container mt-4 mb-6 flex justify-center items-center">
          <div className="w-20 h-0.5 bg-white mx-2"></div>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <div className="w-20 h-0.5 bg-white mx-2"></div>
        </div>

        {/* Description */}
        <p className="text-white text-lg font-light leading-relaxed">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </section>
  );
}
