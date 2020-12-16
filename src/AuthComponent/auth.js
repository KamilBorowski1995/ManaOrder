import { veryfToken } from "./fetch";

const Auth = {
  authenticated: false,
  login(cb) {
    Auth.authenticated = true;
    sessionStorage.setItem("auth", true);
    cb();
  },

  logout(cb) {
    Auth.authenticated = false;
    sessionStorage.clear("auth");
    cb();
  },

  isAuthenticated() {
    veryfToken();
    if (sessionStorage.getItem("auth")) {
      Auth.authenticated = true;
      return Auth.authenticated;
    }
  },
};

export default Auth;
