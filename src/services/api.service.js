import axios from "axios";

const api = axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com/",
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
