class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    sessionStorage.setItem("auth", true);
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    sessionStorage.clear("auth");
    cb();
  }

  isAuthenticated() {
    if (sessionStorage.getItem("auth")) {
      this.authenticated = true;
    }
    return this.authenticated;
  }
}

export default new Auth();
