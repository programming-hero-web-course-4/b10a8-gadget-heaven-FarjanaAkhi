import React from 'react'
import Navbar from '../components/Navbar'
import logo from '../assets/banner.jpg'
import Footer from '../components/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import Leftsidebar from '../components/Leftsidebar';
import Rightsidebar from '../components/Rightsidebar';

export default function Homepage() {

 const data= useLoaderData();
 console.log(data);


  return (
    <div>
   <div className="bg-purple-500 flex flex-col text-white text-2xl mx-auto h-auto rounded-2xl font-sora relative mb-5 p-5 md:p-10 ">
  <Navbar />

  {/* Header Section */}
  <div className="text-center max-w-[800px] mx-auto ">
    <h1 className="font-bold text-6xl md:text-4xl">
      Upgrade Your Tech Accessorize with Gadget Heaven Accessories
    </h1>
    <p className="mt-5 text-base md:text-xl">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
    </p>
    <button className="bg-white rounded-2xl text-purple-500 px-6 py-3 mt-4 hover:bg-purple-200 transition-all">
      Shop now
    </button>
  </div>

  {/* Image Section */}
  <div className="relative w-full flex justify-center mt-[150px] md:mt-[200px]">
    <div className="absolute top-[50%] transform -translate-y-[50%]">
      <div className="bg-transparent border rounded-2xl max-w-[90%]  mx-auto shadow-lg">
        <img
          className="h-[250px] md:h-[300px] w-full mx-auto p-3 rounded-3xl"
          src={logo}
          alt="Logo"
        />
      </div>
    </div>
  </div>
</div>






<div className="mt-[150px]"></div>





    <div className="mx-auto w-8/12 flex flex-col lg:flex-row gap-10 mt-[200px] bg-gray-50 p-6 rounded-lg shadow-lg">
  {/* Left Sidebar */}
  <div className="w-full lg:w-1/4 p-4 rounded-lg shadow-md border  items-center">
    <Leftsidebar />
  </div>
<div className="">
  {/* Product Grid right side  */}
  <Outlet></Outlet>
  </div>
  
</div>



<div className='mt-11'>
<Footer></Footer>
</div>


    </div>
  );
}
