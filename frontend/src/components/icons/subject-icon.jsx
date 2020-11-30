import React, { useState } from "react";
import maths from "../../assets/img/maths-logo.png";
import science from "../../assets/img/science-logo.png";
import english from "../../assets/img/english-logo.png";
import geo from "../../assets/img/geo-logo.png";

import "../../css/icons.css";


export default function subjectIcon({subject}) {

    // const [subject, setSubject] = useState("");
    // setSubject(subject);

    switch(subject) {
        case "english":
            return <img className="subject" src={english} alt="English logo"/>;
        case "maths":
            return <img className="subject" src={maths} alt="Maths logo"/>;
        case "science":
            return <img className="subject" src={science} alt="Science logo"/>;
        case "geo":
            return <img className="subject" src={geo} alt="Geography logo"/>;

    }

    // return (
    //     <div>
    //         <img className="subject" src={maths} alt="Maths logo"/>
    //         <img className="subject" src={science} alt="Science logo"/>
    //         <img className="subject" src={english} alt="English logo"/>
    //         <img className="subject" src={geo} alt="Geography logo"/>
    //     </div>
    // );
}