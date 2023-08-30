import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authMethods from "../services/auth.service";
import Nav from "../components/Nav";

const CoachOverviewPage = () => {
    const [theme, setTheme] = useState("cmyk");
    const [coach, setCoach] = useState(null)
    const { user, isLoggedIn } = useContext(AuthContext);
    const { coachId } = useParams();

    useEffect(() => {
      if (user && user.userType === "client") {
        setTheme("cmyk");
      }
    
      const coachDetails = async () => {
        try {
          const response = await authMethods.coachOverview(coachId);
          // Need to find a way to make it something else
          setCoach(response.coach);
        } catch (error) {
          console.log(error);
        }
      };
    
      coachDetails();
    
    }, [user, coachId]);
  
  return (
    isLoggedIn && (
      <div>
        <Nav />
        {coach ? (
          <div id={coach.id} className="card w-72 glass mx-auto mt-4">
            <figure><img src={coach.image} alt="coach"/></figure>
            <div className="card-body">
              <h2 className="card-title">{coach.username}</h2>
              <p>coach's description</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  // onClick={() => handleSubscribe(coach._id)}
                >
                  Subscribe!
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading coach details...</p>
        )}
      </div>
    )
  );
}

export default CoachOverviewPage
