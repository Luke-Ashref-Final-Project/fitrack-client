// import { useEffect, useState } from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import apiMethods from "../services/api.service";
import Nav from "../components/Nav";

const ExerciseDetailPage = () => {
  const [theme, setTheme] = useState("cmyk");
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [bodyPart, setBodyPart] = useState();
  const [description, setDescription] = useState();
  const id = useParams();
  const [set, setSet] = useState([]); // this is the way to capture whole sets
  //when create a new set, we push a new object into the set array.
  const [rep, setRep] = useState([]);
  const [weight, setWeight] = useState([]);

  const addtoRep = () => {
    setSet(...set,createNewSet());
  };

  const createNewSet = () => {
    return;
    <></>;
  };

  useEffect(() => {
    const getdata = async () => {
      try {
        const oneExercise = await apiMethods.getOneExercise(id.exerciseId);
        if (oneExercise) {
          setImage(oneExercise.image);
          setName(oneExercise.name);
          setBodyPart(oneExercise.bodypart);
          setDescription(oneExercise.description);
        }
      } catch (err) {
        console(err);
      }
    };
    getdata();
  }, [id]);

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
      <div className="card bg-base-100 shadow-xl card-bordered mt-8 px-6">
        <figure>
          <img src={image} alt="exercise" id="gifImage" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-1xl" id="exerciseName">
            {name}
          </h1>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-secondary" id="bodyPart">
              {bodyPart}
            </div>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div id="setRep" className="flex flex-col">
            <div>
              <h3>Set</h3>
              <button>Delete set</button>
              <form>
                <h5>Reps</h5>
                <input type="number" />
                <button>-</button>
                <button>+</button>
                <h5>Weight</h5>
                <input type="number" />
              </form>
            </div>
            <button className="btn btn-secondary btn-outline" >
              Add new set
            </button>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetailPage;
