import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function handleChange(e: any) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <React.Fragment>
      <div className="bg-gradient-to-r from-green-900 to-green-600 justify-center  h-screen flex mx-auto">
        <div className="my-auto">
          <h1 className="text-center text-4xl text-white font-semibold ">Register</h1>
          <form className="bg-white max-w-xl m-auto py-10 mt-5 px-12 border" onSubmit={(e) => handleSubmit(e)}>
            <label className="text-gray-600 font-medium">Username</label>
            <input
              value={formData.username}
              onChange={(e) => handleChange(e)}
              className="border-solid bg-blue-50 border-green-400 border py-2 px-4 w-full rounded text-gray-700"
              name="username"
              placeholder="username"
              type=""
              required
              minLength={5}
              //   ref={register({
              //     required: "Please enter a job title",
              //   })}
            />
            {/* {errors.title && (
          <div className="mb-3 text-normal text-red-500">
            {errors.title.message}
          </div>
        )} */}
            <label className="text-gray-600 font-medium block mt-4">Email</label>
            <input
              value={formData.email}
              onChange={(e) => handleChange(e)}
              className="border-solid bg-blue-50 border-green-400 border py-2 px-4 w-full rounded text-gray-700"
              name="email"
              type="email"
              placeholder="email"
              required
            />
            <label className="text-gray-600 font-medium block mt-4">Password</label>
            <input
              value={formData.password}
              onChange={(e) => handleChange(e)}
              className="border-solid bg-blue-50 border-green-400 border py-2 px-4 w-full rounded text-gray-700"
              name="password"
              type="password"
              placeholder="password"
              required
              minLength={8}
              //   ref={register({
              //     required: "Please enter a location",
              //   })}
            />
            {/* {errors.location && (
          <div className="mb-3 text-normal text-red-500 ">
            {errors.location.message}
          </div>
        )} */}

            <Link className="mt-9 mb-1 text-sm flex  justify-end" to="/">
              <text className="font-medium text-green-900 hover:text-indigo-500">Go Sign In</text>
            </Link>

            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white border py-3 px-6 font-semibold text-md rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterForm;
