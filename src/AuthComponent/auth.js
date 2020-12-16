import { veryfToken } from "./fetch";

const Auth = {
  authenticated: false,
  login(cb, data) {
    Auth.authenticated = true;
    sessionStorage.setItem("auth-token", data.token);
    sessionStorage.setItem("user", data.user);
    cb();
  },

  logout(cb) {
    Auth.authenticated = false;
    sessionStorage.clear("auth-token");
    cb();
  },

  isAuthenticated(data) {
    const localToken = sessionStorage.getItem("auth-token");
    if (localToken) {
      veryfToken(localToken);
      Auth.authenticated = true;
      return Auth.authenticated;
    }
  },
};

export default Auth;
