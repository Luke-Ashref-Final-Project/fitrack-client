import axios from "axios";
import React, { useState, useEffect } from "react";
const API_URL = "http://localhost:5005";
const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("");

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateUser = async () => {
    const storedToken = localStorage.setItem("authToken");
    if (storedToken) {
      try {
        const response = await axios.get("/auth/verify");
        const userData = response.data;
        setIsLoading(false);
        setIsLoggedIn(true);
        setUser(userData);

        //setting the theme globally for the
        if (userData.type === "coach") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      } catch (err) {
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);
      }
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  function removeToken() {
    // Upon logout, remove the token from the localStorage
    localStorage.removeItem("authToken");
  }

  function logOutUser() {
    removeToken();
    authenticateUser();
  }

  useEffect(() => {
    // Run the function after the initial render,
    // after the components in the App render for the first time.
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        theme,
        logOutUser,
        authenticateUser,
        storeToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
