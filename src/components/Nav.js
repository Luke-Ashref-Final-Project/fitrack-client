import { useState, useEffect, useContext } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import authMethods from "../services/auth.service";
import { AuthContext } from "../context/auth.context";
import logo from "../logo.svg";

const Nav = () => {
  const [theme, setTheme] = useState("cmyk");
  const { user, isLoggedIn } = useContext(AuthContext);


  useEffect(() => {
    if (user && user.userType === "coach") {
      setTheme("night");
    } else {
      setTheme("cmyk");
    }
  }, [user]);

  return (
    isLoggedIn && (
    <div data-theme={theme} className="flex flex-col items-center">
    
        <div className="flex flex-row items-center">
          <img className="w-8" src={logo} alt="" />
          <span className="text-4xl">Fi𝓣rack</span>
        </div>
   
    </div>
    )
  );
};

export default Nav;
