import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../Utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((Store) => Store.request);
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.connectionRequests));
      console.log(res.data.connectionRequests);
    } catch (err) {
      console.error(err);
    }
  };
  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true },
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);
  if (!requests) return null;
  if (requests.length == 0)
    return (
      <div>
        <h1 className="text-center my-4">No requests found!</h1>
      </div>
    );
  return (
    <div className="">
      <h1 className="text-3xl text-center my-2">Requests</h1>
      <div className="mx-2">
        {requests.map((request) => (
          <div
            key={request.fromUserId._id}
            className="flex bg-base-300 my-2 mx-5 rounded-2xl items-center"
          >
            <div className="m-3">
              <img className="rounded-full" src={request.fromUserId.photoURL} />
            </div>
            <div className="my-3 ml-4 w-6/12">
              <h1 className="text-xl">
                {request.fromUserId.firstName +
                  " " +
                  request.fromUserId.lastName}
              </h1>
              <p>{request.fromUserId.age + ", " + request.fromUserId.gender}</p>
              <p>{request.fromUserId.description}</p>
              <p>{"Skilled at " + request.fromUserId.skills.join(", ")}</p>
            </div>
            <div className="flex gap-4">
              <button
                className="btn btn-success w-30"
                onClick={() => {
                  reviewRequest("accepted", request.fromUserId._id);
                }}
              >
                Accept
              </button>
              <button
                className="btn btn-error w-30"
                onClick={() => {
                  reviewRequest("rejected", request.fromUserId._id);
                }}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
