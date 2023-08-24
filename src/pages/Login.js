import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authMethods from "../services/auth.service";
import Logo from '../logo.svg';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext)

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUserType = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = {
      email: email,
      password: password,
      userType: userType,
    };


    authMethods.logIn(user)
    .then((tokenObject) =>{
      // console.log(tokenObject)
        // store the token in localStorage
        storeToken(tokenObject.authToken)
        authenticateUser()
        navigate("/")
    } )
    .catch(err => console.error(err))
  };

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
        <h1 className="text-3xl">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              value={email}
              onChange={handleEmail}
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
              value={password}
              onChange={handlePassword}
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
                  checked
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
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;
