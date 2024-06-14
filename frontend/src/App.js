import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Workout } from "./pages/workout";
import { AllRoutes } from "./pages/AllRoutes";
import { Community } from "./pages/Community";
import { Shop } from "./pages/Shop";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Benefits } from "./pages/Benefits";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/AllRoutes" element={<AllRoutes/>} />
        <Route path="/Community" element={<Community/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Benefits" element={<Benefits/>} />
      </Routes>
    </Router>
  );
}

export default App;
