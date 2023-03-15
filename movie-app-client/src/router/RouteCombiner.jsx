import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";

const roleIds = {
  1: "Admin",
  2: "User",
};

const RouteCombiner = () => {
  const user = true;

  const componentAuthorizations = (route) => {
    const { roles } = route;
    if (!user) {
      return <Navigate to="/login" />;
    }

    // let userRole = roleIds[user.rolId];
    // if (route.roles && !route.roles.includes(userRole)) {
    //   // redirect to somwhere safe
    //   // return <Navigate to='/dashboard' replace />;
    //   switch (userRole) {
    //     case "Admin":
    //       return <Navigate to="/home" replace />;
    //     case "User":
    //       return <Navigate to="/home" replace />;
    //     default:
    //       return <Navigate to="/" replace />;
    //   }
    // }
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
