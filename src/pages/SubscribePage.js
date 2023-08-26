import { useState, useEffect } from "react";
import Nav from "../components/Nav";

const SubscribePage = () => {
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
      <Nav />
      <h1>SUBSCRIBE TO COACH</h1>
    </div>
  );
};

export default SubscribePage;
