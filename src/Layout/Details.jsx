import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Details ()  {
  const { state } = useLocation();
  const { product } = state || {};
  const [activeButton, setActiveButton] = useState(null);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    storedCart.push(product);
    localStorage.setItem('cart', JSON.stringify(storedCart));
    setActiveButton('cart');
    alert('Item added to Cart!');
  };

  const handleAddToWishlist = () => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    storedWishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
    setActiveButton('wishlist');
    alert('Item added to Wishlist!');
  };

  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="w-full bg-purple-500 text-white py-10 px-6 text-center h-[400px] relative">
          <h1 className="text-4xl font-bold">Product Details</h1>
          <p className="mt-5 text-base md:text-xl">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
        </div>

        <div className="flex flex-col md:flex-row p-6 bg-white shadow-lg rounded-lg z-20 transform -translate-y-16 max-w-screen-lg mx-auto">
          <div className="w-full md:w-1/3">
            <img
              src={product.product_image}
              alt={product.product_title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-6 flex flex-col justify-start mt-4 md:mt-0">
            <h2 className="text-2xl font-bold">{product.product_title}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">Specifications:</h3>
              <ul className="list-disc pl-5">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="text-gray-600">{spec}</li>
                ))}
              </ul>
            </div>

            <p className="text-purple-600 font-bold text-lg mt-4">${product.price}</p>

            <div className="flex items-center mt-4">
              <span className="text-yellow-400">⭐⭐⭐⭐</span>
              <span className="ml-2 text-gray-500">({product.rating} reviews)</span>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleAddToCart}
                className={`py-2 px-6 rounded-lg transition duration-300 ${activeButton === 'cart' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Add to Cart
              </button>
              <button
                onClick={handleAddToWishlist}
                className={`py-2 px-6 rounded-lg transition duration-300 ${activeButton === 'wishlist' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

