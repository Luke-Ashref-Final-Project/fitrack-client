import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer.js";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import ExercisesPage from "./pages/ExercisesPage";
import OverviewPage from "./pages/OverviewPage";
import SubscribersPage from "./pages/SubscribersPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/subscribers" element={<SubscribersPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
