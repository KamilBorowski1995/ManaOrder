const Auth = {
  authenticated: false,
  login(cb, data) {
    Auth.authenticated = true;
    sessionStorage.setItem("auth-token", data.token);
    sessionStorage.setItem("user", data.user);
    sessionStorage.setItem("role", data.role);
    cb();
  },

  logout(cb) {
    Auth.authenticated = false;
    sessionStorage.clear("auth-token");
    sessionStorage.clear("user");
    cb();
  },

  isAuthenticated() {
    const token = sessionStorage.getItem("auth-token");
    if (token) Auth.authenticated = true;
    return Auth.authenticated;
  },
};

export default Auth;
