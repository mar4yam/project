import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let [open, setopen] = useState(false)
  function toogle() {
    setopen(!open)
  }
  return (
    <div >
      <nav className="bg-gray-800 py-8  ">
        <div className="  md:flex justify-around items-center relative ">
          <div>
            
              <span className="text-3xl font-bold ">
                <NavLink to={"/"}>SRART FRAMEWORK</NavLink>
              </span>
            
          </div>
          <div>
            <ul className= {`md:flex gap-11 font-medium ${open?'block':'hidden'}`} >
              <li>
                <NavLink to={"about"}>ABOUT</NavLink>
              </li>
              <li>
                <NavLink to={"portfolio"}>PORTFOLIO</NavLink>
              </li>
              <li>
                <NavLink to={"contact"}>CONTACT</NavLink>
              </li>
            </ul>
          </div>

          <i onClick={toogle} className={`md:hidden block ${!open?'fa-bars':'fa-close'} fas fa-2x absolute top-0 right-2 cursor-pointer text-white`}></i>
        </div>
      </nav>
    </div>
  );
}
