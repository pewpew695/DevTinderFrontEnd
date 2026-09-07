import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../Utils/Constants";

const Login = () => {
  const [emailId, setEmailID] = useState("Hello12@gmail.com");
  const [password, setPassword] = useState("Hello12@gmail.com");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true },
      );
      console.log("error:" + res);
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.statusText || "Something went wrong!");
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
          <p className="text-red-300">{error}</p>
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
