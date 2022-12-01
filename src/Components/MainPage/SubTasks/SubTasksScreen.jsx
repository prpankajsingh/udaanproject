import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./SubTaskScreen.css";
import SubTaskProject from "./SubTasksProjects";
import SubTaskTeam from "./SubTaskTeam";
function SubTasksScreen() {
  const { t } = useTranslation();
  const [buttontoggle, setbuttontoggle] = useState(false);
  return (
    <div>
      <div className="SubTaskTopButtons">
        <div
          className={
            buttontoggle ? "Subtask_button1" : "Subtask_button1 active"
          }
          onClick={() => {
            setbuttontoggle(false);
          }}
        >
          {t("Subtask_button1")}
        </div>
        <div
          className={
            buttontoggle ? "Subtask_button1 active" : "Subtask_button1 "
          }
          onClick={() => {
            setbuttontoggle(true);
          }}
        >
          {t("Subtask_button2")}
        </div>
      </div>
      {buttontoggle ? <SubTaskTeam /> : <SubTaskProject />}
    </div>
  );
}

export default SubTasksScreen;
