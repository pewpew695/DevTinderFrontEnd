import React from "react";

const UserCard = ({ user }) => {
  //   console.log(user);
  const { firstName, lastName, age, gender, description, skills, photoURL } =
    user;
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure className="my-2">
          <img src={photoURL} alt="User Photo" className="rounded-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && (
            <p>{age + ", " + gender[0].toUpperCase() + gender.slice(1)}</p>
          )}
          <p>{description}</p>
          <p>{"Skilled at " + skills}</p>
          <div className="card-actions justify-end my-2">
            <button className="btn btn-primary bg-red-500">Ignore</button>
            <button className="btn btn-primary bg-green-600">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
