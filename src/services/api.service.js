import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_EXERCISES_API_URI,
});

const specifiedOptions = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RapidAPI_Key,
    "X-RapidAPI-Host": process.env.REACT_APP_RapidAPI_Host,
  },
};

const fetchExercises = async (options) => {
  try {
    const response = await api.get("/exercises", options);
    const returnedData = response.data;
    return returnedData;
  } catch (error) {
    console.error(error);
  }
};

const apiMethods = {
  specifiedOptions,
  fetchExercises,
};

export default apiMethods;
