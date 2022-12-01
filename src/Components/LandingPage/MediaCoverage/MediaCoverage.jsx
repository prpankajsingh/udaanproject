import React from "react";
import "../News Section All/NewsPage.css";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";

function MediaCoverage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="newspage">
        <p className="newspage_title">{t("media_coverage_title")}</p>
        <div>
          <a
            href="https://www.youtube.com/watch?v=GZAo63hWbR8"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card media_coverage_card">
              <img src="https://raw.githubusercontent.com/prpankajsingh/udaanproject/main/assets/img/media/media6.jpg" alt="news1" />
              <span><strong>{t("media_coverage1_heading")}</strong></span>
              <p className="newspage_description">{t("media_coverage1")}</p>
            </div>
          </a>
          <a
            href="https://twitter.com/dpradhanbjp/status/1554501943086592002"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card media_coverage_card">
              <img src="https://raw.githubusercontent.com/prpankajsingh/udaanproject/main/assets/img/media/media3.jpeg" alt="news2" />
              <span><strong>{t("media_coverage2_heading")}</strong></span>
              <p className="newspage_description">{t("media_coverage2")}</p>
            </div>
          </a>
          <a
            href="https://twitter.com/Rajeev_GoI/status/1554712901562531840"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card media_coverage_card">
              <img src="https://raw.githubusercontent.com/prpankajsingh/udaanproject/main/assets/img/media/media4.jpeg" alt="news3" />
              <span><strong>{t("media_coverage3_heading")}</strong></span>
              <p className="newspage_description">{t("media_coverage3")}</p>
            </div>
          </a>
          <a
            href="https://twitter.com/ChamuKShastry/status/1558257925482614784"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card media_coverage_card">
              <img src="https://raw.githubusercontent.com/prpankajsingh/udaanproject/main/assets/img/media/media5.jpeg" alt="news4" />
              <span><strong>{t("media_coverage4_heading")}</strong></span>
              <p className="newspage_description">{t("media_coverage4")}</p>
            </div>
          </a>
          <a
            href="https://pib.gov.in/PressReleasePage.aspx?PRID=1754787"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card media_coverage_card">
              {/* <img src="" alt="news5" /> */}
              <span><strong>{t("media_coverage5_heading")}</strong></span>
              <p className="newspage_description">{t("media_coverage5")}</p>
            </div>
          </a>
          <a
            href="https://timesofindia.indiatimes.com/education/news/a-project-to-translate-engineering-books-into-hindi-vernacular-languages/articleshow/86199294.cms"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card media_coverage_card">
              {/* <img src="" alt="news6" /> */}
              <span><strong>{t("media_coverage6_heading")}</strong></span>
              <p className="newspage_description">{t("media_coverage6")}</p>
            </div>
          </a>
          <a
            href="https://timesofindia.indiatimes.com/india/artificial-intelligence-breaks-language-barrier-for-tech-edu/articleshow/86218960.cms"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card media_coverage_card">
              {/* <img src="" alt="news6" /> */}
              <span><strong>{t("media_coverage7_heading")}</strong></span>
              <p className="newspage_description">{t("media_coverage7")}</p>
            </div>
          </a>
          <a
            href="https://twitter.com/iitbombay/status/1437710781890453516"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card media_coverage_card">
              <img src="https://raw.githubusercontent.com/prpankajsingh/udaanproject/main/assets/img/media/media1.jpg" alt="news6" />
              <span><strong>{t("media_coverage8_heading")}</strong></span>
              <p className="newspage_description">{t("media_coverage8")}</p>
            </div>
          </a>
          <a
            href="https://www.iitb.ac.in/en/breaking-news/iit-bombay-professor-and-his-team-launch-%E2%80%98project-udaan%E2%80%99-ai-based-translation-software"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card media_coverage_card">
              {/* <img src="" alt="news6" /> */}
              <span><strong>{t("media_coverage9_heading")}</strong></span>
              <p className="newspage_description">{t("media_coverage9")}</p>
            </div>
          </a>
          <a
            href="https://www.youtube.com/watch?v=vroRNncHJw8"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card media_coverage_card">
              <img src="https://raw.githubusercontent.com/prpankajsingh/udaanproject/main/assets/img/media/media2.jpg" alt="news6" />
              <span><strong>{t("media_coverage10_heading")}</strong></span>
              <p className="newspage_description">{t("media_coverage10")}</p>
            </div>
          </a>
        </div>
      </div>
      <div className="news_section_right_box media_coverage_section_right_box">
        <div className="news_section_right_box_left">
          <p
            onClick={() => {
              window.open("https://docs.google.com/document/d/1A07SGO0HG1kE0zpunkVu4nOLyhH2xQsS0LDqHV3IZco/edit", "_blank");
            }}
            className="news_section_read_all"
          >
            {t("More Press Coverage --->")}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MediaCoverage;
