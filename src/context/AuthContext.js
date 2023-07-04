import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  let [loading, setLoading] = useState(true);
  let [errors, setErrors] = useState(null);
  let [profileData, setProfileData] = useState(null);

  const navigate = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    console.log(data);
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/");
    } else {
      alert("Something went wrong!");
    }
  };

  let registerUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        password2: e.target.password2.value,
      }),
    });
    let data = await response.json();
    console.log(data);
    if (response.status === 200) {
      // setErrors(data.error);
      alert("User Created Successfully");
      navigate("/login");
      // setAuthTokens(data);
      // setUser(jwt_decode(data.access));
      // localStorage.setItem("authTokens", JSON.stringify(data));
      // navigate("/login");
    } else {
      // <Alert severity="error">{errors}</Alert>;
      alert("Something went wrong!");
    }
  };

  let New_job = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/jobs/addNewjob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        id: e.target.id.value,
        title: e.target.title.value,
        Description: e.target.description.value,
        Experiance: e.target.experience.value,
        Jop_Type: e.target.Jop_Type.value,
        place: e.target.city.value,
        Salary: e.target.salary.value,
      }),
    });
    // let data = await response.json();
    // console.log(data);
    if (response.status === 201) {
      // setErrors(data.error);
      alert("job Added Successfully");
      // navigate("/jobs");
      // setAuthTokens(data);
      // setUser(jwt_decode(data.access));
      // localStorage.setItem("authTokens", JSON.stringify(data));
      // navigate("/login");
    } else {
      // <Alert severity="error">{errors}</Alert>;
      alert("Something went wrong!");
    }
  };

  let logOut = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    setProfileData(null);
    navigate("/login");
  };

  let updateToken = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });

    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logOut();
    }

    if (loading) {
      setLoading(false);
    }
  };

  let contextData = {
    user: user,
    errors: errors,
    authTokens: authTokens,
    loginUser: loginUser,
    logOut: logOut,
    New_job: New_job,
    registerUser: registerUser,
    // Profile: Profile,
    profileData: profileData,
  };

  useEffect(() => {
    if (loading) {
      // updateToken();
    }

    let fourMinutes = 1000 * 60 * 4;
    console.log("Token updated");
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
