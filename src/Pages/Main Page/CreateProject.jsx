import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Github from "../../Components/MainPage/Create Project/Github/Github";
import ProjectCreation from "../../Components/MainPage/Create Project/ProjectCreation/ProjectCreation";
function CreateProject() {
  return (
    <Router>
      <div className="CreateProject">
        <Switch>
          <Route path="/CreateProject" exact component={ProjectCreation} />
          <Route path="/Github" exact component={Github} />
        </Switch>
      </div>
    </Router>
  );
}

export default CreateProject;
