import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Dashboard() {
  const [activeButton, setActiveButton] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isSortedDescending, setIsSortedDescending] = useState(false);

  const loadCartItems = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  };

  const loadWishlistItems = () => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(storedWishlist);
  };

  useEffect(() => {
    loadCartItems();
    loadWishlistItems();
  }, []);

  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleSortToggle = () => {
    const sortedItems = [...cartItems].sort((a, b) => {
      return isSortedDescending ? a.price - b.price : b.price - a.price;
    });
    setCartItems(sortedItems);
    setIsSortedDescending(!isSortedDescending);
  };

  const handleClearAll = (listType) => {
    if (listType === 'cart') {
      setCartItems([]);
      localStorage.removeItem('cart');
    } else if (listType === 'wishlist') {
      setWishlistItems([]);
      localStorage.removeItem('wishlist');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-full bg-purple-500 text-white py-10 px-6 text-center h-[400px] flex flex-col items-center space-y-9">
        <h1 className="text-5xl font-bold">Dashboard</h1>
        <p className="mt-5 text-base md:text-xl">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setActiveButton('cart')}
            className={`btn w-[170px] p-2 text-xl rounded-3xl ${
              activeButton === 'cart' ? 'bg-white text-purple-500' : 'bg-purple-700 text-white'
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setActiveButton('wishlist')}
            className={`btn w-[170px] p-2 text-xl rounded-3xl ${
              activeButton === 'wishlist' ? 'bg-white text-purple-500' : 'bg-purple-700 text-white'
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
      {activeButton === 'cart' && (
        <div className="mt-10 w-full max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold text-black-600">Cart</h2>
          <div className="flex justify-between items-center m-6">
            <button
              onClick={handleSortToggle}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              {isSortedDescending ? 'Sort by Price (Ascending)' : 'Sort by Price (Descending)'}
            </button>
            {cartItems.length > 0 && (
              <button
                onClick={() => handleClearAll('cart')}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Clear Cart
              </button>
            )}
          </div>
          <div className="mt-6 space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center">
                    <img
                      src={item.product_image}
                      alt={item.product_title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <span className="ml-4 text-lg font-semibold">{item.product_title}</span>
                  </div>
                  <span className="text-lg font-semibold">${item.price}</span>
                </div>
              ))
            )}
            {cartItems.length > 0 && (
              <div className="mt-6 text-right font-semibold text-xl">
                <p>Total Price: ${calculateTotalPrice(cartItems)}</p>
              </div>
            )}
          </div>
        </div>
      )}
      {activeButton === 'wishlist' && (
        <div className="mt-10 w-full max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold text-black-600">Wishlist</h2>
          {wishlistItems.length > 0 && (
            <div className="text-right m-6">
              <button
                onClick={() => handleClearAll('wishlist')}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Clear Wishlist
              </button>
            </div>
          )}
          <div className="mt-6 space-y-4">
            {wishlistItems.length === 0 ? (
              <p className="text-gray-600">Your wishlist is empty.</p>
            ) : (
              wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center">
                    <img
                      src={item.product_image}
                      alt={item.product_title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <span className="ml-4 text-lg font-semibold">{item.product_title}</span>
                  </div>
                  <span className="text-lg font-semibold">${item.price}</span>
                </div>
              ))
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
