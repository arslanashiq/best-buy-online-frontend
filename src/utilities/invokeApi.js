import axios from "axios";
import { API_URL } from "./constant";

const invokeApi = async ({
  url,
  method = "GET",
  data = null,
  params = null,
  headers = {},
}) => {
  try {
    const response = await axios({
      url: `${API_URL}${url}`,
      method,
      data,
      params,
      headers,
    });
    return response?.data;
  } catch (error) {
    if (error?.response) {
      if (error?.response?.status === 401) {
        console.error("Unauthorized access - 401");
        localStorage.clear();
        window.location.reload();
      }
      throw error?.response?.data;
    }
    console.error("API Error:", error);
    throw error;
  }
};

export default invokeApi;
