import React from "react";

const Home = () => {
  return (
    <main className="relative w-full h-screen">
      {/* Background Image */}
      <img 
        src="./images/bg.png" 
        alt="Furniture" 
        className="w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-self-end my-78  md:m-30  text-white bg-opacity-50">
        <div className="bg-[#FFF3E3] max-w-lg w-full p-2 md:p-12 mt-20">
        <p className="text-[#B88e2f] text-xs pt-2.5 font-bold uppercase mb-5">New Arrival</p>
        <h1 className="text-[#BC943A] text-3xl md:text-4xl font-extrabold">Discover Our New Collection</h1>
        <p className="text-black mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore riam aliquam itaque nemo ullam sit. Fugit.</p>
        <button className="bg-[#BC943A] text-white px-4 py-2 mt-5">Buy Now</button>
        </div>
      </div>
    </main>
  );
};

export default Home;