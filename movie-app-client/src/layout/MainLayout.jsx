import React from "react";
import Navbar from "../components/navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
