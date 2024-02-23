import { useState } from "react";
import { FaBars } from "react-icons/fa";

import LinkBar from "./LinkBar";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/products", name: "Products" },
    { id: 2, path: "/aboutUs", name: "About-Us" },
    { id: 2, path: "/aboutUs", name: "About-Us" },
    { id: 3, path: "/login", name: "Login" },
  ];
  return (
    <div className="   sticky top-0 border-b shadow-lg shadow-blue-200 bg-blue-50 z-[9999]">
      <div className="py-4 container mx-auto px-2">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="block text-4xl font-bold ami">Logo</h1>
          </div>
          <div>
            <ul className=" hidden md:flex">
              {routes.map((route) => (
                <LinkBar key={route.id} route={route}></LinkBar>
              ))}
            </ul>
            <div onClick={() => setOpen(!open)}>
              {open ? (
                <FaBars className="md:hidden  text-3xl text-green-800 font-bold"></FaBars>
              ) : (
                <span className="text-3xl font-bold bg-red-500 hover:bg-red-600 hover:text-4xl text-white px-2 rounded ">
                  X
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <ul
            className={` fixed text-center space-y-5 text-black duration-1000 pr-2 top-20 mt-1 h-screen  w-3/4 opacity-95 bg-green-900  ${
              !open ? " left-0" : "left-[-800px] "
            }`}
          >
            {routes.map((route) => (
              <LinkBar
                open={open}
                setOpen={setOpen}
                key={route.id}
                route={route}
              ></LinkBar>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
