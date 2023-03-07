import React from "react";

const Home = React.lazy(() => import("../pages/home/Home"));
const Login = React.lazy(() => import("../pages/login/Login"));
const Register = React.lazy(() => import("../pages/register/Register"));
const MovieDetail = React.lazy(() => import("../pages/detail/MovieDetail"));
const AddMovie = React.lazy(() => import("../pages/addMovie/AddMovie"));
const EditMovie = React.lazy(() => import("../pages/editMovie/EditMovie"));

const roles = {
  public: ["Admin", "User"],
  admin: ["Admin"],
  // user: ["Admin", "User"],
};

const routes = [
  {
    path: "/",
    name: "Home",
    element: Home,
    exact: true,
    roles: roles.public,
  },
  {
    path: "/home",
    name: "Home",
    element: Home,
    exact: true,
    roles: roles.public,
  },
  {
    path: "/login",
    name: "Login",
    element: Login,
    exact: true,
    roles: roles.public,
  },
  {
    path: "/register",
    name: "Register",
    element: Register,
    exact: true,
    roles: roles.public,
  },
  {
    path: "/details/:id",
    name: "MovieDetail",
    element: MovieDetail,
    exact: true,
    roles: roles.public,
  },
  {
    path: "/add-movie",
    name: "AddMovie",
    element: AddMovie,
    exact: true,
    roles: roles.admin,
  },
  {
    path: "/edit-movie",
    name: "EditMovie",
    element: EditMovie,
    exact: true,
    roles: roles.admin,
  },
];

export default routes;
