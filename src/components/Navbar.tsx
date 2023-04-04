import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

export const Navbar = () => {
  return (
    <nav className="nav-wrapper w-full min-w-320 h-48 max-h-12 text-base bg-gray-200">
      <div className="px-4 mx-auto box-border w-full max-w-5xl">
        <ul className="cursor-default w-auto  flex justify-between list-none -mx-2 items-center">
          <li>
            <img src={Logo} alt="Apple" />
          </li>
          {[
            "Store",
            "Mac",
            "iPad",
            "iPhone",
            "Watch",
            "AirPods",
            "TV & Home",
            "Entertainment",
            "Accessories",
          ].map((item) => (
            <li key={item}>
              <a className="">{item}</a>
            </li>
          ))}
          <li>
            <img src={Search} alt="Search" />
          </li>
          <li>
            <img src={Store} alt="Store" />
          </li>
        </ul>
      </div>
    </nav>
  );
};
