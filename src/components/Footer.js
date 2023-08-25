import logo from "../logo.svg";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-primary-content border-t-2">
      <div>
        <img src={logo} alt="" />
        <p className="font-bold">
          FiTrack. <br />
          Made by Luke and Ashref
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
