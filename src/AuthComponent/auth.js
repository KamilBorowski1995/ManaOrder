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
    sessionStorage.setItem("auth", false);
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
