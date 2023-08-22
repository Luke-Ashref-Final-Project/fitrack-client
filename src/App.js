import "./App.css";
import { Routes, Route } from "react-router-dom";
import CoachLoginPage from "./pages/CoachLoginPage";
import ClientLoginPage from "./pages/ClientLoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/coach-login" element={<CoachLoginPage />} />
        <Route path="/client-login" element={<ClientLoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
