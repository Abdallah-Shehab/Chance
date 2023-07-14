import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage.js";
import Header from "./components/Header";
import Profile from "./Pages/Profile";
import { AuthProvider } from "./context/AuthContext";
import AuthContext from "./context/AuthContext";
import SignUp from "./Pages/SignUp";

// import ProfilePage from "./Pages/ProfilePage";
import { Jobs } from "./Pages/Jobs/Jobs";
import JobDetails from "./Pages/Jobs/Job_details";

import AddJob from "./Pages/Jobs/Add_Jop";
import DashBoard from "./Pages/AdminPanel/DashBoard";
import MangaPosts from "./Pages/AdminPanel/MangaPosts";
import UpdateJob from "./Pages/Jobs/UpdateJob";
import UserApplications from "./Pages/UserApplications";
import NewEditForm from "./Pages/EditProfile/NewEditForm";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import RoadMap from "./Pages/RoadMap";
import AllUsers from "./Pages/AllUsers";
import Dash from "./Pages/AdminPanel/DashBoard";
import { useContext } from "react";
import NewPic from "./Pages/EditProfile/NewPic";
import NewCv from "./Pages/EditProfile/NewCv";
// import PrivateRoute from "./utils/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dash />} />
            <Route path="/myApplications" element={<UserApplications />} />
            <Route path="/dashboard/manageposts" element={<MangaPosts />} />
            <Route
              path="/dashboard/manageposts/update/:jobid"
              element={<UpdateJob />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile/:pk" element={<Profile />} />
            <Route path="/profile/newpic/:pk" element={<NewPic />} />
            <Route path="/profile/newcv/:pk" element={<NewCv />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/About" element={<About />} />
            <Route path="/users" element={<AllUsers />} />
            <Route path="/roadmap" element={<RoadMap />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/Jobs/addjob" element={<AddJob />} />
            <Route path="/Jobs/:id" element={<JobDetails />} />
            {/* <Route path="/NewProfile" element={<ProfilePage />} /> */}
            {/* <Route path="/profile/edit" element={<EditProfile />} /> */}
            <Route path="/profile/edit/:pk" element={<NewEditForm />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
