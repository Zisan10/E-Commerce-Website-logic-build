import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { BsCartFill } from "react-icons/bs";

const Navbar = ({
  handleScroll,
  setSearchTerm,
  handlePannel,
  totalItems,
  wishList,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeNavbar = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", changeNavbar);
  }, []);

  return (
    //
    <header
      className={`bg-white fixed top-0 w-full z-30 ${
        isScrolled ? "shadow-lg" : ""
      }`}>
      <nav className="max-w-300 px-12 mx-auto h-[14vh] flex items-center justify-between">
        {/* this is our logo  */}
        <a href="#" className="flex w-15 h-15 bg-zinc-100 rounded-full p-2">
          <img src={logo} className="w-full h-full object-contain" />
        </a>

        {/* nav actions  */}
        <div className="flex items-center gap-x-5">
          {/* searchBar  */}
          <div className="flex justify-center items-center p-1 rounded-full border-2 border-blue-500">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search..."
              autoCapitalize="off"
              className="h-[5vh] pl-4 flex-1 focus:outline-none rounded-l-full"
              onFocus={handleScroll}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button className="text-xl flex items-center justify-center bg-blue-600 w-10 h-10 rounded-full text-white">
              <IoSearch />
            </button>
          </div>
          {/* icons  */}
          <button
            className=" text-[1.7rem] text-zinc-800 cursor-pointer relative"
            onClick={() => handlePannel("wishlist")}>
            <GoHeartFill />
            {wishList.length > 0 && (
              <span className="bg-red-600 h-5 w-5 text-[14px] text-white flex justify-center items-center rounded-full absolute top-4 right-3 border-2 border-white">
                {wishList.length}
              </span>
            )}
          </button>

          <button
            className="text-[1.7rem] text-zinc-800 cursor-pointer relative"
            onClick={() => handlePannel("cart")}>
            <BsCartFill />
            {totalItems > 0 && (
              <span className="bg-red-600 h-5 w-5 text-[14px] text-white flex justify-center items-center rounded-full absolute top-4 right-4 border-2 border-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
