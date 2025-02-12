import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full transition-all duration-500">
      <div className="container flex mt-7">
        <a href="#" className="cursor-pointer z-2">
          <img src="./images/herologo.png" alt="logo" />
        </a>
        <nav className="flex items-center w-full">
          <ul className="flex font-semibold items-center gap-10 md:m-auto lg:m-auto xl:m-auto">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <span className="flex items-center gap-10">
            <img src="./icons/profile.svg" alt="profle" />
            <img src="./icons/search.svg" alt="search" />
            <img src="./icons/liked.svg" alt="love" />
            <img src="./icons/cart.svg" alt="cart" />
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
