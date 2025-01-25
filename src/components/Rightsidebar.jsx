import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Rightsidebar({ product }) {
 
  const navigate=useNavigate();

  const handleClick = () => {
    navigate('/details', { state: { product } });
  };


  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white flex flex-col items-start space-y-4">
      <img
        src={product.product_image}
        alt={product.product_title}
        className="w-40 h-40 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold">{product.product_title}</h2>
      <p className="text-purple-600 font-bold text-lg">${product.price}</p>
      <button onClick={handleClick} className="bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-600 transition duration-300">
        View Details
      </button>
    </div>
  );
}

