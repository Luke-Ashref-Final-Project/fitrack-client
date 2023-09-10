import axios from "axios";

const apiExternal = axios.create({
  baseURL: process.env.REACT_APP_EXERCISES_API_URI,
});

const api = axios.create({
  baseURL: "http://localhost:5005" || process.env.REACT_APP_API_URL,
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
      return newData;
    }
  } catch (err) {
    console.error(err);
  }
};

const getOneExercise = async (exerciseId) => {
  try {
    const response = await api.get(`/exercise/${exerciseId}`);
    if (response) {
      const newData = response.data;
      console.log(newData);
      return newData;
    }
  } catch (err) {
    console.log(err);
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

const updateExercise = async (exerciseId, description, variationId) => {
  try {
    const response = await api.put(`/exercise/${exerciseId}`, {
      description,
      variationId,
    });
    const exercise = response.data;
    return exercise;
  } catch (error) {
    console.log(error);
  }
};

//createVariation
const createVariation = async ({weight, reps}) => { // should have that
  try {
    const response = await api.post("/variation/new", {
      weight, reps
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//updateVariation
const updateVariation = async ({ weight, reps, variationId }) => {
  try {
    const response = await api.put(`/variation/${variationId}/update`, {
      weight,
      reps,
    });
    
    return response.data
  } catch (error) {
    console.log(error);
  }
};

//delete exercise
const deleteExercise = async (exerciseId) => {
  try {
    const response = await api.delete(`/exercise/${exerciseId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//delete variation
const deleteVariation = async (variationId) => {
  try {
    const response = await api.delete(`/variation/${variationId}/delete`);
    
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const apiMethods = {
  specifiedOptions,
  fetchExercises,
  createNewExercise,
  getAllExercisesForCoach,
  getAllExercisesForClient,
  getOneExercise,
  updateExercise,
  // getVariation,
  createVariation,
  updateVariation,
  deleteExercise,
  deleteVariation,
};

export default apiMethods;
