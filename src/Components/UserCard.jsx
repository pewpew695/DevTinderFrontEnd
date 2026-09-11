import axios from "axios";
import React from "react";
import { BASE_URL, DEFAULT_PHOTO_URL } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../Utils/feedSlice";
const UserCard = ({ user }) => {
  //   console.log(user);
  const {
    _id,
    firstName,
    lastName,
    age,
    gender,
    description,
    skills,
    photoURL,
  } = user;
  const dispatch = useDispatch();
  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true },
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure className="my-2">
          <img
            src={photoURL ? photoURL : DEFAULT_PHOTO_URL}
            alt="User Photo"
            className="rounded-full h-50 - w-50"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && (
            <p>{age + ", " + gender[0].toUpperCase() + gender.slice(1)}</p>
          )}
          <p>{description}</p>
          <p>{"Skilled at " + skills.join(", ")}</p>
          <div className="card-actions justify-end my-2">
            <button
              className="btn btn-primary bg-red-500"
              onClick={() => {
                handleSendRequest("ignored", _id);
              }}
            >
              Ignore
            </button>
            <button
              className="btn btn-primary bg-green-600"
              onClick={() => {
                handleSendRequest("interested", _id);
              }}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
