import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";

import Nav from "../components/Nav";
import authMethods from "../services/auth.service";

const ProfilePage = () => {
  const [theme, setTheme] = useState("cmyk");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const { user, isLoggedIn, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const response = await authMethods.passwordUpdate({ currentPassword, newPassword });
      console.log(response); 
      setCurrentPassword("");
      setNewPassword("");
      window.my_modal_1.close();
    } catch (error) {
      setError("Failed to change password."); 
    }
  };

  if (!isLoggedIn) {
    navigate("/")
  }

  useEffect(() => {
    if (user && user.userType === "coach") {
      setTheme("night");
    } else {
      setTheme("cmyk");
    }
  }, [user]);

  return (
    isLoggedIn && (
      <div data-theme={theme} >
        <Nav />
        <div className="flex-grow p-6 flex flex-col items-center justify-center">
          <div className={`w-full max-w-md p-6 ${user?.userType === 'client' ? 'bg-white' : 'bg-slate-900'} rounded-lg shadow-lg`}>
            <Link to={"/"}>
              <button className="btn btn-wide btn-outline mb-4">Home Page</button>
            </Link>

            <h1 className="text-3xl mb-2">Profile page</h1>
            <div className="mb-4">
              {user?.image ? (
                <img src={user.image} alt="Profile" width="200"  className="mx-auto block rounded-full"/>
              ) : (
                <p>No image available</p>
              )}
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-lg">Username:</h4>
              <p>{user?.username}</p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-lg">You are a:</h4>
              <p>{user?.userType}</p>
            </div>

            <button className="btn mb-4" onClick={() => window.my_modal_1.showModal()}>
              Change Password
            </button>
            <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Change Password</h3>
              <div className="py-4">
                <label htmlFor="currentPassword" className="block font-medium">
                  Current Password:
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  className="input input-bordered w-full"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="py-2">
                <label htmlFor="newPassword" className="block font-medium">
                  New Password:
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="input input-bordered w-full"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="modal-action">
                <button className="btn" onClick={handleChangePassword}>
                  Change Password
                </button>
                <button className="btn" onClick={() => window.my_modal_1.close()}>
                  Close
                </button>
              </div>
            </form>
            </dialog>

            <button
              onClick={() => {
                logOutUser();
                navigate("/");
              }}
              className="btn btn-wide btn-error mb-4"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfilePage;
