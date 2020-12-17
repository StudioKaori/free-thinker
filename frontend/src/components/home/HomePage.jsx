import React from "react";

import TeacherCarousel from "./TeacherCarousel";
import StudentCarousel from "./StudentCarousel";
import Footer from "./Footer";

// =====================================================================
// Content in Home / Login page
function HomePage() {
  return (
    <>
      <div className="parallax-bg login-bg-02">
        <div className="login-contents-wrapper">
          <div>
            <TeacherCarousel />
            <h3 className="mb-3">Teachers</h3>
            <p>
              Plan your daily routine in advance and follow your students'
              activities and results.
              <br />
              Using this platform, you can offer your students a wonderful
              journey into learning.
              <br />
              Enjoy a professional tool for yourself and an exicting environment
              for your pupils.
            </p>
            <p>Your creativity is the only limit!</p>
          </div>

          <div>
            <StudentCarousel />
            <h3 className="mb-3">Parents</h3>
            <p>
              Almost like they were in a real classroom, children can do their
              assignments, follow daily lectures or attend live sessions.
              <br />
              They will learn on a secure and amazing online platform where it
              is possible to associate fun with knowledge.
              <br />
            </p>
            <p>Let children be in good hands.</p>
          </div>
        </div>
      </div>

      <div className="login-who">
        <h3 className="mb-3">Who are we ?</h3>
        <p>
          A team passionate about learning and development and this is the best
          of the two worlds.
          <br />
          We are interested in your feedback and suggestions. Feel free to write
          to us at <em>freethinkers@mail.com</em>
        </p>
        <p>We are Free Thinkers !</p>
      </div>
      <div className="login-footer">
        <Footer />
      </div>

      {/* <div className="parallax-bg login-bg-03">
        <StudentCarousel />
        <h3 className="mb-3">Who are we ?</h3>
        <p>
          A team passionate about learning and development and this is the best
          of the two worlds.
          <br />
          We are interested in your feedback and suggestions. Feel free to write
          to us at <em>freethinkers@mail.com</em>
        </p>
        <p>We are Free Thinkers !</p>
      </div> */}

      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
