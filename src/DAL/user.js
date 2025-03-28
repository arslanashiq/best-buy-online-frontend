import invokeApi from "../utilities/invokeApi";

export const detail_user = async (id) => {
  const reqObj = {
    url: `/user/${id}`,
    data: null,
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
    method: "GET",
    params: null,
  };

  return invokeApi(reqObj);
};
export const add_user = async (payload) => {
  const reqObj = {
    url: `/user`,
    data: payload,
    headers: {},
    method: "POST",
  };

  return invokeApi(reqObj);
};

export const update_task_assigned_date = async (id) => {
  const reqObj = {
    url: `/user/${id}/update_task_assigned_date`,
    data: null,
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
    method: "PUT",
    params: null,
  };

  return invokeApi(reqObj);
};
export const update_remaining_task_count = async (id) => {
  const reqObj = {
    url: `/user/${id}/update_remaining_task_count`,
    data: null,
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
    method: "PUT",
    params: null,
  };

  return invokeApi(reqObj);
};
export const update_balance = async (id, payload) => {
  const reqObj = {
    url: `/user/${id}/update_balance`,
    data: payload,
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
    method: "PUT",
    params: null,
  };

  return invokeApi(reqObj);
};
export const withdraw_amount = async (id, payload) => {
  const reqObj = {
    url: `/user/${id}/withdraw_amount`,
    data: payload,
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
    method: "PUT",
    params: null,
  };

  return invokeApi(reqObj);
};

export const update_bank = async (id, payload) => {
  const reqObj = {
    url: `/user/${id}/update_bank`,
    data: payload,
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
    method: "PUT",
    params: null,
  };

  return invokeApi(reqObj);
};
