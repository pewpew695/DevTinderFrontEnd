import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [emailId, setEmailID] = useState("Hello12@gmail.com");
  const [password, setPassword] = useState("Hello12@gmail.com");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          emailId,
          password,
        },
        { withCredentials: true },
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm ">
        <div className="card-body">
          <h2 className="card-title">Login: {emailId}</h2>
          <div className="">
            <div>
              <fieldset className="fieldset flex">
                <label className="label w-1/5" htmlFor="email">
                  Email Id
                </label>
                <input
                  type="text"
                  id="email"
                  className="input"
                  placeholder="Email"
                  value={emailId}
                  onChange={(e) => setEmailID(e.target.value)}
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset flex">
                <label className="label w-1/5" htmlFor="password">
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  className="input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
