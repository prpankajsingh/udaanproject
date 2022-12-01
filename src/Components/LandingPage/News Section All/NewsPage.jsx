import React from "react";
import "./NewsPage.css";
import { useTranslation } from "react-i18next";
import news1 from "../../../Images/NewsPage/1.jpg";
import news2 from "../../../Images/NewsPage/2.jpg";
import news3 from "../../../Images/NewsPage/3.jpg";
import news4 from "../../../Images/NewsPage/4.jpg";
import news5 from "../../../Images/NewsPage/5.png";
import news6 from "../../../Images/NewsPage/6.jpg";
import Footer from "../Footer/Footer";

function NewsPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="newspage">
        <p className="newspage_title">{t("newspage_title")}</p>
        <div>
          <a
            href="https://pib.gov.in/PressReleasePage.aspx?PRID=1754787"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card">
              <img src={news1} alt="news1" />
              <p className="newspage_description">{t("newspage_news1")}</p>
            </div>
          </a>
          <a
            href="https://analyticsindiamag.com/iit-bombay-launches-project-udaan-ai-based-translation-for-non-english-speakers/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card">
              <img src={news2} alt="news2" />

              <p className="newspage_description">{t("newspage_news2")}</p>
            </div>
          </a>
          <a
            href="https://ianslife.in/culture/project-translate-engineering-books-hindi-vernacular-languages"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card">
              <img src={news3} alt="news3" />

              <p className="newspage_description">{t("newspage_news3")}</p>
            </div>
          </a>
          <a
            href="https://timesofindia.indiatimes.com/home/education/news/a-project-to-translate-engineering-books-into-hindi-vernacular-languages/articleshow/86199294.cms"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card">
              <img src={news4} alt="news4" />

              <p className="newspage_description">{t("newspage_news4")}</p>
            </div>
          </a>
          <a
            href="https://www.deccanherald.com/national/west/iit-bombay-launches-ai-based-translation-project-udaan-1030309.html"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card">
              <img src={news5} alt="news5" />

              <p className="newspage_description">{t("newspage_news5")}</p>
            </div>
          </a>
          <a
            href="https://newsonair.com/2021/09/15/iit-bombay-launches-project-udaan-a-language-translator/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="newspage_card">
              <img src={news6} alt="news6" />

              <p className="newspage_description">{t("newspage_news6")}</p>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewsPage;
