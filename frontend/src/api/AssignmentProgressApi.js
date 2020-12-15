import Api from "./Api";

class AssignmentProgressApi {
  getAllAssignmentProgresss() {
    return Api.get("/assignmentProgress");
  }

  getAllAssignmentProgresssByStudentId(studentId) {
    return Api.get("/assignmentProgress/studentId/" + studentId);
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
