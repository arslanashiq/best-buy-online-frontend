import invokeApi from "../utilities/invokeApi";

export const get_transactions_list = async (id) => {
  const reqObj = {
    url: `/transaction/${id}/transactions`,
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
    method: "GET",
    params: null,
  };

  return invokeApi(reqObj);
};
