import React from 'react';
import './Contact.model.css';

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex justify-center items-center py-12 bg-gray-100"
      >
        <div className="w-full max-w-lg px-8 py-10 bg-white rounded-xl shadow-xl">
          <div className="title mb-8 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800">CONTACT US</h1>
            <div className="star-container mt-4 mb-6 flex justify-center items-center">
              <div className="w-12 h-1 bg-gray-300"></div>
              <i className="fa-solid fa-star text-yellow-400 mx-2"></i>
              <div className="w-12 h-1 bg-gray-300"></div>
            </div>
          </div>

          <div className="space-y-6">
            {/* User Name Input */}
            <div className="input-container">
              <input
                id="uName"
                type="text"
                className="input-field"
                placeholder=" "
              />
              <label htmlFor="uName" className="input-label">User Name</label>
            </div>

            {/* User Age Input */}
            <div className="input-container">
              <input
                id="uAge"
                type="number"
                className="input-field"
                placeholder=" "
              />
              <label htmlFor="uAge" className="input-label">User Age</label>
            </div>

            {/* User Email Input */}
            <div className="input-container">
              <input
                id="uEmail"
                type="email"
                className="input-field"
                placeholder=" "
              />
              <label htmlFor="uEmail" className="input-label">User Email</label>
            </div>

            {/* User Password Input */}
            <div className="input-container">
              <input
                id="uPass"
                type="password"
                className="input-field"
                placeholder=" "
              />
              <label htmlFor="uPass" className="input-label">User Password</label>
            </div>

            {/* Submit Button */}
            <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
