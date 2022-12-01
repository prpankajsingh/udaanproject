import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Download.css";
function Download() {
  const [ALLpost, setALLPost] = useState([]);
  const [latest, setlatest] = useState([]);
  useEffect(() => {
    //allreleases
    axios
      .get(
        "https://api.github.com/repos/IITB-OpenOCRCorrect/iitb-openocr-digit-tool/releases"
      )
      .then((response) => {
        setALLPost(response.data);
      });
    //latestreleases
    axios
      .get(
        "https://api.github.com/repos/IITB-OpenOCRCorrect/iitb-openocr-digit-tool/releases/latest"
      )
      .then((response) => {
        setlatest(response.data);
      });
  }, []);
  const { t } = useTranslation();
  return (
    <div className="download">
      {console.log(ALLpost)}
      <div className="downloadgrid1">
        <p className="downloadgridlatest">*{t("download_latest")}</p>

        <p className="downloadgridversion">{latest.name}</p>
        <div className="downloadgridbuttonbox">
          <button
            onClick={() => {
              window.location = latest.zipball_url;
            }}
          >
            Download
          </button>
          <a href={latest.html_url} target="_blank" rel="noreferrer">
              <button>Github</button>
            </a>
        </div>
      </div>
      {ALLpost.map((data) => (
        <div className="downloadgrid">
          <p className="downloadgridversion">{data.name}</p>
          <div className="downloadgridbuttonbox">
            <button
              onClick={() => {
                window.location = latest.zipball_url;
              }}
            >
              Download
            </button>
            <a href={latest.html_url} target="_blank" rel="noreferrer">
              <button>Github</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Download;
