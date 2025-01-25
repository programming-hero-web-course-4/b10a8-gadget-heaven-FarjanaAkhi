import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="text-2xl md:text-3xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 mx-auto p-4 md:mr-10">
       
        <div className="text-center md:text-left">
          <p>Gadget Heaven</p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 md:gap-10">
          <button>
            <Link to="/" className="no-underline">
              Home
            </Link>
          </button>
          <button><Link to="/dashboard" className="no-underline">
              Dashboard
            </Link></button>
            <button><Link to="/contact" className="no-underline">
              Contact
            </Link></button>
        </div>

        {/* Icons */}
        <div className="flex gap-4 p-2 justify-center md:justify-end">
          <FontAwesomeIcon icon={faShoppingCart} />
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </div>
  );
}
