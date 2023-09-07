// import { useEffect, useState } from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import apiMethods from "../services/api.service";
import Nav from "../components/Nav";

const ExerciseDetailPage = () => {
  const [theme, setTheme] = useState("cmyk");
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [description, setDescription] = useState("");
  const id = useParams();
  const [exerciseSets, setExerciseSets] = useState([{ reps: 0, weight: 0 }]);
  //this is the way to capture whole sets
  //when create a new set, we push a new object into the set array.

  const addExerciseSet = () => {
    setExerciseSets([...exerciseSets, { reps: 0, weight: 0 }]);
  };

  const handleDeletion = (e, index) => {
    e.preventDefault();
    const newSets = [...exerciseSets];
    newSets.splice(index, 1);
    setExerciseSets(newSets);
  };

  const handleReps = (value, index, type) => {
    //identify if the input is for weight or reps and update the object according to the index.
    const newCopy = [...exerciseSets];
    const updateSet = { ...exerciseSets[index] };
    if (type === "reps") {
      updateSet.reps = Number(value);
    } else {
      updateSet.weight = Number(value);
    }
    newCopy[index] = updateSet;
    setExerciseSets(newCopy);
    console.log(exerciseSets);
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
      <div className="card bg-base-100 shadow-xl card-bordered mt-8 px-6 w-full">
        <figure>
          <img src={image} alt="exercise" id="gifImage" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-3xl" id="exerciseName">
            {name}
          </h1>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-secondary" id="bodyPart">
              {bodyPart}
            </div>
          </div>
          <div>
            <h1 className="text w-full text-2xl text-left mb-4">Description</h1>
            <input
              className="textarea textarea-bordered w-full"
              type="text"
              value={description}
            />
          </div>

          <div id="setRep" className="card">
            <div className="">
              {exerciseSets.map((eachSet, index) => {
                return (
                  <form
                    key={index}
                    className="flex flex-col mt-6 mb-6 bg-slate-800 px-4 py-4 rounded-xl"
                  >
                    <div className="flex flex-row justify-between items-center">
                      <h1 className="text-2xl">Set {index + 1}</h1>
                      <button
                        className="btn btn-circle btn-warning btn-outline btn-sm"
                        onClick={(e) => handleDeletion(e, { index })}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-col text-left">
                        <h3 className="label">Reps</h3>
                        <input
                          id="reps"
                          type="number"
                          className="input input-bordered w-full"
                          value={eachSet.reps}
                          onChange={(e) =>
                            handleReps(e.target.value, index, "reps")
                          }
                        />
                      </div>
                      <div className="flex flex-col text-left">
                        <h3 className="label">Weight</h3>
                        <input
                          id="weight"
                          type="number"
                          className="input input-bordered w-full"
                          value={eachSet.weight}
                          onChange={(e) =>
                            handleReps(e.target.value, index, "weight")
                          }
                        />
                      </div>
                    </div>
                  </form>
                );
              })}
            </div>

            <div className="card-actions flex-col w-full mt-1 space-y-4">
              <button
                className="btn btn-primary btn-outline w-full"
                onClick={addExerciseSet}
              >
                Add new set
              </button>
              <div className="divider"></div>
              <button className="btn btn-primary w-full">Save</button>
              <button className="btn btn-error w-full">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetailPage;
