import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";

const ProfilePage = () => {
  const [theme, setTheme] = useState("cmyk");
  const storedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (storedUser && storedUser.userType === "coach") {
      setTheme("night");
    } else {
      setTheme("cmyk");
    }
  }, [storedUser]);

  return (
    <div data-theme={theme} className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow">
        {/* Checks if there's a stored user */}
        {storedUser ? (
          <div className="w-full">
            <h1 className="text-3xl">Profile page</h1>
            <h4 className="text-2xl">Email</h4>
            <h4>{storedUser.email}</h4>
            <h4 className="text-2xl">Username</h4>
            <h4>{storedUser.username}</h4>
            <h4 className="text-2xl">User type</h4>
            <h4>{storedUser.userType}</h4>
          </div>
        ) : (
          <p>No user profile data available.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
