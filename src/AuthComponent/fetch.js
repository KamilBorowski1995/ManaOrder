import axios from "axios";

export const veryfToken = (token, cb, ext) => {
  axios
    .get("http://localhost:5000/api/users/veryfToken", {
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
