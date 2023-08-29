import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
// import exercise from "../data/exercise.json";
// import bodyPart from "../data/bodyPart.json";
// import target from "../data/target.json";
// import authMethods from "../services/auth.service";
import Nav from "../components/Nav";
import apiMethods from "../services/api.service";
import { Link } from "react-router-dom";

const ExercisesPage = () => {
  //theme changing
  const [theme, setTheme] = useState("cmyk");
  const { user, isLoggedIn, isLoading } = useContext(AuthContext);
  const [resultsLoading, setResultsLoading] = useState(false);

  const { fetchExercises, specifiedOptions } = apiMethods;
  const [searchTerm, setSearchTerm] = useState("");
  const [exercises, setExercises] = useState([]);

  const handleSearch = async () => {
    if (searchTerm) {
      setResultsLoading(true);
      const exercises = await fetchExercises(specifiedOptions);
      const searchedResults = exercises.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchTerm) ||
          exercise.bodyPart.toLowerCase().includes(searchTerm) ||
          exercise.target.toLowerCase().includes(searchTerm)
      );
      const results = searchedResults.slice(0, 30);
      setSearchTerm("");
      setResultsLoading(false);
      console.log(searchedResults);
      setExercises(results);
    }
  };

  const goToCreateNewExercise = (props) => {};

  useEffect(() => {
    if (user && user.userType === "coach") {
      setTheme("night");
    } else {
      setTheme("cmyk");
    }
  }, [user]);

  // idk why it's not showing
  if (isLoading) {
    <span className="loading loading-spinner text-error">Spinner....</span>;
  }

  return (
    isLoggedIn && (
      <div data-theme={theme} className="min-h-screen">
        <Nav />
        <h1 className="text-3xl mb-2 mt-4">Exercises</h1>
        <div className="flex flex-col align-items-stretch py-4 px-6 space-y-4">
          <input
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            value={searchTerm}
            type="text"
            className="input input-bordered w-full"
            placeholder="Type to search"
          />
          {searchTerm ? (
            <button className="btn btn-primary w-full" onClick={handleSearch}>
              Search exercises
            </button>
          ) : (
            <button
              disabled
              className="btn btn-primary w-full"
              onClick={handleSearch}
            >
              Search exercises
            </button>
          )}
        </div>
        <div className="pt-2 pb-4">
        {resultsLoading && <p>Loading...</p>}
          {exercises && exercises.length !== 0 ? (
            exercises.map((eachExercise) => {
              return (
                <div
                  key={eachExercise.id}
                  className="card bg-base-100 shadow-xl card-bordered mx-6 mb-8"
                >
                  <figure>
                    <img src={eachExercise.gifUrl} alt="exercise" />
                  </figure>
                  <div className="card-body">
                    <h1 className="card-title text-1xl">{eachExercise.name}</h1>
                    <div className="card-actions justify-between items-center">
                      <div className="badge badge-secondary">
                        {eachExercise.bodyPart}
                      </div>
                      <Link to="/new-exercise">
                        <button
                          // onClick={}
                          //directly create new exercise here?
                          className="btn btn-primary btn-md"
                        >
                          Add to program
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No exercise found</p>
          )}
        </div>
      </div>
    )
  );
};

export default ExercisesPage;
