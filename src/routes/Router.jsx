import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      element:<App/>,
      children:[
        {
            path:"/",
            element: <PrivateRoute><Home/></PrivateRoute>
        }
      ]
    },
    {
        element:<Login/>,
        path:"/login"
    },
    {
        element:<Register/>,
        path:"/register"
    },
    {
        element:<ForgotPassword/>,
        path:"/forgotpassword"
    },
    {
        element:<ResetPassword/>,
        path:"/passwordReset/:resetToken"
    },
  ]);


  export default router;