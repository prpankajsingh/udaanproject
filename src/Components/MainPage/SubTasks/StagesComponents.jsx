import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./SubTaskScreen.css";
function StagesComponents() {
  return (
    <div className="StagesComponents">
      <p className="StagesComponents_sub1">Stage 1</p>
      <p className="StagesComponents_sub2">Translation</p>
      <ProgressBar
        baseBgColor="#E4E4E4"
        bgColor="#fb5517"
        height="15px"
        completed={60}
      />
    </div>
  );
}

export default StagesComponents;
