import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import authMethods from "../services/auth.service";

const CoachesPage = () => {
  const [theme, setTheme] = useState("cmyk");
  const [coachesList, setCoachesList] = useState([]);
  const { user, isLoggedIn } = useContext(AuthContext);

  const getCoaches = async () => {
    try {
        const response = await authMethods.getCoaches();
        console.log(response);
        setCoachesList(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoaches();
  }, []);

  useEffect(() => {
    if (user && user.userType === "client") {
      setTheme("cmyk");
    }
  }, [user]);

  return (
    isLoggedIn && (
        <div>
          {coachesList.length > 0 ? (
            coachesList.map((coach) => (
              <h1 key={coach._id}>{coach?.username}</h1>
            ))
          ) : (
            <p>No coaches available.</p>
          )}
        </div>
      )
    );
};

export default CoachesPage;

