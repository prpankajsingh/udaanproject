import React from "react";
import "./Teams.css";
import { useTranslation } from "react-i18next";
import Media from "react-media";
import Technical1 from "../../../Images/Technical/1.png";
import Technical2 from "../../../Images/Technical/2.png";
import Technical3 from "../../../Images/Technical/3.png";
import Technical4 from "../../../Images/Technical/4.png";
import Student1 from "../../../Images/Students/1.png";
import Student2 from "../../../Images/Students/2.png";
import Student3 from "../../../Images/Students/3.png";
import Student4 from "../../../Images/Students/4.png";
import Student5 from "../../../Images/Students/5.png";
import Student6 from "../../../Images/Students/6.png";
import Student7 from "../../../Images/Students/7.png";
import Student8 from "../../../Images/Students/8.png";
import Intern1 from "../../../Images/Intern/1.png";
import Intern2 from "../../../Images/Intern/2.png";
import Intern4 from "../../../Images/Intern/4.png";
import Intern5 from "../../../Images/Intern/5.png";
import Intern6 from "../../../Images/Intern/6.png";
import Publisher1 from "../../../Images/Publisher/1.png";
import Publisher2 from "../../../Images/Publisher/2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Navigation } from "swiper";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation]);

function Teams() {
  const { t } = useTranslation();
  return (
    <div className="teams" id="Team">
      <p className="team_title">{t("team_title")}</p>
      <div className="technical_container">
        <p className="technical_title">{t("team_technical_title")}</p>
        <Media query={{ maxWidth: 800 }}>
          {(matches) =>
            matches ? (
              <>
                <Swiper pagination navigation slidesPerView={1}>
                  <SwiperSlide>
                    <div className="teams_swiper">
                      <a
                        href="https://www.cse.iitb.ac.in/~ganesh/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="technical_grid_card">
                          <img src={Technical1} alt="technical1" />
                          <p className="technical_name">
                            {t("team_technical_name1")}
                          </p>
                          <p className="technical_description">
                            {t("team_technical_description1")}
                          </p>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="https://www.linkedin.com/in/pankaj-singh-b000894a/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="technical_grid_card">
                        <img src={Technical2} alt="technical2" />
                        <p className="technical_name">
                          {t("team_technical_name2")}
                        </p>
                        <p className="technical_description">
                          {t("team_technical_description2")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="https://www.cse.iitb.ac.in/~ayusham/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="technical_grid_card">
                        <img src={Technical3} alt="technical3" />
                        <p className="technical_name">
                          {t("team_technical_name3")}
                        </p>
                        <p className="technical_description">
                          {t("team_technical_description3")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#0" target="_blank" rel="noreferrer">
                      <div
                        onClick={() => {
                          window.open("/GaneshArnaal", "_blank");
                        }}
                        className="technical_grid_card"
                      >
                        <img src={Technical4} alt="technical4" />
                        <p className="technical_name">
                          {t("team_technical_name4")}
                        </p>
                        <p className="technical_description">
                          {t("team_technical_description4")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                </Swiper>
              </>
            ) : (
              <>
                <div className="technical_grid">
                  <a href="https://www.cse.iitb.ac.in/~ganesh/" target="_blank" rel="noreferrer">
                    <div className="technical_grid_card">
                      <img src={Technical1} alt="technical1" />
                      <p className="technical_name">
                        {t("team_technical_name1")}
                      </p>
                      <p className="technical_description">
                        {t("team_technical_description1")}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pankaj-singh-b000894a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="technical_grid_card">
                      <img src={Technical2} alt="technical2" />
                      <p className="technical_name">
                        {t("team_technical_name2")}
                      </p>
                      <p className="technical_description">
                        {t("team_technical_description2")}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.cse.iitb.ac.in/~ayusham/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="technical_grid_card">
                      <img src={Technical3} alt="technical3" />
                      <p className="technical_name">
                        {t("team_technical_name3")}
                      </p>
                      <p className="technical_description">
                        {t("team_technical_description3")}
                      </p>
                    </div>
                  </a>
                  <a href="#0" target="_blank" rel="noreferrer">
                    <div
                      onClick={() => {
                        window.open("/GaneshArnaal", "_blank");
                      }}
                      className="technical_grid_card"
                    >
                      <img src={Technical4} alt="technical4" />
                      <p className="technical_name">
                        {t("team_technical_name4")}
                      </p>
                      <p className="technical_description">
                        {t("team_technical_description4")}
                      </p>
                    </div>
                  </a>
                </div>
              </>
            )
          }
        </Media>
      </div>

      <div className="students_container">
        <p className="students_title">{t("team_student_title")}</p>
        <Media query={{ maxWidth: 800 }}>
          {(matches) =>
            matches ? (
              <>
                <Swiper pagination navigation slidesPerView={1}>
                  <SwiperSlide>
                    <a
                      href="https://www.cse.iitb.ac.in/~piyusharma/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="students_grid_card">
                        <img src={Student1} alt="Student1" />
                        <p className="students_name">
                          {t("team_student_name1")}
                        </p>
                        <p className="students_description">
                          {t("team_student_description1")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="https://www.cse.iitb.ac.in/~iishapandey/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="students_grid_card">
                        <img src={Student2} alt="Student2" />
                        <p className="students_name">
                          {t("team_student_name2")}
                        </p>
                        <p className="students_description">
                          {t("team_student_description2")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="https://www.linkedin.com/in/souvik-pal-75b1b1178/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="students_grid_card">
                        <img src={Student3} alt="Student3" />
                        <p className="students_name">
                          {t("team_student_name3")}
                        </p>
                        <p className="students_description">
                          {t("team_student_description3")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="https://www.cse.iitb.ac.in/~vineethdorna/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="students_grid_card">
                        <img src={Student4} alt="Student4" />
                        <p className="students_name">
                          {t("team_student_name4")}
                        </p>
                        <p className="students_description">
                          {t("team_student_description4")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="https://www.cse.iitb.ac.in/~arjunk/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="students_grid_card">
                        <img src={Student5} alt="Student5" />
                        <p className="students_name">
                          {t("team_student_name5")}
                        </p>
                        <p className="students_description">
                          {t("team_student_description5")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="https://www.cse.iitb.ac.in/~harshadingole/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="students_grid_card">
                        <img src={Student6} alt="Student6" />
                        <p className="students_name">
                          {t("team_student_name6")}
                        </p>
                        <p className="students_description">
                          {t("team_student_description6")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="https://www.cse.iitb.ac.in/~kkbhatt/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="students_grid_card">
                        <img src={Student7} alt="Student7" />
                        <p className="students_name">
                          {t("team_student_name7")}
                        </p>
                        <p className="students_description">
                          {t("team_student_description7")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="https://www.linkedin.com/in/ajay-r-376673132"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="students_grid_card">
                        <img src={Student8} alt="Student8" />
                        <p className="students_name">
                          {t("team_student_name8")}
                        </p>
                        <p className="students_description">
                          {t("team_student_description8")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                </Swiper>
              </>
            ) : (
              <>
                <div className="students_grid">
                  <a
                    href="https://www.cse.iitb.ac.in/~piyusharma/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="students_grid_card">
                      <img src={Student1} alt="Student1" />
                      <p className="students_name">{t("team_student_name1")}</p>
                      <p className="students_description">
                        {t("team_student_description1")}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.cse.iitb.ac.in/~iishapandey/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="students_grid_card">
                      <img src={Student2} alt="Student2" />
                      <p className="students_name">{t("team_student_name2")}</p>
                      <p className="students_description">
                        {t("team_student_description2")}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/souvik-pal-75b1b1178/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="students_grid_card">
                      <img src={Student3} alt="Student3" />
                      <p className="students_name">{t("team_student_name3")}</p>
                      <p className="students_description">
                        {t("team_student_description3")}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.cse.iitb.ac.in/~vineethdorna/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="students_grid_card">
                      <img src={Student4} alt="Student4" />
                      <p className="students_name">{t("team_student_name4")}</p>
                      <p className="students_description">
                        {t("team_student_description4")}
                      </p>
                    </div>
                  </a>
                  <a href="https://www.cse.iitb.ac.in/~arjunk/" target="_blank" rel="noreferrer">
                    <div className="students_grid_card">
                      <img src={Student5} alt="Student5" />
                      <p className="students_name">{t("team_student_name5")}</p>
                      <p className="students_description">
                        {t("team_student_description5")}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.cse.iitb.ac.in/~harshadingole/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="students_grid_card">
                      <img src={Student6} alt="Student6" />
                      <p className="students_name">{t("team_student_name6")}</p>
                      <p className="students_description">
                        {t("team_student_description6")}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.cse.iitb.ac.in/~kkbhatt/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="students_grid_card">
                      <img src={Student7} alt="Student7" />
                      <p className="students_name">{t("team_student_name7")}</p>
                      <p className="students_description">
                        {t("team_student_description7")}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ajay-r-376673132"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="students_grid_card">
                      <img src={Student8} alt="Student8" />
                      <p className="students_name">{t("team_student_name8")}</p>
                      <p className="students_description">
                        {t("team_student_description8")}
                      </p>
                    </div>
                  </a>
                </div>
              </>
            )
          }
        </Media>
      </div>

      <div className="intern_container">
        <p className="intern_title">{t("team_intern_title")}</p>
        <Media query={{ maxWidth: 800 }}>
          {(matches) =>
            matches ? (
              <>
                <Swiper pagination navigation slidesPerView={1}>
                  <SwiperSlide>
                    <a
                      href="https://www.linkedin.com/in/ashish-patil-ab2879192/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="intern_grid_card">
                        <img src={Intern1} alt="Intern1" />
                        <p className="intern_name">{t("team_intern_name1")}</p>
                        <p className="intern_description">
                          {t("team_intern_description1")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="https://yash-kadam-portfolio.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="intern_grid_card">
                        <img src={Intern2} alt="Intern2" />
                        <p className="intern_name">{t("team_intern_name2")}</p>
                        <p className="intern_description">
                          {t("team_intern_description2")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>

                  <SwiperSlide>
                    <a
                      href="https://www.linkedin.com/in/akanksha-mategaonkar-aa1a361b4/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="intern_grid_card">
                        <img src={Intern4} alt="Intern4" />
                        <p className="intern_name">{t("team_intern_name4")}</p>
                        <p className="intern_description">
                          {t("team_intern_description4")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="https://www.linkedin.com/in/akshitashivanisundar"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="intern_grid_card">
                        <img src={Intern5} alt="Intern5" />
                        <p className="intern_name">{t("team_intern_name5")}</p>
                        <p className="intern_description">
                          {t("team_intern_description5")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="https://www.linkedin.com/in/harsh-mishra-821116129/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="intern_grid_card">
                        <img src={Intern6} alt="Intern6" />
                        <p className="intern_name">{t("team_intern_name6")}</p>
                        <p className="intern_description">
                          {t("team_intern_description6")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                </Swiper>
              </>
            ) : (
              <>
                <div className="intern_grid">
                  <a
                    href="https://www.linkedin.com/in/sanskar-sehgal/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="intern_grid_card">
                      <img src={Intern1} alt="Intern1" />
                      <p className="intern_name">{t("team_intern_name1")}</p>
                      <p className="intern_description">
                        {t("team_intern_description1")}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://yash-kadam-portfolio.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="intern_grid_card">
                      <img src={Intern2} alt="Intern2" />
                      <p className="intern_name">{t("team_intern_name2")}</p>
                      <p className="intern_description">
                        {t("team_intern_description2")}
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/akanksha-mategaonkar-aa1a361b4/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="intern_grid_card">
                      <img src={Intern4} alt="Intern4" />
                      <p className="intern_name">{t("team_intern_name4")}</p>
                      <p className="intern_description">
                        {t("team_intern_description4")}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/akshitashivanisundar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="intern_grid_card">
                      <img src={Intern5} alt="Intern5" />
                      <p className="intern_name">{t("team_intern_name5")}</p>
                      <p className="intern_description">
                        {t("team_intern_description5")}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/harsh-mishra-821116129/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="intern_grid_card">
                      <img
                        className="team_intern6"
                        src={Intern6}
                        alt="Intern6"
                      />
                      <p className="intern_name">{t("team_intern_name6")}</p>
                      <p className="intern_description">
                        {t("team_intern_description6")}
                      </p>
                    </div>
                  </a>
                </div>
              </>
            )
          }
        </Media>
      </div>

      <div className="publisher_container">
        <p className="publisher_title">{t("team_publisher_title")}</p>
        <Media query={{ maxWidth: 800 }}>
          {(matches) =>
            matches ? (
              <>
                <Swiper pagination navigation slidesPerView={1}>
                  <SwiperSlide>
                    <a
                      href="https://www.garudaprakashan.com/about-us/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="publisher_grid_card">
                        <div>
                          <img src={Publisher1} alt="Publiser1" />
                        </div>
                        <p className="publisher_name">
                          {t("team_publisher_name1")}
                        </p>
                        <p className="publisher_description">
                          {t("team_publisher_description1")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#0" target="_blank" rel="noreferrer">
                      <div
                        onClick={() => {
                          window.open("/SomayajiArnalPublication", "_blank");
                        }}
                        className="publisher_grid_card"
                      >
                        <div>
                          <img src={Publisher2} alt="Publiser2" />
                        </div>
                        <p className="publisher_name">
                          {t("team_publisher_name2")}
                        </p>
                        <p className="publisher_description">
                          {t("team_publisher_description2")}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                </Swiper>
              </>
            ) : (
              <>
                <div className="publisher_grid">
                  <a
                    href="https://www.garudaprakashan.com/about-us/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="publisher_grid_card">
                      <div>
                        <img src={Publisher1} alt="Publiser1" />
                      </div>
                      <p className="publisher_name">
                        {t("team_publisher_name1")}
                      </p>
                      <p className="publisher_description">
                        {t("team_publisher_description1")}
                      </p>
                    </div>
                  </a>
                  <a href="#0" target="_blank" rel="noreferrer">
                    <div
                      onClick={() => {
                        window.open("/SomayajiArnalPublication", "_blank");
                      }}
                      className="publisher_grid_card"
                    >
                      <img src={Publisher2} alt="Publiser2" />
                      <p className="publisher_name">
                        {t("team_publisher_name2")}
                      </p>
                      <p className="publisher_description">
                        {t("team_publisher_description2")}
                      </p>
                    </div>
                  </a>
                </div>
              </>
            )
          }
        </Media>
      </div>
    </div>
  );
}

export default Teams;
