import axios from "axios";

export const veryfToken = (localToken) => {
  axios
    .get("http://localhost:5000/api/users/veryfToken")
    .then((res) => {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
};
