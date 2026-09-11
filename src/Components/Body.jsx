import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => {
    store.user;
  });
  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      // console.log(res);
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status == 401) {
        navigate("/login");
      }
      console.error(err);
    }
  };

  useEffect(() => {
    // console.log("useeffect");
    if (!userData) {
      fetchUser();
    }
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Body;
