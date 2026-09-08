import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed, removeUserFromFeed } from "../Utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feed.length > 0) return;
    try {
      console.log(feed);
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  if (feed.length <= 0)
    return (
      <div>
        <h1 className="text-center m-5">No more users found!</h1>
      </div>
    );
  return (
    feed?.length > 0 && (
      <div className="flex justify-center my-4">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
