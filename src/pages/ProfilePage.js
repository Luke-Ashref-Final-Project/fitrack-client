import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/auth.context";
import authMethods from "../services/auth.service";
import Nav from "../components/Nav";
import axios from "axios";

const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");
  const [theme, setTheme] = useState("cmyk");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const newInfo = async () => {
      const retrievedInfo = await authMethods.verifyToken(storedToken);
      console.log(retrievedInfo, "retrievedInfo");
      setEmail(retrievedInfo.email);
      setUsername(retrievedInfo.username);
      setUserType(retrievedInfo.userType);
      if (retrievedInfo.userType === "coach") {
        setTheme("night");
      } else {
        setTheme("cmyk");
      }
    };
    newInfo();
  }, []);

  return (
    <div data-theme={theme}>
      <Nav />
      <div className="w-full">
        <h1 className="text-3xl">Profile page</h1>
        <h4 className="text-2xl">Email</h4>
        <h4>{email}</h4>
        <h4 className="text-2xl">Username</h4>
        <h4>{username}</h4>
        <h4 className="text-2xl">User type</h4>
        <h4>{userType}</h4>
      </div>
    </div>
  );
};

export default ProfilePage;
