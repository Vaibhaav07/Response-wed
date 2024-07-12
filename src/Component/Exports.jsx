import React from 'react';
import laptop from  "../asstes/laptop.jpg";
import { Link } from 'react-router-dom';

export default function Exports() {
  return (
    <div className="max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2 gap-4">
      <div className="col-span-1 md:w-[80%]">
        <img src={laptop} alt="Laptop" className="inline" />
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold mt-10">LEARN FROM EXPERTS</p>
        <p className="mt-5 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit
          dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
          eveniet ex deserunt fuga?
        </p>
        <Link to="/test">
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Play to Game
          </button>
        </Link>
      </div>
    </div>
  );
}
