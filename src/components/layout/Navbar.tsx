import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import CommonButton from "../common/CommonButton";

const Navbar: React.FC = () => {
  let location = useLocation();

  return (
    <header className="py-4 w-full z-50">
      <div className="container">
        <div className="flex items-center justify-between bg-white rounded-xl py-3 pr-4 pl-5 border border-stone-300">
          <Link to="/" className="font-medium text-black h-4 sm:h-5 flex">
            <img src={Logo} />
          </Link>
          <CommonButton
            link={location.pathname === "/" ? "note" : "/"}
            text={location.pathname === "/" ? "Get Started" : "Go Back"}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
