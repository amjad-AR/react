import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Navbar = ({ userData, setUserData }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 z-10 w-full h-15 flex items-center justify-between text-2xl font-bold px-8 py-2.5 bg-[#3D348B] text-amber-50">
      <div className="flex items-center">
        <h2 className="text-3xl tracking-wide">Amjad</h2>
      </div>

      <div className="flex flex-row gap-7 items-center">
        <Link to="/">Home</Link>

        {!userData ? (
          <Link to="/Rajester">Rajester</Link>
        ) : (
          <>
            <Link to="/Profile">
              <div className="flex flex-row gap-2 items-center">
                <span>Profile</span>
                <img
                  src={userData.profileImage}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-white/50 object-cover"
                />
              </div>
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-600 px-3 py-1 rounded-lg hover:bg-red-700 duration-150"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
