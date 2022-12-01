import React from "react";
import { useTranslation } from "react-i18next";
import goal1 from "../../../Images/goal1.svg";
import goal2 from "../../../Images/goal2.svg";
import goal3 from "../../../Images/goal3.svg";
import goal4 from "../../../Images/goal4.svg";
import goal5 from "../../../Images/goal5.svg";
import goal6 from "../../../Images/goal6.svg";
import "./Goals.css";
function Goals() {
  const { t } = useTranslation();
  return (
    <div className="goals">
      <p className="goals_title">{t("goals_title")}</p>
      <div className="goals_grid">
        <div className="goal_grid_box">
          <img src={goal1} alt="Goal" />
          <p>{t("goals_description1")}</p>
        </div>
        <div className="goal_grid_box">
          <img src={goal2} alt="Goal" />
          <p>{t("goals_description2")}</p>
        </div>
        <div className="goal_grid_box">
          <img src={goal3} alt="Goal" />
          <p>{t("goals_description3")}</p>
        </div>
        <div className="goal_grid_box">
          <img src={goal4} alt="Goal" />
          <p>{t("goals_description4")}</p>
        </div>
        <div className="goal_grid_box">
          <img src={goal5} alt="Goal" />
          <p>{t("goals_description5")}</p>
        </div>
        <div className="goal_grid_box">
          <img src={goal6} alt="Goal" />
          <p>{t("goals_description6")}</p>
        </div>
      </div>
    </div>
  );
}

export default Goals;
