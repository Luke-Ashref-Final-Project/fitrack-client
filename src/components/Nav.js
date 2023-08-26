import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import authMethods from "../services/auth.service";

const Nav = () => {
  const [theme, setTheme] = useState("cmyk");
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
    
  </div>);
 
};

export default Nav;
