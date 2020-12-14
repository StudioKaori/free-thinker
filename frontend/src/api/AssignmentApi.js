import Api from "./Api";

class AssignmentApi {
  getAllAssignments() {
    return Api.get("/assignments");
  }

  getAssignmentsByUnlockDate(date) {
    return Api.get("/assignments/byDate/" + date);
  }

  getAssignmentById(id) {
    return Api.get("/assignments/" + id);
  }

  createAssignment(assignment) {
    return Api.post("/assignments", assignment).then((res) => {
      const temp =
        JSON.parse(window.localStorage.getItem("recent-activity")) || [];
      window.localStorage.setItem(
        "recent-activity",
        JSON.stringify(temp.concat(res.data))
      );
    });
  }

  updateAssignment(assignment) {
    return Api.put("/assignments", assignment);
  }

  deleteAssignment(id) {
    return Api.delete("/assignments/" + id);
  }
}

export default new AssignmentApi();
