import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/auth.context";
import authMethods from "../services/auth.service";
import Nav from "../components/Nav";
import axios from "axios";

const ProfilePage = () => {
  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [userType, setUserType] = useState("");
  const [theme, setTheme] = useState("cmyk");
  // const [isLoading, setLoading] = useState(true);

  const storedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (storedUser.userType === "coach") {
      setTheme("night");
    } else {
      setTheme("cmyk");
    }
  }, []);

  return (
    <div data-theme={theme}>
      <Nav />
      {/*Checks if there's a stored used*/}
      {storedUser ? (
        <div className="w-full">
          <h1 className="text-3xl">Profile page</h1>
          <h4 className="text-2xl">Email</h4>
          <h4>{storedUser.email}</h4>
          <h4 className="text-2xl">Username</h4>
          <h4>{storedUser.username}</h4>
          <h4 className="text-2xl">User type</h4>
          <h4>{storedUser.userType}</h4>
        </div>
      ) : (
        <p>No user profile data available.</p>
      )}
    </div>
  );
};

export default ProfilePage;
