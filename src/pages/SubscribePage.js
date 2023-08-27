import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Nav from "../components/Nav";

const SubscribePage = () => {
  const [theme, setTheme] = useState("cmyk");
  const { user, isLoggedIn } = useContext(AuthContext);

  // const [allCoaches, setAllCoaches] = useState(null);
  // const [allSubscribedClients, setAllSubscribedClients] = useState(null);

  useEffect(() => {
    if (user && user.userType === "coach") {
      setTheme("night");
    } else {
      setTheme("cmyk");
    }
  }, [user]);

  return (
    isLoggedIn && (
    <div data-theme={theme}>
      <Nav />
      {user?.userType === "client" ? (
        <h1 className="text-2xl">SUBSCRIBER</h1>
      ) : (
        <h1 className="text-2xl">SUBSCRIBE TO COACH</h1>
      )}
    </div>
    )
  );
};

export default SubscribePage;
