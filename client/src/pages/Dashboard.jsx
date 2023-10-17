import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Generate from "./generate/Generate";
import View from "../pages/View";
import General from "./profile/General";
import Security from "./profile/Security";
import About from "./profile/About";
import Profile from "./profile/Profile";

const Dashboard = () => {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/profile/general" index element={<General />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/generate" element={<Generate />} />
            <Route path="/view" element={<View />} />
            <Route path="/profile/security" element={<Security />} />
            <Route path="/profile/about" element={<About />} />
            <Route path="*" element={<h1>404!</h1>} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
};

export default Dashboard;
