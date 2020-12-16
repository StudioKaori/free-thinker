import React from "react";

import TeacherCarousel from "./TeacherCarousel";
import StudentCarousel from "./StudentCarousel";
import Footer from "./Footer";

// =====================================================================
// Content in Home / Login page
function HomePage() {

    return (
        <>
            <section className="home-section">
                <div className="row d-flex flex-wrap-reverse">
                    <div className="col-md-6 bg-dark home-carousel">
                        <TeacherCarousel />
                    </div>
                    <div className="col-md-6 bg-light home-infos">
                        <h3 className="mb-3">Teachers</h3>
                        <p>
                            Plan your daily routine in advance,
                            follow your student's activity and result.
                            <br />
                            Using this platform, you can
                            offer your students a wonderful travel into learning.
                            <br />
                            Enjoy a professional tool for you and a exicting
                            environment for your pupils.
                        </p>
                        <p>Your creativity is the only limit!</p>
                    </div>
                </div>
            </section>
            <section className="home-section">
                <div className="row">
                    <div className="col-md-6 bg-light home-infos">
                        <h3 className="mb-3">Parents</h3>
                        <p>
                            Almost like they were in a real classroom, students
                            can do thir assignment, follow a lecture on their own or
                            attend a live session.
                            <br />
                            They will learn in a secure and amazing platform
                            where it is possible to associate fun and knowledge
                            <br />
                            Online advantage: all content is available and videos can be view
                            and review.
                        </p>
                        <p>Let your children in good hands.</p>
                    </div>
                    <div className="col-md-6 bg-dark home-carousel">
                        <StudentCarousel />
                    </div>
                </div>
            </section>
            <section className="about-section">
                <h3 className="mb-3">Who are we ?</h3>
                <p>
                    A team passionate about learning and development and
                    this is the best of the two worlds. 
                    <br />
                    We are more interested in your feedback or advices.
                    Feel free to contact at <em>freethinkers@mail.com</em>
                </p>
                <p>We are Free Thinkers !</p>
            </section>
            <Footer />

        </>
    )

}

export default HomePage;
