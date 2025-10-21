import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Rajester = ({ setUserData }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    password: "",
    gender: "",
    degree: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "firstName" || name === "lastName") {
      if (/^[A-Za-z\s]*$/.test(value))
        setForm((prev) => ({ ...prev, [name]: value }));
    } else if (name === "number") {
      if (/^[0-9]*$/.test(value))
        setForm((prev) => ({ ...prev, [name]: value }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(form);
    localStorage.setItem("userData", JSON.stringify(form));
    navigate("/Profile");
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center gap-4 pt-[100px] sm:pt-[230px]">
      <h1 className="text-3xl font-bold text-purple-950">Register</h1>
      <form
        className=" w-[30%] flex flex-col justify-center items-center h-auto gap-10 bg-white/30 backdrop-blur-md border border-white/30 rounded-lg p-6 shadow-lg text-black"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleInput}
          className="border border-gray-400 rounded p-2 w-[90%]"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleInput}
          className="border border-gray-400 rounded p-2 w-[90%]"
        />
        <input
          type="number"
          name="number"
          placeholder="Your number"
          value={form.number}
          onChange={handleInput}
          className="border border-gray-400 rounded p-2 w-[90%]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleInput}
          className="border border-gray-400 rounded p-2 w-[90%]"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleInput}
          className="border border-gray-400 rounded p-2 w-[90%]"
          required
        />
        <select
          name="gender"
          value={form.gender}
          onChange={handleInput}
          className="border p-2 rounded text-purple-950 cursor-pointer w-[90%]"
          aria-label="Gender"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          name="degree"
          value={form.degree}
          onChange={handleInput}
          className="border p-2 rounded text-purple-950 cursor-pointer w-[90%]"
          aria-label="Degree"
        >
          <option value="">Select Degree</option>
          <option value="High School">High School</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="PhD">PhD</option>
        </select>

        <input
          type="file"
          name="profileImage"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = () => {
                setForm((prev) => ({ ...prev, profileImage: reader.result }));
              };
              reader.readAsDataURL(file);
            }
          }}
          className="flex flex-col flex-wrap justify-center text-center items-center p-2 border border-gray-400 rounded-md cursor-pointer bg-[#6B21A8] hover:bg-[#9333EA] hover:-translate-y-1 text-amber-50 text-md w-auto h-auto duration-200 ease-linear"
        />

        <button
          type="submit"
          className="w-[20%] justify-self-center bg-[#6B21A8] text-white p-2 rounded mt-2 hover:bg-[#9333EA] hover:-translate-y-1 cursor-pointer duration-200 ease-linear"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Rajester;
