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
      <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-opacity-40">
        <div className="bg-[#FFF3E3] text-black max-w-lg w-full p-6 md:p-10 ">
          <p className="text-[#B88e2f] font-bold uppercase">New Arrival</p>
          <h1 className="text-2xl md:text-4xl font-semibold">Discover Our New Collection</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempore aliquam itaque nemo ullam sit. Fugit.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;