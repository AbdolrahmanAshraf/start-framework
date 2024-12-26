import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-5">
      <div className="container mx-auto py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* LOCATION Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">LOCATION</h3>
            <p className="mb-2">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          {/* SOCIAL ICONS Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">AROUND THE WEB</h3>
            <div className="social-icons flex justify-center space-x-6 mt-3">
              <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-blue-600 transition-all duration-300">
                <i className="fa-brands fa-facebook fa-2x"></i>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-blue-400 transition-all duration-300">
                <i className="fa-brands fa-twitter fa-2x"></i>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-blue-700 transition-all duration-300">
                <i className="fa-brands fa-linkedin fa-2x"></i>
              </a>
              <a href="https://example.com" aria-label="Website" className="text-white hover:text-gray-500 transition-all duration-300">
                <i className="fa-solid fa-globe fa-2x"></i>
              </a>
            </div>
          </div>

          {/* ABOUT FREELANCER Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">ABOUT FREELANCER</h3>
            <p>
              Freelancer is a free-to-use, licensed tailwind theme created by Route.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom text-center py-3 border-t border-gray-700 mt-4">
        <p className="m-0 text-sm">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
