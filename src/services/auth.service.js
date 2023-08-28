import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5005",
});

const signupCoach = async ({ email, username, password }) => {
  try {
    const response = await api.post("/signup/coach", {
      email,
      username,
      password,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const signupClient = async ({ email, username, password }) => {
  try {
    const response = await api.post("/signup/client", {
      email,
      username,
      password,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const logIn = async ({ email, password, userType }) => {
  try {
    const response = await api.post("/login", { email, password, userType });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const verifyToken = async (storedToken) => {
  try {
    const response = await api.get("/verify", {
      headers: { Authorization: `Bearer ${storedToken}` },
    });
    
    // console.log(response.data);

    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const uploadPhoto = async (uploadData) => {
  try {
    const response = await api.post("/api/upload", uploadData);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const getCurrentUser = async () => {
  const storedToken = localStorage.getItem("authToken");
  try {
    const response = await api.get("/profile", {
      headers: { Authorization: `Bearer ${storedToken}` },
    });
    console.log("Login Response:", response);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const getCoaches = async () => {
  try {
    const response = await api.get("/getcoach");
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const passwordUpdate = async ({ currentPassword, newPassword }) => {
  try {
    const token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await api.put(
      "/profile/password",
      { currentPassword, newPassword },
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAllSubscribers = async () => {
  try {
    const storedToken = localStorage.getItem("authToken");
    const response = await api.get("/profile/getallsubscribers",{
      headers: { Authorization: `Bearer ${storedToken}` },
    });
    return response.data
  } catch (err) {
    throw err;
  }
};

const authMethods = {
  signupCoach,
  signupClient,
  logIn,
  verifyToken,
  uploadPhoto,
  getCurrentUser,
  getCoaches,
  passwordUpdate,
  getAllSubscribers,
};

export default authMethods;
