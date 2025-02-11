import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center mt-5">
        <nav className="flex items-center gap-10">
          <a href="#">
            <img src="./images/herologo.png" alt="logo" />
          </a>
          <ul className="flex gap-10">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <a href="">
                <img src="./images/bghero.png" alt="" />
            </a> */}
    </header>
  );
};

export default Header;
