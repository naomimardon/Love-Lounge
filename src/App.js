
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "../pages/homepage";
import Contributors from "../pages/contributors";
import Login from "../pages/login";

const App = () => {
  const location = useLocation();



  return (

    <Router>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  );
};

export default App;
