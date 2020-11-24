import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import custom styles for our application
import "./App.css";

import Auth from "./services/Auth";
import Navbar from "./components/layout/Navbar";
import User from "./components/user/user";
import Teacher from "./components/teacher/teacher";
import Student from "./components/student/student";

// Import pages
import LoginPage from "./components/auth/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <RecoilRoot>
      <Router>
        <Navbar onLogout={() => Auth.logout()} />

        <div className="container mt-5">
          <Switch>
            <Route path="/student">
              <Student />
            </Route>

            <Route path="/teacher">
              <Teacher />
            </Route>

            <Route path="/">
              <User />
            </Route>
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  );

  return loggedIn ? loggedInRouter : <LoginPage />;
}

export default App;
