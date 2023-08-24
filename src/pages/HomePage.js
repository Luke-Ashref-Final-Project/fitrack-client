import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import cta1 from "../images/cta-1.png";

const HomePage = () => {
  return (
<div className="hero min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <div className="flex flex-row justify-center gap-x-4 items-center">
        <img src={Logo} alt="" className="h-max" />
        <h1 className="text-6xl font-bold">FiTrack</h1>
      </div>

      <p className="py-6 text-lg">
        The best way to track your fitness progress! For the coach and for
        clients!
      </p>
      <img src={cta1} alt="" />


      <Link to="/signup">
        <button className="btn btn-wide btn-outline mt-4">Sign up</button>
      </Link>
      <div className="mt-2"></div> {/* Small space between buttons */}
      <Link to="/login">
        <button className="btn btn-wide btn-info">Login</button>
      </Link>
    </div>
  </div>
</div>

  );
};

export default HomePage;
