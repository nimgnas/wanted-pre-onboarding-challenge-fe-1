import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import App from "./App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);

export default Router;
