import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import AppRouter from './router/AppRouter'
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/login/Login";
import routes from "./router/routes";

const App = () => {
  const user = true;

  const PrivateRouter = ({ children }) => {
    return user ? children : <Navigate to="/register" />;
  };

  function PublicRouter({ children }) {
    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          name="Login"
          element={
            <PrivateRouter>
              <Login />
            </PrivateRouter>
          }
        />
        <Route
          path={"*"}
          element={
            <PublicRouter>
              <MainLayout />
            </PublicRouter>
          }
        />
        {/* {routes.map((route) => {
          console.log(route);
          return (
            <Route
              path={route.path + "/*"}
              element={
                <PublicRouter>
                  <MainLayout />
                </PublicRouter>
              }
            />
          );
        })} */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
