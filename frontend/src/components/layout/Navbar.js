import React, { useState, useEffect } from "react";
import Api from "../../api/Api";
import { Link } from "react-router-dom";
import LogoIcon from "../../assets/img/components/navbar/logo-icon.png";

// These two lines are to get user information and other shared statement
import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";

function Navbar({ onLogout }) {
  const [status, setStatus] = useState(0);
  const [user, setUser] = useRecoilState(userState);

  // for user info
  const getUser = () => {
    Api.get("/user/loggedInUser").then((res) => setUser([res.data]));
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user.length !== 0) {
      setStatus(1);
    }
  }, [user]);

  // for navigation drawer
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <nav>
      <div className="header-menu-bg">
        <div className="header-menu-wrapper">
          <div className="header-menu-logo">
            <h1>
              F<span>R</span>E<span>E</span> T<span>H</span>I<span>N</span>K
              <span>E</span>R
            </h1>
            <img
              src={LogoIcon}
              alt="Free Thinker"
              className="header-menu-logo-icon"
            />
          </div>

          <div className="header-profile-photo-wrapper">
            {status === 1 ? (
              <div>
                <div className="header-profile-photo-name">
                  {user[0].userType === "Teacher" ? "Teacher " : null}
                  {user[0].name}
                </div>
                <div className="header-profile-photo-container">
                  <img
                    src="/assets/img/test/lisa-larson.jpg"
                    className="header-profile-photo"
                  />
                </div>
              </div>
            ) : null}
          </div>

          <div className="mobile-menu">
            <span onClick={() => openNav()}>
              <i className="fas fa-bars"></i>
            </span>
          </div>

          <div id="mySidenav" className="header-menu">
            <span className="closebtn" onClick={() => closeNav()}>
              &times;
            </span>

            {status === 1 ? (
              user[0].userType === "Teacher" ? (
                <ul>
                  {/* Teacher navbar */}
                  <li onClick={() => closeNav()}>
                    <Link to="/" className="nav-link">
                      HOME
                    </Link>
                  </li>
                  {/* Add Teacher menu here */}
                  <li className="nav-link">
                    <Link to="/create-lecture">Create Lecture</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/create-assignment">Create Assignment</Link>
                  </li>
                  <li onClick={onLogout}>
                    <Link>LOGOUT</Link>
                  </li>
                </ul>
              ) : (
                <ul>
                  {/* Student navbar */}
                  <li onClick={() => closeNav()}>
                    <Link to="/" className="nav-link">
                      HOME
                    </Link>
                    {/* Add Student menu here */}
                  </li>
                  <li onClick={onLogout}>
                    <Link to="/">LOGOUT</Link>
                  </li>
                </ul>
              )
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
