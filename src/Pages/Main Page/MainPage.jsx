import React from "react";
import Dashboard from "../../Components/MainPage/Dashboard/Dashboard";
import HeaderMain from "../../Components/MainPage/Main Header/HeaderMain";
import SideBarMain from "../../Components/MainPage/Main SideBar/SideBarMain";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Download from "../../Components/MainPage/Download/Download";
// import CreateProject from "./CreateProject";
import Github from "../../Components/MainPage/Create Project/Github/Github";
import ProjectCreation from "../../Components/MainPage/Create Project/ProjectCreation/ProjectCreation";
import "./MainPage.css";
import SubTasksScreen from "../../Components/MainPage/SubTasks/SubTasksScreen";
function MainPage() {
  return (
    <Router>
      <div>
        <HeaderMain />
        <SideBarMain />
        <Switch>
          <div className="MainPage">
            <Route path="/Dashboard" exact>
              <Dashboard />
            </Route>
            <Route path="/Downloads" exact>
              <Download />
            </Route>
            <Route path="/CreateProject" exact component={ProjectCreation} />
            <Route path="/Github" exact component={Github} />
            <Route path="/SubTask" exact component={SubTasksScreen} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default MainPage;
