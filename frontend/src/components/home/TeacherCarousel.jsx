import React from "react";

import image1 from '../../assets/img/carousel/teacher-carousel-1.png';
import image2 from '../../assets/img/carousel/teacher-carousel-2.png';
import image3 from '../../assets/img/carousel/teacher-carousel-3.png';

// =====================================================================
// Carousel for teacher section in home page
function TeacherCarousel() {

    return (
        <div id="teacherCarousel" className="carousel slide p-5" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#teacherCarousel" data-slide-to="0"></li>
                <li data-target="#teacherCarousel" data-slide-to="1" className="active"></li>
                <li data-target="#teacherCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image1} className="d-block w-100" alt="image1" />
                </div>
                <div className="carousel-item">
                    <img src={image2} className="d-block w-100" alt="image2" />
                </div>
                <div className="carousel-item">
                    <img src={image3} className="d-block w-100" alt="image3" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#teacherCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#teacherCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )

}

export default TeacherCarousel;
