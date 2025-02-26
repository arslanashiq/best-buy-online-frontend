import invokeApi from "../utilities/invokeApi";

export const login_user = async (payload) => {
  const reqObj = {
    url: "/auth/login",
    data: payload,
    headers: {},
    method: "POST",
    params: null,
  };

  return invokeApi(reqObj);
};

export const logout_user = async (payload) => {
  const reqObj = {
    url: "/auth/logout",
    data: payload,
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
    method: "POST",
    params: null,
  };

  return invokeApi(reqObj);
};
