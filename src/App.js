import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage.js";
import Header from "./components/Header";
import Profile from "./Pages/Profile";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./Pages/SignUp";
import EditProfile from "./Pages/EditProfile/EditProfile";
import ProfilePage from "./Pages/ProfilePage";
import { Jobs } from "./Pages/Jobs/Jobs";
import JobDetails from "./Pages/Jobs/Job_details";
import Call from "./Pages/EditProfile/call";
import AddJob from "./Pages/Jobs/Add_Jop";
import DashBoard from "./Pages/AdminPanel/DashBoard";
import MangaPosts from "./Pages/AdminPanel/MangaPosts";
import UpdateJob from "./Pages/Jobs/UpdateJob";
// import PrivateRoute from "./utils/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/dashboard/manageposts" element={<MangaPosts />} />
            <Route
              path="/dashboard/manageposts/update/:jobid"
              element={<UpdateJob />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/Jobs/addjob" element={<AddJob />} />
            <Route path="/Jobs/:id" element={<JobDetails />} />
            <Route path="/NewProfile" element={<ProfilePage />} />
            <Route path="/profile/edit" element={<EditProfile />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
