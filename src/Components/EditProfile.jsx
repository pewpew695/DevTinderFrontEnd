import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../Utils/Constants";
import UserCard from "./UserCard";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [photoURL, setPhotoURL] = useState(user?.photoURL);
  const [skills, setSkills] = useState(user?.skills);
  const [description, setDescription] = useState(user?.description);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   const token = localStorage.getItem("token");

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.put(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          description,
          skills,
          photoURL,
        },
        {
          withCredentials: true,
        },
      );
      //   console.log(res.data);
      dispatch(addUser(res.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.error("Error:" + err?.response?.data);
      setError(err?.response?.data || "Something went wrong!");
    }
  };

  return (
    user && (
      <div className="flex justify-center my-5">
        <div className="flex justify-center mx-5 ">
          <div className="card bg-base-300 w-96 shadow-sm ">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Your Profile</h2>
              <div className="">
                <div>
                  <fieldset className="fieldset flex">
                    <label className="label w-1/5" htmlFor="FirstName">
                      FirstName
                    </label>
                    <input
                      type="text"
                      id="FirstName"
                      className="input"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </fieldset>
                </div>
              </div>
              <div className="">
                <div>
                  <fieldset className="fieldset flex">
                    <label className="label w-1/5" htmlFor="lastName">
                      LastName
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="input"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </fieldset>
                </div>
              </div>
              <div className="">
                <div>
                  <fieldset className="fieldset flex">
                    <label className="label w-1/5" htmlFor="age">
                      Age
                    </label>
                    <input
                      type="text"
                      id="age"
                      className="input"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </fieldset>
                </div>
              </div>
              <div className="">
                <div>
                  <fieldset className="fieldset flex">
                    <label className="label w-1/5" htmlFor="gender">
                      Gender
                    </label>
                    <input
                      type="text"
                      id="gender"
                      className="input"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </fieldset>
                </div>
              </div>
              <div className="">
                <div>
                  <fieldset className="fieldset flex">
                    <label className="label w-1/5" htmlFor="photoURL">
                      PhotoURL
                    </label>
                    <input
                      type="text"
                      id="photoURL"
                      className="input"
                      value={photoURL}
                      onChange={(e) => setPhotoURL(e.target.value)}
                    />
                  </fieldset>
                </div>
              </div>
              <div className="">
                <div>
                  <fieldset className="fieldset flex">
                    <label className="label w-1/5" htmlFor="description">
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      className="input"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </fieldset>
                </div>
              </div>
              <div className="">
                <div>
                  <fieldset className="fieldset flex">
                    <label className="label w-1/5" htmlFor="skills">
                      Skills
                    </label>
                    <input
                      type="text"
                      id="skills"
                      className="input"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                    />
                  </fieldset>
                </div>
              </div>
              <p className="text-red-300">{error}</p>
              <div className="card-actions justify-center">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    saveProfile();
                  }}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{
            firstName,
            lastName,
            age,
            gender,
            photoURL,
            description,
            skills,
          }}
        />
        {showToast && (
          <div className="toast toast-top toast-center">
            <div className="alert alert-success">
              <span>Profile Saved Successfully!</span>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default EditProfile;
