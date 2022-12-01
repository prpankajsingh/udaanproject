import React from "react";
import "./Video.css";
import { useTranslation } from "react-i18next";
import YoutubeEmbed from "./YoutubeEmbed";
function Video() {
  const { t } = useTranslation();
  return (
    <div className="video">
      <div className="videocontainer">
        <div className="videobox">
          <YoutubeEmbed embedId="kvKNel-xYTY" />
        </div>
        <div className="videocontent">
          <p className="video_heading">{t("video_title")}</p>
          <p className="video_subheading">{t("video_subheading")}</p>
          <p className="video_description">{t("video_description")}</p>
          <div className="video_buttons">
            <button
              onClick={() => {
                window.open(
                  "https://drive.google.com/drive/folders/1hCsvtcDMfgO_au8EAU5PPrPI5FbqgUME",
                  "_blank"
                );
              }}
              className="video_button1"
            >
              {t("video_button1")}
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://www.youtube.com/playlist?list=PLfL0bubCSMdzHx117x6c4mdi47ZjkTz7H",
                  "_blank"
                );
              }}
              className="video_button2"
            >
              {t("video_button2")}
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://arxiv.org/pdf/2203.01644",
                  "_blank"
                );
              }}
              className="video_button2"
            >
              {t("Read Paper")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
