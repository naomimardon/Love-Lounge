import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";
import Contributors from "./pages/contributors";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import LoginTwo from "./pages/LoginTwo";
import LoveQuiz from "./pages/LoveQuiz";
import Results from "./pages/Results";
import GoogleLogin from "./pages/GoogleLogin";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginTwo" element={<LoginTwo />} />
        <Route path="/LoveQuiz" element={<LoveQuiz />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/GoogleLogin" element={<GoogleLogin />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
