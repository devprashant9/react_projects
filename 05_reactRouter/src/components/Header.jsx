import React from "react";
import { Link, NavLink } from "react-router";

function Header() {
  return (
    <nav className="w-full h-16 bg-slate-900 p-2 flex items-center justify-around text-lg text-semibold cursor-pointer">
      <div className="bg-red-500">
        <Link>
          <img src="" alt="project-logo" />
        </Link>
      </div>
      <div className="">
        <ul className="flex items-center justify-center gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-orange-600 bg-slate-950 p-1 rounded-md ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-orange-600 bg-slate-950 p-1 rounded-md ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-orange-600 bg-slate-950 p-1 rounded-md ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                `text-orange-600 bg-slate-950 p-1 rounded-md ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              GitHub
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="bg-red-500">CTA</div>
    </nav>
  );
}

export default Header;
