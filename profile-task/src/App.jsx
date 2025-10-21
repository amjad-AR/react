import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Rajester from "./pages/Rajester";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userData");
    }
  }, [userData]);

  return (
    <>
      <Navbar userData={userData} setUserData={setUserData} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Rajester"
          element={<Rajester setUserData={setUserData} />}
        />
        <Route path="/Profile" element={<Profile userData={userData} />} />
      </Routes>
    </>
  );
}

export default App;
