import React from "react";
import { useTranslation } from "react-i18next";
import "./Dashboard.css";
function Dashboard() {
  const { t } = useTranslation();
  return (
    <div className="dashboard">
      <p> {t("dashboard_junk")} </p>
    </div>
  );
}

export default Dashboard;
