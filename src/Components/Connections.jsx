import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../Utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((Store) => Store.connection);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnection(res.data.data));
      //   console.log(connections);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);
  if (!connections) return null;
  if (connections.length == 0)
    return (
      <div>
        <h1 className="text-center my-4">No connections found!</h1>
      </div>
    );
  return (
    <div className="">
      <h1 className="text-3xl text-center my-2">Connections</h1>
      <div className="mx-2">
        {connections.map((connection) => (
          <div key={connection._id} className="flex bg-base-300 my-2 mx-5 rounded-2xl">
            <div className="m-3">
              <img className="rounded-full" src={connection.photoURL} />
            </div>
            <div className="my-3">
              <h1 className="text-xl">{connection.firstName + " " + connection.lastName}</h1>
              <p>{connection.age + ", " + connection.gender}</p>
              <p>{connection.description}</p>
              <p>{"Skilled at " + connection.skills.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;
