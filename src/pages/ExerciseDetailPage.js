// import { useEffect, useState } from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import apiMethods from "../services/api.service";
import Nav from "../components/Nav";
import { FiX, FiPlus } from "react-icons/fi";

const ExerciseDetailPage = () => {
  const [theme, setTheme] = useState("cmyk");
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [description, setDescription] = useState("");
  const id = useParams(); //.exerciseId to extra the exerciseId
  const handleDescription = (value) => {
    setDescription(value);
  };

  const [exerciseSets, setExerciseSets] = useState([]);
  // console.log(exerciseSets);

  //handle delete variation
  const handleVariationDeletion = (e, index, _id) => {
    //front-end logic
    e.preventDefault();
    const newSets = [...exerciseSets];
    newSets.splice(index, 1);
    setExerciseSets(newSets);

    //back-end
    apiMethods.deleteVariation({_id});
  };

  //handle exercise deletion
  const handleExerciseDeletion = (e) => {
    e.preventDefault();
    apiMethods.deleteExercise(id.exerciseId);
  };

  //handle front-end interaction of reps and weight
  const handleRepsAndWeight = (value, index, type) => {
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

  const createVariation = async () => {
    try {
      const createdVariation = await apiMethods.createVariation({
        weight: 0,
        reps: 0,
      });

      if (!createdVariation) {
        console.log("cannot created a new exercise");
      }

      await setExerciseSets([
        ...exerciseSets,
        {
          weight: createdVariation.createdVariation.weight,
          reps: createdVariation.createdVariation.reps,
          _id: createdVariation.createdVariation._id,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(exerciseSets);
  });

  const saveAll = (e) => {
    e.preventDefault();
    //update all variations
    for (let i = 0; i < exerciseSets.length; i++) {
      updateVariation({
        weight: exerciseSets[i].weight,
        reps: exerciseSets[i].reps,
        variationId: exerciseSets[i]._id,
      });
      console.log(exerciseSets[i]);
    }
    // updateVariation({
    //   weight: exerciseSets[0].weight,
    //   reps: exerciseSets[0].reps,
    //   variationId: exerciseSets[0]._id,
    // });

    //update the exercises
    const variationId = exerciseSets.map((exercise) => exercise._id);
    apiMethods.updateExercise(id.exerciseId, description, variationId);
    // window.location.reload();
  };

  const updateVariation = async ({ weight, reps, variationId }) => {
    try {
      const updatedVariation = await apiMethods.updateVariation({
        variationId: variationId,
        weight: weight,
        reps: reps,
      });

      if (updatedVariation) {
        console.log(updatedVariation);
        const foundIndex = exerciseSets.findIndex(
          (set) => set.variationId === updatedVariation.variationId
        );
        const newCopy = [...exerciseSets];
        const updateSet = { ...exerciseSets[foundIndex] };
        updateSet.reps = updatedVariation.reps;
        updateSet.weight = updatedVariation.weight;
        newCopy[foundIndex] = updateSet;
        setExerciseSets(newCopy);
      } else {
        console.log("not created");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getdata = async () => {
      try {
        const oneExercise = await apiMethods.getOneExercise(id.exerciseId);
        if (oneExercise) {
          setImage(oneExercise.image || "");
          setName(oneExercise.name || "");
          setBodyPart(oneExercise.bodypart || "");
          setDescription(oneExercise.description || "");
          //this should be modified based on the back-end route
          if (oneExercise.variation.length !== 0) {
            setExerciseSets(oneExercise.variation);
          }
        }
      } catch (err) {
        console.log(err);
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
              onChange={(e) => {
                handleDescription(e.target.value);
              }}
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
                        onClick={(e) =>
                          handleVariationDeletion(e, index, eachSet._id)
                        }
                      >
                        <FiX />
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
                            handleRepsAndWeight(e.target.value, index, "reps")
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
                            handleRepsAndWeight(e.target.value, index, "weight")
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
                onClick={() => createVariation()}
              >
                <FiPlus />
                Add new set
              </button>
              <div className="divider"></div>
              <button
                className="btn btn-primary w-full"
                onClick={(e) => {
                  saveAll(e);
                }}
              >
                Save
              </button>
              <button className="btn btn-error w-full">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetailPage;
