import axios from "axios";

const apiExternal = axios.create({
  baseURL: process.env.REACT_APP_EXERCISES_API_URI,
});

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5005", 
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
    return returnedData;
  } catch (error) {
    console.error(error);
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
};

export default apiMethods;
