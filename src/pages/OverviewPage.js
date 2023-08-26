import exercise from "../data/exercise.json";
import bodyPart from "../data/bodyPart.json";
import target from "../data/target.json";
import { useState, useEffect } from "react";
import authMethods from "../services/auth.service";
import Nav from "../components/Nav";

const OverviewPage = () => {
  //theme changing
  const [theme, setTheme] = useState("cmyk");
  const storedUser = JSON.parse(localStorage.getItem("user"));

//   const selectClient = () => {
    
//   }

  useEffect(() => {
    //setting themes
    if (storedUser.userType === "coach") {
      setTheme("night");
    } else {
      setTheme("cmyk");
    }
  }, []);

  
  return (
    <div data-theme={theme} className="pb-8">
      <Nav />
      <h1 className="text-3xl">Overview</h1>

    </div>
  );
};

export default OverviewPage;
