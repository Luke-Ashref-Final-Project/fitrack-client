import { useState, useEffect, useContext } from "react";
import apiMethods from "../services/api.service";
import Nav from "../components/Nav";
import CoachDashboard from "../components/CoachDashboard";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import authMethods from "../services/auth.service";

const OverviewPage = () => {
  //theme changing
  const [theme, setTheme] = useState("cmyk");
  const { user } = useContext(AuthContext);
  const [allExercises, setAllExercises] = useState(null);
  const [allClients, setAllClients] = useState(null);
  const [filteredExercises, setFilteredExercises] = useState(null);

  const handleFiltering = (value) => {
    if (value !== "all") {
      const newAllExercises = allExercises.filter((item) => {
        return item.clientid === value;
      });
      setFilteredExercises(newAllExercises);
    } else {
      setFilteredExercises(allExercises);
    }
  };

  useEffect(() => {
    const getdata = async () => {
      try {
        if (user && user.userType === "coach") {
          const response = await apiMethods.getAllExercisesForCoach(user._id);
          const fetchedSubs = await authMethods.getAllSubscribers();
          if (fetchedSubs) {
            setAllClients(fetchedSubs);
          }
          console.log(response); //this seems undefined at the deployed version...
          if (response) {
            setAllExercises(response);
            setFilteredExercises(response);
          }
        } else if (user && user.userType === "client") {
          const response = await apiMethods.getAllExercisesForClient(user._id);
          if (response) {
            setAllExercises(response);
            setFilteredExercises(response);
          }
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
      <h1 className="text-3xl">Overview</h1>
      {user?.userType === "coach" && (
        <>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => handleFiltering(e.target.value)}
          >
            <option value="all">All</option>
            {allClients &&
              allClients.subscribersIds.map((client) => {
                return (
                  <option key={client._id} value={client._id}>
                    {client.username}
                  </option>
                );
              })}
          </select>
          <CoachDashboard coachId={user._id} />
        </>
      )}
      {filteredExercises &&
        filteredExercises.map((eachExercise) => {
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
                  <Link to={`/overview/${eachExercise._id}`}>
                    <button className="btn btn-primary">View detail</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default OverviewPage;
