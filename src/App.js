import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer.js";
import SignUpPage from "./pages/SignUpPage";

import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
