import axios from "axios";

export const BaseURL =
  "https://www.googleapis.com/";

export default {
  async get(requestUrl) {
    const URL = `${BaseURL}/${requestUrl}`;
    return await axios(URL, {
      method: "GET",
    })
      .then((response) => {
        return { data: response.data, status: response.status };
      })
      .catch((error) => {
        return error;
      });
  },
};
