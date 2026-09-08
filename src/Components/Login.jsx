import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../Utils/Constants";

const Login = () => {
  const [firstName, setFirstName] = useState("Trial");
  const [lastName, setLastName] = useState("one");
  const [emailId, setEmailID] = useState("trial@example.com");
  const [password, setPassword] = useState("Trial@123");
  const [isLoginForm, setIsLoginForm] = useState(true);
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
      // console.log("error:" + res);
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.statusText || "Something went wrong!");
    }
  };
  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true },
      );
      dispatch(addUser(res.data.data));
      navigate("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm ">
        <div className="card-body">
          <h2 className="card-title text-center">
            {isLoginForm ? "Log In" : "Sign Up"}
          </h2>
          <div className="">
            {!isLoginForm && (
              <>
                <div>
                  <fieldset className="fieldset flex">
                    <label className="label w-1/5" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="input"
                      placeholder=""
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </fieldset>
                </div>
                <div>
                  <fieldset className="fieldset flex">
                    <label className="label w-1/5" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="input"
                      placeholder=""
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </fieldset>
                </div>
              </>
            )}
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
            <button
              className="btn btn-primary"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Log In" : "Sign Up"}
            </button>
          </div>
          <p
            className="cursor-pointer"
            onClick={() => {
              setIsLoginForm(!isLoginForm);
            }}
          >
            {!isLoginForm
              ? "Existing user? Log In here"
              : "New user? Sign Up here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
