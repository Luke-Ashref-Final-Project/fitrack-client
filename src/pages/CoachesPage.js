import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authMethods from "../services/auth.service";
import Nav from "../components/Nav";


const CoachesPage = () => {
  const [theme, setTheme] = useState("cmyk");
  const [coachesList, setCoachesList] = useState([]);
  const { user, isLoggedIn, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSubscribe = async () => {
    try {

    } catch (error) {
      throw error;
    }
  }
  
  useEffect(() => {
    if (user && user.userType === "client") {
      const getCoaches = async () => {
        try {
          const response = await authMethods.getCoaches();
          console.log(response);
          setCoachesList(response);
        } catch (error) {
          console.log(error);
        }
      };
      getCoaches();
    } else if (user && user.userType !== "client") {
      console.log("you're not a client");
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user && user.userType === "client") {
      setTheme("cmyk");
    }
  }, [user]);

  if (isLoading) {
    return <span className="loading loading-spinner text-error"></span>;
  }

  return (
    isLoggedIn && (
      <div>
        <Nav />
        {coachesList?.length > 0 ? (
          coachesList.map((coach) => (
            <div className="card w-72 glass mx-auto mt-4">
              <figure><img src={coach.image} alt="car!"/></figure>
              <div className="card-body">
                <h2 className="card-title">{coach.username}</h2>
                <p>coache's description</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSubscribe(coach._id)}
                  >
                    Subscribe!
                </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No coaches available.</p>
        )}
      </div>
    )
  );
};

export default CoachesPage;

