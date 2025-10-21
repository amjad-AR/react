import React from "react";

const Profile = ({ userData }) => {
  if (!userData) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-700">No data found</h1>
      </div>
    );
  }

  return (
    <div className="h-screen  flex justify-center items-center bg-[url('/path/to/your/background.jpg')] bg-cover">
      <div className="h-[70%] w-[40%] bg-black/30 backdrop-blur-md border border-white rounded-xl shadow-xl p-8 flex flex-col items-center gap-4 text-2xl">
        <img
          src={userData.profileImage || "/default-avatar.png"}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-2 border-white/50 shadow-md"
        />

        <h2 className="text-4xl font-bold text-gray-800">
          {userData.firstName} {userData.lastName}
        </h2>

        <div className="flex flex-col gap-2 w-full">
          <p className="text-gray-200">
            <span className="font-semibold">Email:</span> {userData.email}
          </p>
          <p className="text-gray-200">
            <span className="font-semibold">Phone:</span> {userData.number}
          </p>
          <p className="text-gray-200">
            <span className="font-semibold">Gender:</span> {userData.gender}
          </p>
          <p className="text-gray-200">
            <span className="font-semibold">Degree:</span> {userData.degree}
          </p>
        </div>

        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md"
          // onClick={() => alert("Edit functionality coming soon!")}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
