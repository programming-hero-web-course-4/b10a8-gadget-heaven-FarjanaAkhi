import React from 'react'

export default function Footer() {
    return (
      <footer className="bg-gray-100 py-10 px-5">
        <div className="container mx-auto text-center">
          {/* Footer Title */}
          <h1 className="text-2xl font-bold text-gray-800">Gadget Heaven</h1>
          <p className="text-gray-500 mt-2">
            Leading the way in cutting-edge technology and innovation.
          </p>
  
          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Services Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Services</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Product Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Order Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Shipping & Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Company Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Company</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Legal Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Legal</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  
  
