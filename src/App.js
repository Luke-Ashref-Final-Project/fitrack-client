import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer.js";
import SignUp from "./pages/SignUp";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
