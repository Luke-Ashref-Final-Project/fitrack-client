import exercise from "../data/exercise.json";
import bodyPart from "../data/bodyPart.json";
import target from "../data/target.json";
import { useState, useEffect } from "react";
import authMethods from "../services/auth.service";
import Nav from "../components/Nav";

const ExercisesPage = () => {
  //theme changing
  const [theme, setTheme] = useState("cmyk");
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const createNewExercise = () => {

  };

  //filtering using UI

  useEffect(() => {
    if (storedUser.userType === "coach") {
      setTheme("night");
    } else {
      setTheme("cmyk");
    }
  }, []);

  return (
    <div data-theme={theme} className="">
      <Nav />
      <h1 className="text-3xl mb-8">Exercises</h1>
      {exercise.map((eachExercise) => {
        return (
          <div className="card bg-base-100 shadow-xl card-bordered mx-6 mb-8">
            <figure>
              <img src={eachExercise.gifUrl} alt="exercise" />
            </figure>
            <div className="card-body">
              <h1 className="card-title text-1xl">{eachExercise.name}</h1>
              <div className="card-actions justify-between items-center">
                <div className="badge badge-secondary">
                  {eachExercise.bodyPart}
                </div>
                <button
                  onSubmit={createNewExercise}
                  //directly create new exercise here?
                  className="btn btn-primary btn-md"
                >
                  Add to program
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExercisesPage;

<div className="card w-96 bg-base-100 shadow-xl">
  <figure>
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>;
