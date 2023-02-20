import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  const navigate= useNavigate();

  const logout=()=>{
    localStorage.removeItem("authToken");

    navigate("/login");
  }

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("https://mern-auth-backend-g1ut.onrender.com/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("authToken");
        setError(`You are not authorized please ${<Link to="/login">Login</Link>}`);
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
    <div>{privateData}</div>
    <button onClick={logout} className="btn btn-primary">Logout</button>
    </>
  );

 
};

export default Home;