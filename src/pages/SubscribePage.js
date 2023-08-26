import { useState, useEffect } from "react";
import Nav from "../components/Nav";

const SubscribePage = () => {
  const [theme, setTheme] = useState("cmyk");
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [allCoaches, setAllCoaches] = useState(undefined);
  const [allSubscribedClients, setAllSubscribedClients] = useState(undefined);

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
      {storedUser.userType === "client" ? (
        <h1 className="text-2xl">SUBSCRIBER</h1>
      ) : (
        <h1 className="text-2xl">SUBSCRIBE TO COACH</h1>
      )}
    </div>
  );
};

export default SubscribePage;
