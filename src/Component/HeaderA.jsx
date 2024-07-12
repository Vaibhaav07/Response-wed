import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function HeaderA() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#5699fb] p-4">
      <div className="max-w-[1540px] py-[15px] items-center flex justify-between mx-auto">
        <div className="text-5xl font-bold">ReapMaind</div>

        {toggle? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-5xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-5xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>Coures</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        {/* Responsive menu */}
        <ul
          className={` duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] ${
            toggle ? "left-[0]" : "left-[-100%]"
          }`}
        >
           <li className="p-5">Home</li>
          <li className="p-5">Coures</li>
          <li className="p-5">Blog</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
}
