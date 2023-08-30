import { AuthContext } from "../context/auth.context";
import authMethods from "../services/auth.service";
import apiMethods from "../services/api.service";
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

const NewExercisePage = () => {
  const { user, isLoggedIn, isLoading } = useContext(AuthContext);
  const [theme, setTheme] = useState("cmyk");

  const location = useLocation();
  // const { name, bodyPart, gifUrl, id } = location.state || {}; // Add default empty object
  const [name, setName] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [gifUrl, setGifUrl] = useState("");
  const [id, setId] = useState("");
  const [subscribers, setSubscribers] = useState([]);
  const [description, setDescription] = useState("");
  const [coachid, setCoachId] = useState("");

  const handleCreateNewExercise = () => {
    apiMethods.createNewExercise({
    });
  };

  //UPON LOADING, RECEIVING THE DATA PASSED THROUGHT THE ROUTE
  useEffect(() => {
    if (user && user.userType === "coach") {
      setTheme("night");
      authMethods
        .getAllSubscribers()
        .then((data) => {
          const subs = data.subscribersIds;
          setSubscribers(subs);
          console.log("This is the whole data", subs);
        })
        .catch((err) => {
          console.error("Error fetching subscribers:", err);
        });
    } else {
      setTheme("cmyk");
    }

    if (location.state) {
      setName(location.state.name);
      setBodyPart(location.state.bodyPart);
      setGifUrl(location.state.gifUrl);
      setId(location.state.id);
    }
    // console.log(location);
    // console.log(location.state);
    console.log(name);
    console.log(bodyPart);
    console.log(gifUrl);
    console.log(id);
  }, [name, bodyPart, gifUrl, id]);

  return (
    <div data-theme={theme}>
      <Nav />
      <h1 className="text-3xl mb-2 mt-4">Create new exercise</h1>
      <div className="pt-2 pb-4">
        <div className="card bg-base-100 shadow-xl card-bordered mx-6 mb-8">
          <figure>
            <img src={gifUrl} alt="exercise" id="gifImage" />
          </figure>
          <div className="card-body">
            <h1 className="card-title text-1xl" id="exerciseName">
              {name}
            </h1>
            <div className="flex flex-col space-y-4">
              <label htmlFor="selectClient" className="text-start text-1xl">Select a client</label>
              <select name="selectClient" className="select select-bordered w-full max-w-xs">
              <option disabled selected>Pick one client</option>

                {subscribers.map((client) => {
                  return (
                    <option key={client._id} value={client._id}>
                      {client.username}
                    </option>
                  );
                })}
              </select>
              <label htmlFor="description" className="text-start text-1xl">Description</label>
              <textarea className="textarea textarea-bordered" placeholder="description"></textarea>
            </div>
            <div className="card-actions justify-between items-center pt-4">
              <div className="badge badge-secondary" id="bodyPart">
                {bodyPart}
              </div>
              <button className="btn btn-primary">Create new exercise</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewExercisePage;
