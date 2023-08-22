import Logo from "../logo.svg";

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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
