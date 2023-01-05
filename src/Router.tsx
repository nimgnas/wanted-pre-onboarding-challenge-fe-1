import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import App from "./App";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Auth from "./pages/Auth";

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
