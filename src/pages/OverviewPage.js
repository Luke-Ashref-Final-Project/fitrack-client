import { useState, useEffect, useContext } from "react";
import Nav from "../components/Nav";
import CoachDashboard from "../components/CoachDashboard";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

const OverviewPage = () => {
  //theme changing
  const [theme, setTheme] = useState("cmyk");
  const { user } = useContext(AuthContext);
  const [allExercises, setAllExercises] = useState(null);

  if (user) {
    console.log(user);
  }

  useEffect(() => {
    const getdata = async () => {
      try {
        if (user && user.userType === "coach") {
          const response = await apiMethods.getAllExercisesForCoach(user._id);
          console.log(response);
          setAllExercises(response);
        } else {
          const response = await apiMethods.getAllExercisesForClient(user._id);
          console.log(response.data);
          setAllExercises(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getdata();
  }, [user]);

  useEffect(() => {
    //setting themes
    if (user && user.userType === "coach") {
      setTheme("night");
    } else {
      setTheme("cmyk");
    }
  }, [user]);

  return (
    <div data-theme={theme} className="pb-8">
      <Nav />
      {user?.userType === "coach" && <CoachDashboard coachId={user._id} />}
      <h1 className="text-3xl">Overview</h1>
      {allExercises &&
        allExercises.map((eachExercise) => {
          return (
            <div
              key={eachExercise._id}
              className="card bg-base-100 shadow-xl card-bordered mx-6 mb-8"
            >
              <figure>
                <img src={eachExercise.image} alt="exercise" id="gifImage" />
              </figure>
              <div className="card-body">
                <h1 className="card-title text-1xl" id="exerciseName">
                  {eachExercise.name}
                </h1>
                <div className="card-actions justify-between items-center">
                  <div className="badge badge-secondary" id="bodyPart">
                    {eachExercise.bodypart}
                  </div>
                  <Link to={`/overview/${eachExercise._id}`} >View detail</Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default OverviewPage;
