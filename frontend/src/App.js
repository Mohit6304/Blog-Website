import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


import Register from "./pages/register";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./style.scss"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/single/:id",
        element: <Single />,
      },
      {
        path: "/create",
        element: <Create />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;