import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import authMethods from "../services/auth.service";
import { AuthContext } from "../context/auth.context";
import Logo from '../logo.svg';

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const { isLoggedIn } = useContext(AuthContext);
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleUserType = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userType === "client") {
        await authMethods.signupClient(user);
        navigate("/login");
      } else {
        await authMethods.signupCoach(user);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };


if (!isLoggedIn) {
  return (
    <div data-theme="cmyk" className="hero min-h-screen">
      <div className="card w-full max-w-sm">
        {/* Up for a change */}
          <Link to="/">
            <div className="flex flex-row justify-center gap-x-4 items-center mb-10">
                <img src={Logo} alt="" className="h-max" />
                <h1 className="text-6xl font-bold">FiTrack</h1>
            </div>
          </Link>
        <div className="card-body">
          <h1 className="text-3xl">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="user name"
                className="input input-bordered"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  className="radio"
                  name="userType"
                  value="client"
                  onChange={handleUserType}
                />
                <span className="label-text">Client</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="userType"
                  className="radio"
                  value="coach"
                  onChange={handleUserType}
                />
                <span className="label-text">Coach</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

return (
  navigate("/")
);
}
export default SignUp;
