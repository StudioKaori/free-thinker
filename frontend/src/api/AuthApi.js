import Api from "./Api";

class AuthApi {
  authenticate({ email, password }) {
    return Api.post("/authenticate", { email, password });
  }

  register({ name, email, password, userType }) {
    return Api.post("/register", { name, email, password, userType });
  }
}

export default new AuthApi();
