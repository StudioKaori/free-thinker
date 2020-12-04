import React from "react";

import "../../css/schedule.css";

export default function Schedule() {

    const lectures = [
        {
          id: 1,
          subject: "English",
          date: "2020/11/27",
          time: "08:00",
        },
        {
          id: 2,
          subject: "Science",
          date: "2020/11/28",
          time: "09:00",
        },
        {
          id: 3,
          subject: "Maths",
          date: "2020/11/29",
          time: "10:00",
        },
        {
          id: 4,
          subject: "English",
          date: "2020/11/30",
          time: "11:00",
        },
        {
          id: 5,
          subject: "Science",
          date: "2020/12/01",
          time: "12:00",
        },
        {
          id: 6,
          subject: "Maths",
          date: "2020/12/02",
          time: "13:00",
        },
      ];

      console.log(lectures);

    return(
        
        <div >
            <table className="table table-striped table-dark">

            <caption>
                <h3>Lecture</h3>
            </caption>
                <tbody>
                <tr>
                    <th colSpan="2">
                    {lectures[0].date}
                    </th>
                </tr>
                <tr className="bg-primary">
                    <td>{lectures[0].subject}</td>
                    <td>{lectures[0].time}</td>
                </tr>
                <tr className="bg-info">
                    <td>{lectures[1].subject}</td>
                    <td>{lectures[1].time}</td>
                </tr>
                <tr className="bg-warning">
                    <td>{lectures[2].subject}</td>
                    <td>{lectures[2].time}</td>
                </tr>
                <tr className="bg-success">
                    <td>{lectures[3].subject}</td>
                    <td>{lectures[3].time}</td>
                </tr>
                </tbody>
            </table>
             
        </div>
    );
}