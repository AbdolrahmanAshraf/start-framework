import React, { useState } from 'react';
import image1 from '../../assets/poert1.png';
import image2 from '../../assets/port2.png';
import image3 from '../../assets/port3.png';

export default function Portfolio() {
  const [previewSrc, setPreviewSrc] = useState(null);

  function previewImg(src) {
    setPreviewSrc(src);
  }

  function closeImg() {
    setPreviewSrc(null);
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      closeImg();
    }
  }

  return (
    <>
      <section id="portfolio" className="min-h-screen flex justify-center items-center mt-5">
        <div className="container">
          <div className="title mt-5 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800">PORTFOLIO COMPONENT</h1>

            <div className="star-container mt-3 mb-3 flex justify-center items-center">
              <div className="border-t border-gray-400 w-1/4"></div>
              <i className="fa-solid fa-star text-yellow-500 mx-2"></i>
              <div className="border-t border-gray-400 w-1/4"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {[image1, image2, image3, image1, image2, image3].map((img, index) => (
              <div key={index} className="p-3">
                <img
                  src={img}
                  className="w-full block img-fluid rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  alt={`Portfolio ${index + 1}`}
                  onClick={() => previewImg(img)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Preview Overlay */}
      {previewSrc && (
        <div
          className="preview-img fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75"
          onClick={handleOverlayClick}
        >
          <div className="relative">
            <img
              src={previewSrc}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeImg}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
