import Axios from "axios";

export const axiosFunc = (method, url, data, headers, callback) => {
  Axios({
    method,
    url,
    data,
    headers
  }).then(
    res => {
      callback(true, res);
    },
    err => {
      callback(false, err);
    }
  );
};
