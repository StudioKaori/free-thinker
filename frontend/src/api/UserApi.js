import Api from "./Api";

class UserApi {
    getAllUsers() {
        return Api.get('/user');
    }

  updateUser(user) {
    return Api.put("/user", user);
  }
}

export default new UserApi();
