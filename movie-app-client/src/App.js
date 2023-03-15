import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import AppRouter from './router/AppRouter'
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/login/Login";
// import routes from "./router/routes";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const reftoken = true;

  const PrivateRouter = ({ children }) => {
    return reftoken ? children : <Navigate to="/login" />;
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
            <PublicRouter>
              <Navbar />
              <Login />
            </PublicRouter>
          }
        />
        <Route
          path={"*"}
          element={
            <PrivateRouter>
              <MainLayout />
            </PrivateRouter>
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
