import { createContext, useContext, useState } from "react";

import PropTypes from "prop-types";
import { detail_user } from "../DAL/user";
const MyAppContext = createContext();
export const UseAppContext = () => useContext(MyAppContext);

export const AppContext = ({ children }) => {
  //states
  const [userData, setUserData] = useState(null);

  //functions
  const fetchUserDetails = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await detail_user(user._id);
    if (response?.data) {
      setUserData(response?.data);
    }
  };
  const updateUserDetails = async (payload = {}) => {
    if (!payload) return;
    setUserData({ ...userData, ...payload });
  };

  const collection = {
    //states
    userData,
    //functions
    fetchUserDetails,
    updateUserDetails,
  };

  return (
    <MyAppContext.Provider value={collection}>{children}</MyAppContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node,
};
