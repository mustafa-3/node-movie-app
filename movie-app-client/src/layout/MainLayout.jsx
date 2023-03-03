import React from "react";
// import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import RouteCombiner from "../router/RouteCombiner";

const MainLayout = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <Navbar />
      <div>
        <RouteCombiner />
      </div>
    </div>
  );
};

export default MainLayout;
