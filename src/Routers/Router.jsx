import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login";
import Register from "../Pages/Home/Register";
import Loans from "../Pages/Home/Loans";
import About from "../Pages/Home/About";
import Contacts from "../Pages/Home/Contacts";
import DashboardLayout from "../Layouts/DashboardLayout";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,

    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/all-loans",
        element: <Loans></Loans>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contacts></Contacts>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <ManageUser></ManageUser>,
      },
    ],
  },
]);

export default router;
