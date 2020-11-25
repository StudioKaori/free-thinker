import Api from "./Api";

class LectureApi {
    getAllLectures() {
        return Api.get('/lectures');
    }

    getLectureById(id) {
        return Api.get('/lectures/'+id);
    }

    createLecture(lecture) {
        return Api.post('/lectures', post);
    }

    updateLecture(lecture) {
        return Api.put('/lectures', post);
    }

    deleteLecture(id) {
        return Api.delete('/lectures/'+id);
    } 

}


    export default new LectureApi();