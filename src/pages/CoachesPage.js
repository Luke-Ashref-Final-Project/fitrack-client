import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authMethods from "../services/auth.service";
import Nav from "../components/Nav";


const CoachesPage = () => {
  const [theme, setTheme] = useState("cmyk");
  const [coachesList, setCoachesList] = useState([]);
  const { user, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const getCoaches = async () => {
    try {
        if (user && user.userType === "client") {
            const response = await authMethods.getCoaches();
            console.log(response);
            setCoachesList(response);
        } else {
            console.log("you're not a client")
            navigate("/")
        }

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
            <Nav />
          {coachesList?.length > 0 ? (
            coachesList?.map((coach) => (
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

