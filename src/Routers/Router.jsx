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
import GuestRoute from "./Private/GuestRoute";
import PrivateRoute from "./Private/PrivateRoute";
import Profile from "../Pages/Common/Profile";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllLoans from "../Pages/Dashboard/Admin/AllLoans";

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
        element: (
          <GuestRoute>
            <Login></Login>,
          </GuestRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <GuestRoute>
            <Register></Register>,
          </GuestRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/manage-user",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "/dashboard/all-loans",
        element: <AllLoans></AllLoans>,
      },
    ],
  },
]);

export default router;
