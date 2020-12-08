import React, { useEffect, useState } from "react";
import Api from "../../api/Api";
import LectureCard from "./LectureCard";
import LectureForm from "./LectureForm";

function LecturePage({ dateFromCal }) {
  const dateFromCalDate = dateFromCal.match.params.date;
  console.log("dateFromCalDate", dateFromCalDate);

  const [lectures, setLectures] = useState([]);

  const createLecture = (lectureData) => {
    console.log("lectureData", lectureData);
    let sqlLectureData = {};
    sqlLectureData.title = lectureData.title;
    sqlLectureData.body = lectureData.body;
    sqlLectureData.unlockTime =
      lectureData.unlockDate + "T" + lectureData.unlockTime + ":00.0";
    sqlLectureData.youtubeUrl = lectureData.youtube.replace(
      "https://www.youtube.com/watch?v=",
      ""
    );

    sqlLectureData.youtubeUrl = sqlLectureData.youtubeUrl.replace(
      /[&][t][=].*/g,
      ""
    );
    console.log("sqlLectureData", sqlLectureData);

    Api.post("/lectures", sqlLectureData).then((res) =>
      setLectures([...lectures, res.data])
    );
  };

  const getAll = () => {
    Api.get("/lectures").then((res) => setLectures(res.data));
  };

  const updateLecture = (updatedLecture) => {
    Api.put("/lectures/", updatedLecture).then((r) => getAll());
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
