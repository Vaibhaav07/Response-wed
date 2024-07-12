import React from "react";

export default function Banner() {
  return (
    <div className="bg-[#5699fb] w-full py-[50px]">
      <div className="max-w-[1240px] mt-[100px] mx-auto text-center font-bold">
        <div className="text-xl md:text-3xl ">Learn with us</div>
        <h2 className="text-white text-5xl md:text-[80px]">Grow with us.</h2>
        <div className="text-[20px] md:text-[50px] md:p-[24px] text-white">
          Learn
      
        </div>
        
        <button class="bg-blue-900 hover:bg-sky-700 rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
      </div>
    </div>
  );
}
