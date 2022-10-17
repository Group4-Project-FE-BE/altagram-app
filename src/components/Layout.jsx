import React from "react";
import NavScroll from "./NavBar";

function Layout({ children }) {
  return (
    <div>
      <div>
        <NavScroll />
      </div>
      {children}
    </div>
  );
}

export default Layout;
