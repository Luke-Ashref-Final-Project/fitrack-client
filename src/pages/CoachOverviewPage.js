import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authMethods from "../services/auth.service";
import Nav from "../components/Nav";

const CoachOverviewPage = () => {
    const [theme, setTheme] = useState("cmyk");
    const { user, isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user && user.userType === "client") {
          setTheme("cmyk");
        }
      }, [user]);
  
  return (
    isLoggedIn && (
    <div>
      <div id={coach.id} className="card w-72 glass mx-auto mt-4">
              <figure><img src={coach.image} alt="coach image"/></figure>
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
    </div>
  )
  )
}

export default CoachOverviewPage
