import React, { Suspense, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";

const RouteCombiner = () => {
  const componentAuthorizations = (route) => {
    return <route.element />;
  };

  return (
    <>
    <Suspense>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              name={route.name}
              element={componentAuthorizations(route)}
            />
          );
        })}
      </Routes>
      </Suspense>
    </>
  );
};

export default RouteCombiner;
