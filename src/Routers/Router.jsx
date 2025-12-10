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
import MyLoan from "../Pages/Dashboard/Users/MyLoan";
import LoanApplication from "../Pages/Dashboard/Admin/LoanApplication";
import AddLoan from "../Pages/Dashboard/Manager/AddLoan";
import ApprovedLoan from "../Pages/Dashboard/Manager/ApprovedLoan";
import PendingLoan from "../Pages/Dashboard/Manager/PendingLoan";
import ManageLoan from "../Pages/Dashboard/Manager/ManageLoan";
import LoanDetails from "../Pages/Home/LoanDetails";
import LoanForm from "../Pages/Home/LoanApplicationForm";
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
        path: "/loan-details/:id",
        element: <LoanDetails></LoanDetails>,
      },
      {
        path: "/loan-form",
        element: <LoanForm></LoanForm>,
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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/home",
        element: <Dashboard></Dashboard>,
      },
      // admin
      {
        path: "/dashboard/manage-user",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "/dashboard/all-loans",
        element: <AllLoans></AllLoans>,
      },

      {
        path: "/dashboard/loan-application",
        element: <LoanApplication></LoanApplication>,
      },
      // Manager
      {
        path: "/dashboard/add-loan",
        element: <AddLoan></AddLoan>,
      },
      {
        path: "/dashboard/approved-loan",
        element: <ApprovedLoan></ApprovedLoan>,
      },
      {
        path: "/dashboard/pending-loan",
        element: <PendingLoan></PendingLoan>,
      },
      {
        path: "/dashboard/manage-loan",
        element: <ManageLoan></ManageLoan>,
      },
      // User
      {
        path: "/dashboard/my-loan",
        element: <MyLoan></MyLoan>,
      },
    ],
  },
]);

export default router;
