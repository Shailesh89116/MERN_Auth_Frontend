import {  Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const user =  localStorage.getItem("authToken")
  return (
    <>
    {
      user ? <Home/> : <Login/>
    }
    </>
  );
};

export default PrivateRoute;