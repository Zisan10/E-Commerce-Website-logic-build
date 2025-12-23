import React from "react";
import Logo from "../../assets/logo.png";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className=" bg-zinc-100">
      <div className="max-w-300 mx-auto px-10 py-10 flex justify-between gap-5">
        <div className="w-95">
          <div className="flex justify-start items-center gap-2">
            <img src={Logo} className="w-10" />
            <h3 className="text-zinc-800 text-2xl font-semibold">
              my<span className="text-3xl font-bold text-blue-600">S</span>hop
            </h3>
          </div>
          <p className="py-5 text-zinc-600">
            This Website is only a demo created to improve a web developer's
            logic and skills. No products are bought or sold here. Thank you by
            Md Zisan Uddin.{" "}
          </p>
          <p className="text-zinc-800 font-medium">
            &copy; All rights reserve 2025.
          </p>
        </div>
        <div className="w-55">
          <h4 className="text-xl font-bold text-zinc-800 pb-5">Quick Links</h4>
          <ul>
            <li className="pb-3">
              <a href="#" className="text-zinc-800 text-md hover:text-blue-600">
                Home
              </a>
            </li>
            <li className="pb-3">
              <a href="#" className="text-zinc-800 text-md hover:text-blue-600">
                Menu
              </a>
            </li>
            <li className="pb-3">
              <a href="#" className="text-zinc-800 text-md hover:text-blue-600">
                About
              </a>
            </li>
            <li className="pb-3">
              <a href="#" className="text-zinc-800 text-md hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-xl font-bold text-zinc-800 pb-5">Get in Touch</h4>
          <div className="flex gap-x-2">
            <span className="text-blue-600 text-2xl font-bold">
              <FaLocationArrow />
            </span>
            <div>
              <h4 className="text-zinc-800 font-bold">Office Address:</h4>
              <p className="text-zinc-600 pb-5">
                Kushtia-Sadar,Level 10,near in KPI, Kushtia
              </p>
            </div>
          </div>
          <div className="flex gap-x-2">
            <span className="text-blue-600 text-2xl font-bold">
              <FaPhone />
            </span>
            <div>
              <h4 className="text-zinc-800 font-bold">Phone Number:</h4>
              <p className="text-zinc-600 pb-5">+8809099-007865</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-zinc-800 text-lg font-bold pb-5">
            Subscribe for more offers!
          </p>
          <div className="flex 2 rounded-lg border border-blue-500">
            <input
              type="email"
              name="email"
              id="email"
              autoCapitalize="off"
              required
              placeholder="Enter Email"
              className="bg-white py-2 border-0 outline-none px-5 rounded-l-lg"
            />
            <button className="cursor-pointer bg-blue-600 text-white rounded-r-lg px-5 active:bg-blue-700 font-bold">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
