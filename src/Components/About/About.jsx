import React from 'react';
import style from './About.module.css';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-teal-500 flex justify-center items-center text-white py-12"
    >
      <div className="container px-4 mb-8 flex flex-col justify-center items-center text-center">
        {/* Title Section */}
        <div className="title mb-8">
          <h2 className="text-3xl font-semibold">ABOUT COMPONENT</h2>

          <div className="star-container mt-3 mb-3 flex justify-center items-center">
            <div className={style.aboutLine}></div>
            <i className="fa-solid fa-star text-yellow-400 mx-2"></i>
            <div className={style.aboutLine}></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap mt-5 gap-8 justify-center">
          <div className="w-full md:w-1/2 text-center px-4">
            <p className="text-lg leading-relaxed">
              Freelancer is a free Tailwind theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript, as well as optional SASS stylesheets for easy customization.
            </p>
          </div>

          <div className="w-full md:w-1/2 text-center px-4">
            <p className="text-lg leading-relaxed">
              Freelancer is a free Tailwind theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript, as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
