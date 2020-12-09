import Api from "./Api";

class UserApi {
  updateUser(user) {
    return Api.put("/user", user);
  }
}

export default new UserApi();
