import React from "react";
// import Main from './Main'
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="bg-stone-200 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
