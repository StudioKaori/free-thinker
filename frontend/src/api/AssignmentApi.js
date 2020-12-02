import Api from "./Api";

class AssignmentApi {
    getAllAssignments() {
        return Api.get('/assignments');
    }

    getAssignmentById(id) {
        return Api.get('/assignments/'+id);
    }

    createAssignment(assignment) {
        return Api.post('/assignments', assignment);
    }

    updateAssignment(assignment) {
        return Api.put('/assignments',assignment);
    }

    deleteAssignment(id) {
        return Api.delete('/assignments/'+id);
    } 

}

export default new AssignmentApi();
