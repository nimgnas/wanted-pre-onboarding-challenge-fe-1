import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Auth from "./pages/auth";
import Home from "./pages/home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      {
        path: "auth",
        element: <Auth />,
        children: [
          { path: "login", element: <Login /> },
          { path: "signup", element: <SignUp /> },
        ],
      },
    ],
  },
]);

export default Router;
