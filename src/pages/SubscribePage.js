import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";

const SubscribePage = () => {
  
  const [theme, setTheme] = useState("cmyk");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user);

    if (user && user.userType === "coach") {
      setTheme("night");
    } else {
      setTheme("cmyk");
    }
  }, [user]);

  return (
    <div data-theme={theme}>
      { user.userType === "client" ? (
        <h1 className="text-2xl">SUBSCRIBE TO COACH</h1>
      ) : (
        <h1 className="text-2xl">SUBSCRIBERS</h1>
      )}
    </div>
  );
};

export default SubscribePage;
