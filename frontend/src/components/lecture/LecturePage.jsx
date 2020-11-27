import React, { useEffect, useState } from "react";
import Api from "../../api/Api";
import LectureCard from "./LectureCard";
import LectureForm from "./LectureForm";


function LecturePage() {
    const [lectures, setLectures] = useState([]);

    const createLecture = (lectureData) => {
        Api.post("/lectures", lectureData)
        .then((r) => console.log(r));
          //  .then((res) => setLectures([...lectures, res.data]));
    };

    const getAll = () => {
        Api.get("/lectures")
            .then(res => setLectures(res.data));
    };

    const updateLecture = (updatedLecture) => {
        Api.put("/lectures/", updatedLecture)
            .then(r => getAll());
    };

    const deleteLecture = (lecture) => {
        Api.delete("/lectures/" + lecture.id)
            .then(r => getAll());
    }

    useEffect(() => {
        getAll();
    }, []);

    return <div>
        <LectureForm onCreateClick={createLecture} />

        {
            lectures.map(lecture => (<LectureCard
                key={lecture.id}
                lecture={lecture}
                onUpdateClick={updateLecture}
                onDeleteClick={deleteLecture} />))
        }
    </div>
}


export default LecturePage;
