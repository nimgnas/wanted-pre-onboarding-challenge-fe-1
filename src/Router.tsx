import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import TodoDetail from "./components/home/TodoDetail";

const Router = createBrowserRouter([
  {
    path: "/todos",
    element: <Home />,
    children: [{ path: ":id", element: <TodoDetail /> }],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/*",
    element: <div style={{ color: "white" }}>!!404!!</div>,
  },
]);

export default Router;
