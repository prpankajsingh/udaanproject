import React from "react";
import { useTranslation } from "react-i18next";
import "./LandingModal.css";
function PublicationModal() {
  const { t } = useTranslation();
  return (
    <div className="LandingModal">
      <div
        className="LandingModalBack"
        onClick={() => {
          window.location = "/";
        }}
      >
        Go Back
      </div>
      <div className="LandingModalContainer">
        <p className="landingModalTitle">
          {t("landing_modal_publication_name")}
        </p>
        <p className="landingModalDescription">
          {t("landing_modal_publication")}
        </p>
      </div>
    </div>
  );
}

export default PublicationModal;
