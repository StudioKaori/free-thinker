import Api from "./Api";

class LectureApi {
  getAllLectures() {
    return Api.get("/lectures");
  }

  getLectureByUnlockDate(date) {
    return Api.get("/lectures/byDate/" + date);
  }

  getLectureById(id) {
    return Api.get("/lectures/" + id);
  }

  createLecture(lecture) {
    return Api.post("/lectures", lecture);
  }

  updateLecture(lecture) {
    return Api.put("/lectures", lecture);
  }

  deleteLecture(id) {
    return Api.delete("/lectures/" + id);
  }
}

export default new LectureApi();
