import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import LectureApi from "../../api/LectureApi"

// ========================================================================
// Lecture in student side - old one, not use
export default function LectureStudentPage(){

    const [lectures, setLectures] = useState([]);

    useEffect(() => {
        LectureApi.getAllLectures()
            .then((res) => {
                // console.log(res);
                setLectures(res.data);
            })
    }, [])

    const lectureName = lectures.map((lecture) =>
    <div className="list-group m-2" >
        <Link className="list-group-item" to={`student/lectures/${lecture.id}`}> Go to {lecture.title}
        </Link>
    </div>
    )

return (
    <div>
       {lectureName}
    </div>
);

}
