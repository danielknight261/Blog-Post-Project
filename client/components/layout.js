import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    // The div below contains the entire layout of the page
    //<div className="mx-6 md:max-w-2xl md:max-auto font-poppins bg-red-700">
    <div className="mx-10">
      {/* The Nav component renders the navigation bar */}
      <Nav />
      {/* The main content of the page is rendered inside this main element */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
