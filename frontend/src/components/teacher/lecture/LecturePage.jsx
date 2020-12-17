import React, { useEffect, useRef, useState } from "react";
import moment from "moment";

import Api from "../../../api/Api";

import LectureCard from "./LectureCard";
import LectureForm from "./LectureForm";

// ========================================================================
// Teacher create lecture entry point
function LecturePage({ dateFromCal }) {
    const dateFromCalDate = useRef("");
    const [isOpen, setIsOpen] = useState(false);
    const [errorTitle, setErrorTitle] = useState(false);
    const [errorDate, setErrorDate] = useState(false);
    const [errorTime, setErrorTime] = useState(false);

    if (typeof dateFromCal !== "undefined") {
        dateFromCalDate.current = dateFromCal.match.params.date;
    }

    const [lectures, setLectures] = useState([]);

    // const [activity, setActivity] = useRecoilState(recent);

    const createLecture = (lectureData) => {

        if (lectureData.unlockDate === '') {
            setErrorDate(true);
            setTimeout(() => {
                setErrorDate(false);
            }, 1000);
        }
        if (lectureData.unlockTime === '') {
            setErrorTime(true);
            setTimeout(() => {
                setErrorTime(false);
            }, 1000);
        }
        if (lectureData.title === '') {
            setErrorTitle(true);
            setTimeout(() => {
                setErrorTitle(false);
            }, 1000);
            return;
        }

        let sqlLectureData = {};
        sqlLectureData.title = lectureData.title;
        sqlLectureData.body = lectureData.body;

        sqlLectureData.unlockTime =
            moment(lectureData.unlockDate).format("YYYY-MM-DD") +
            "T" +
            lectureData.unlockTime +
            ":00.0";

        if (lectureData.youtube !== "") {
            sqlLectureData.youtubeUrl = lectureData.youtube
                .match(/[v][=][A-Za-z1-9]+/g)[0]
                .replace("v=", "");
        }

        sqlLectureData.zoomLink = lectureData.zoom;

        Api.post("/lectures", sqlLectureData).then((res) => {
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 1000);

            setLectures([res.data, ...lectures]);
            const temp =
                JSON.parse(window.localStorage.getItem("recent-activity")) || [];
            window.localStorage.setItem(
                "recent-activity",
                JSON.stringify(temp.concat(res.data))
            );
            document.getElementsByClassName(
                "ck-content"
            )[0].childNodes[0].innerHTML = "";
        });
    };

    const getAll = () => {
        Api.get("/lectures").then((res) => {
            setLectures(res.data.sort((a, b) => b.id - a.id));
        });
    };

    const updateLecture = (updatedLecture) => {
        let sqlLectureData = {};
        sqlLectureData.id = updatedLecture.id;
        sqlLectureData.title = updatedLecture.title;
        sqlLectureData.body = updatedLecture.body;
        sqlLectureData.unlockTime =
            updatedLecture.unlockDate + "T" + updatedLecture.unlockTime + ":00.0";
        if (updatedLecture.youtube !== "") {
            sqlLectureData.youtubeUrl = updatedLecture.youtube
                .match(/[v][=][A-Za-z1-9]+/g)[0]
                .replace("v=", "");
        }

        sqlLectureData.zoomLink = updatedLecture.zoom;

        Api.put("/lectures/", sqlLectureData).then((r) => getAll([]));
    };

    const deleteLecture = (lecture) => {
        Api.delete("/lectures/" + lecture.id).then((r) => getAll());
    };

    useEffect(() => {
        getAll();
    }, []);

    return (
        <div className="body-wrapper">
            <LectureForm
                onCreateClick={createLecture}
                dateFromCalDate={dateFromCalDate}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                errorTitle={errorTitle}
                setErrorTitle={setErrorTitle}
                errorDate={errorDate}
                setErrorDate={setErrorDate}
                errorTime={errorTime}
                setErrorTime={setErrorTime}
            />

            {lectures.map((lecture) => (
                <LectureCard
                    key={lecture.id}
                    lecture={lecture}
                    onUpdateClick={updateLecture}
                    onDeleteClick={deleteLecture}
                />
            ))}
        </div>
    );
}

export default LecturePage;
