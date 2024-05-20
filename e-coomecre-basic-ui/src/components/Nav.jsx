import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
        <a
          href="/create"
          className="py-2 px-5 border rounded border-blue-200 text-blue-300"
        >
          Add New Product
        </a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl w-[80%] mb-3">Category Filter</h1>
        <ul className=" w-[80%]">
          <li className=" mb-3 flex items-center">
            {" "}
            <span className=" rounded-full  w-[15px] h-[15px] mr-2 bg-blue-100"></span>
            Cat1
          </li>
          <li className=" mb-3 flex items-center">
            {" "}
            <span className=" rounded-full  w-[15px] h-[15px] mr-2 bg-green-500"></span>
            Cat1
          </li>
          <li className="mb-3 flex items-center">
            {" "}
            <span className=" rounded-full  w-[15px] h-[15px] mr-2 bg-red-300"></span>
            Cat1
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
