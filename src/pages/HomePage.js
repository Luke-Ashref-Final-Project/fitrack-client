import Logo from "../logo.svg";

const HomePage = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">FiTrack</h1>
          <p className="py-6">The best way to track your fitness progress! For the coach and for clients!</p>
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
