// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { Navbar } from "./components/Navbar";
// import { Workout } from "./pages/workout";
// import { AllRoutes } from "./pages/AllRoutes";
// import { Community } from "./pages/Community";
// import { Shop } from "./pages/Shop";
// import { Login } from "./pages/Login";
// import { Signup } from "./pages/Signup";


import Track from "./pages/track.jsx";








// import BMICalculator from "./components/caloriescal.jsx";

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/workout" element={<Workout />} />
    //     <Route path="/AllRoutes" element={<AllRoutes/>} />
    //     <Route path="/Community" element={<Community/>} />
    //     <Route path="/Shop" element={<Shop/>} />
    //     <Route path="/Login" element={<Login/>} />
    //     <Route path="/Signup" element={<Signup/>} />
    //   </Routes>
    // </Router>
    <>
  <div style={{ backgroundImage: `url("https://picjj.com/images/2024/06/15/W7sYuH.png")`, backgroundSize: "cover", backgroundPosition:"center", height:"100vh", overflow:"hidden",backgroundAttachment:"fixed" ,
      }}>
  <Track />
  </div>
   
    
   
  
    </>
  );
}

export default App;
