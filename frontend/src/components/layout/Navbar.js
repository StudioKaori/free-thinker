import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Api from "../../api/Api";

import Profile from "../layout/Profile";
import UserApi from "../../api/UserApi";
import MenuButton from "../common/MenuButton";

// Popup
import showPopupWindow from "../../js/common/popup/showPopupWindow";
import closePopupWindow from "../../js/common/popup/closePopupWindow";

// These two lines are to get user information and other shared statement
import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";


// ========================================================================
// Navbar - visible on every pages
function Navbar({ onLogout }) {
  const [status, setStatus] = useState(0);
  const [user, setUser] = useRecoilState(userState);

  // for user info
  const getUser = () => {
    Api.get("/user/loggedInUser").then((res) => {
      setUser([res.data]);
    });
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user.length !== 0) {
      setStatus(1);
    }
  }, [user]);

  // for navigation drawer
  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  const registerPhotoToDB = (fireBaseUrl) => {
    let updatedUser = {};
    updatedUser.id = user[0].id;
    updatedUser.userPic = fireBaseUrl;
    updatedUser.email = user[0].email;
    updatedUser.name = user[0].name;
    updatedUser.userType = user[0].userType;
    updatedUser.password = user[0].password;
    UserApi.updateUser(updatedUser);
  };

  return (
    <nav>
      <div className="header-menu-bg">
        <div className="header-menu-wrapper">
          <div className="header-menu-logo">
            <h1>
              <Link to="/">
                <img
                  src="/assets/img/logo.svg"
                  alt="Free Thinker"
                  title="Free Thinker"
                  className="header-menu-logo-icon"
                />
              </Link>
            </h1>
          </div>

          <div className="header-profile-photo-wrapper">
            {status === 1 ? (
              <div>
                <div className="header-profile-photo-name">
                  {user[0].userType === "Teacher" ? "Teacher " : null}
                  {user[0].name}
                </div>
                <div
                  className="header-profile-photo-container"
                  onClick={() => showPopupWindow()}
                >
                  {status === 1 && user[0].userPic !== null ? (
                    <img
                      src={user[0].userPic}
                      className="header-profile-photo"
                      alt="user-profile-pic"
                    />
                  ) : (
                    <i className="fas fa-user-edit"></i>
                  )}
                </div>
              </div>
            ) : null}
          </div>

          <div className="mobile-menu">
            <span onClick={() => openNav()} onMouseEnter={() => openNav()}>
              <MenuButton />
              {/* <i className="fas fa-bars"></i> */}
            </span>
          </div>

          <div
            id="mySidenav"
            className="header-menu"
            onMouseLeave={() => closeNav()}
          >
            <span className="closebtn" onClick={() => closeNav()}>
              &times;
            </span>

            {status === 1 ? (
              user[0].userType === "Teacher" ? (
                <ul>
                  {/* Teacher navbar */}
                  <li onClick={() => closeNav()}>
                    <Link to="/">
                      <i className="fas fa-home"></i>HOME
                    </Link>
                  </li>
                  {/* Add Teacher menu here */}
                  <li onClick={() => closeNav()}>
                    <Link to="/create-lecture">
                      <i className="fas fa-glasses"></i>Create Lecture
                    </Link>
                  </li>
                  <li onClick={() => closeNav()}>
                    <Link to="/create-assignment">
                      <i className="fas fa-file-alt"></i>Create Assignment
                    </Link>
                  </li>
                  <li onClick={() => closeNav()}>
                    <Link to="/lecture-calendar">
                      <i className="fas fa-calendar-alt"></i>Lecture Calendar
                    </Link>
                  </li>
                  <li onClick={() => closeNav()}>
                    <Link to="/daily-settings">
                      <i className="fas fa-cog"></i>Daily Settings
                    </Link>
                  </li>
                  <li onClick={onLogout}>
                    <Link to="/">
                      <i className="fas fa-sign-out-alt"></i>LOGOUT
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul>
                  {/* Student navbar */}
                  <li onClick={() => closeNav()}>
                    <Link to="/">
                      <i className="fas fa-home"></i>HOME
                    </Link>
                    {/* Add Student menu here */}
                  </li>
                  <li onClick={onLogout}>
                    <Link to="/">
                      <i className="fas fa-sign-out-alt"></i>LOGOUT
                    </Link>
                  </li>
                </ul>
              )
            ) : null}
          </div>
        </div>
      </div>

      <div id="popupWindow" className="hidePopup popupWindow">
        <div className="popup_inner">
          {status === 1 && (
            <Profile
              key="profileUploader"
              registerPhotoToDB={registerPhotoToDB}
              closePopupWindow={closePopupWindow}
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
