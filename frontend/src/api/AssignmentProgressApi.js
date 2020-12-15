import Api from "./Api";

class AssignmentProgressApi {
  getAllAssignmentProgresss() {
    return Api.get("/assignmentProgress");
  }

  createAssignmentProgress(assignmentProgress) {
    return Api.post("/assignmentProgress", assignmentProgress);
  }

  updateAssignmentProgress(assignmentProgress) {
    return Api.put("/assignmentProgress", assignmentProgress);
  }

  deleteAssignmentProgress(id) {
    return Api.delete("/assignmentProgress/" + id);
  }
}

export default new AssignmentProgressApi();
