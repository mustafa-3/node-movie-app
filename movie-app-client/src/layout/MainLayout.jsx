import React from "react";
import Navbar from "../components/navbar/Navbar";
import RouteCombiner from "../router/RouteCombiner";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <RouteCombiner />
      </div>
    </div>
  );
};

export default MainLayout;
