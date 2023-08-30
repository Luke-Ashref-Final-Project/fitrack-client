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

const uploadPhoto = async (file) => {
  try {
    const token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.put("/profile/upload", file, config);
    return response.data;
    
  } catch (err) {
    console.error(err);
  }
};

const getCurrentUser = async () => {
  const storedToken = localStorage.getItem("authToken");
  try {
    const response = await api.get("/user", {
      headers: { Authorization: `Bearer ${storedToken}` },
    });
    console.log("current user:", response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};


const getCoaches = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.get("/getcoach", config);
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

// Work in progress
const subscribe = async (coachId) => {
  try {
    const token = localStorage.getItem("authToken");
    console.log("Token:", token);
    console.log("Coach ID:", coachId); 
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.post(`/subscribe/${coachId}`, {}, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const coachOverview = async (coachId) => {
  try {
    const token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.get(`/coaches/${coachId}`, config)
    return response.data
  } catch (error) {
    throw error
  }
}

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
  subscribe,
  coachOverview,
};

export default authMethods;
