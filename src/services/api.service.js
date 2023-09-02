import axios from "axios";

const apiExternal = axios.create({
  baseURL: process.env.REACT_APP_EXERCISES_API_URI,
});

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5005" 
});

const specifiedOptions = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RapidAPI_Key,
    "X-RapidAPI-Host": process.env.REACT_APP_RapidAPI_Host,
  },
};

const fetchExercises = async (options) => {
  try {
    const response = await apiExternal.get("/exercises", options);
    const returnedData = response.data;
    // console.log(typeof returnedData);
    // console.log(returnedData);
    console.log(Array.isArray(returnedData));
    console.log(typeof returnedData);
    console.log(returnedData);
    return returnedData;
  } catch (error) {
    console.error(error);
  }
};

const getAllExercisesForClient = async (clientId) => {
  try {
    const response = await api.get(`/exercises/client/${clientId}`);
    if (response) {
      const newData = response.data;
      return newData;
    }
  } catch (err) {
    console.error(err);
  }
};

const getAllExercisesForCoach = async (coachId) => {
  try {
    const response = await api.get(`/exercises/coach/${coachId}`);
    if (response) {
      const newData = response.data;
      console.log(newData)
      return newData;
    }
  } catch (err) {
    console.error(err);
  }
};

const createNewExercise = async ({
  clientId,
  coachId,
  bodyPart,
  image,
  description,
  name,
}) => {
  try {
    const response = await api.post("/exercise/new", {
      clientId,
      coachId,
      bodyPart,
      image,
      description,
      name,
    });

    if (response) {
      const newExercise = response.data;
      return newExercise;
    }
  } catch (error) {
    console.error(error);
  }
};

const apiMethods = {
  specifiedOptions,
  fetchExercises,
  createNewExercise,
  getAllExercisesForCoach,
  getAllExercisesForClient,
};

export default apiMethods;
