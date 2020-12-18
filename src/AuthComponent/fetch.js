import axios from "axios";
import { config } from "../config";

export const veryfToken = (token, cb, ext) => {
  axios
    .get(`${config.server}/api/users/veryfToken`, {
      headers: {
        "auth-token": token,
      },
    })
    .then((res) => {
      if (res.status === 200) return cb();
    })
    .catch(function (error) {
      return ext();
    })
    .then(function () {});
};
