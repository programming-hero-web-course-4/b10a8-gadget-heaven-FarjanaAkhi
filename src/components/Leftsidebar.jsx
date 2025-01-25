import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Leftsidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("All Categories");

  const buttons = [
    { label: "All Categories", path: "/" },
    { label: "laptop", path: "/laptop" },
    
    { label: "Smart Watch", path: "/smartwatch" },
  ];

  
  useEffect(() => {
    const active = buttons.find((button) => button.path === location.pathname);
    if (active) {
      setActiveButton(active.label);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col  gap-6  ">
      {buttons.map((button) => (
        <button
          key={button.label}
          className={`btn p-1 w-full md:w-[196px] text-xl md:text-2xl rounded-2xl  ${
            activeButton === button.label
              ? "bg-blue-400 text-white"
              : "bg-purple-300 text-black"
          }`}
          onClick={() => {
            navigate(button.path);
          }}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
