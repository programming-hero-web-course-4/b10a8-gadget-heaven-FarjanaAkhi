import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function AllCategories() {
  const products = useLoaderData(); 
  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate("/details", { state: { product } }); 
  };

  return (
    <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-10  ">
      {products.map((product) => (
        <div
          key={product.product_id}
          className=" p-10 border rounded-lg shadow-lg bg-white flex flex-col items-start "
        >
          <img
            src={product.product_image}
            alt={product.product_title}
            className="w-40 h-40 object-cover rounded-lg"
          />
          <h2 className="text-xl font-bold">{product.product_title}</h2>
          <p className="text-purple-600 font-bold text-lg">${product.price}</p>
          <button
            onClick={() => handleClick(product)}
            className="bg-purple-500 text-white p-3 rounded-xl hover:bg-purple-600 transition duration-300"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}
