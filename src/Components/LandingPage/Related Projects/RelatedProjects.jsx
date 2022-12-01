import React from "react";
import "./RelatedProjects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import { useTranslation } from "react-i18next";
import img1 from "../../../Images/Related Projects/1.png";
import img2 from "../../../Images/Related Projects/2.png";
import img3 from "../../../Images/Related Projects/3.png";
import img4 from "../../../Images/Related Projects/4.png";
import img5 from "../../../Images/Related Projects/5.png";
SwiperCore.use([Autoplay, Navigation, Pagination]);

function RelatedProjects() {
  const { t } = useTranslation();
  return (
    <div className="relatedProjects" id="Projects">
      <p className="relatedProjects_title">{t("related_projects_title")}</p>
      <Swiper
        autoplay={{ delay: 3000 }}
        loop={true}
        navigation={true}
        pagination={{ clickable: "true" }}
      >
        <SwiperSlide>
          <div className="relatedProjects_slider">
            <div className="relatedProjects_slider_left">
              <img src={img1} alt="img1" />
            </div>
            <div className="relatedProjects_slider_right">
              <p className="relatedProjects_slider_right_title">
                {t("related_projects_project1_title")}
              </p>
              <p className="relatedProjects_slider_right_subtitle">
                {t("related_projects_project1_subtitle")}
              </p>
              <p className="relatedProjects_slider_right_description">
                {t("related_projects_project1_description")}
              </p>
              <a href="https://www.cse.iitb.ac.in/~ocr/" target="_blank" rel="noreferrer">
                <div className="relatedProjects_slider_right_button">
                  {t("related_projects_more_info")}
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relatedProjects_slider">
            <div className="relatedProjects_slider_left">
              <img src={img2} alt="img2" />
            </div>
            <div className="relatedProjects_slider_right">
              <p className="relatedProjects_slider_right_title">
                {t("related_projects_project2_title")}
              </p>
              <p className="relatedProjects_slider_right_subtitle">
                {t("related_projects_project2_subtitle")}
              </p>
              <p className="relatedProjects_slider_right_description">
                {t("related_projects_project2_description")}
              </p>
              <a
                href="https://www.cse.iitb.ac.in/~rohitsaluja/project.html"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relatedProjects_slider_right_button">
                  {t("related_projects_more_info")}
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relatedProjects_slider">
            <div className="relatedProjects_slider_left">
              <img src={img3} alt="img3" />
            </div>
            <div className="relatedProjects_slider_right">
              <p className="relatedProjects_slider_right_title">
                {t("related_projects_project3_title")}
              </p>
              <p className="relatedProjects_slider_right_subtitle">
                {t("related_projects_project3_subtitle")}
              </p>
              <p className="relatedProjects_slider_right_description">
                {t("related_projects_project3_description")}
              </p>
              <a href="https://decile.org/" target="_blank" rel="noreferrer">
                <div className="relatedProjects_slider_right_button">
                  {t("related_projects_more_info")}
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relatedProjects_slider">
            <div className="relatedProjects_slider_left">
              <img src={img4} alt="img4" />
            </div>
            <div className="relatedProjects_slider_right">
              <p className="relatedProjects_slider_right_title">
                {t("related_projects_project4_title")}
              </p>
              <p className="relatedProjects_slider_right_subtitle">
                {t("related_projects_project4_subtitle")}
              </p>
              <p className="relatedProjects_slider_right_description">
                {t("related_projects_project4_description")}
              </p>
              <a
                href="https://www.cse.iitb.ac.in/~malta/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relatedProjects_slider_right_button">
                  {t("related_projects_more_info")}
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relatedProjects_slider">
            <div className="relatedProjects_slider_left">
              <img src={img5} alt="img5" />
            </div>
            <div className="relatedProjects_slider_right">
              <p className="relatedProjects_slider_right_title">
                {t("related_projects_project5_title")}
              </p>
              <p className="relatedProjects_slider_right_subtitle">
                {t("related_projects_project5_subtitle")}
              </p>
              <p className="relatedProjects_slider_right_description">
                {t("related_projects_project5_description")}
              </p>
              <a
                href="https://rudder-2021.github.io/about.html"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relatedProjects_slider_right_button">
                  {t("related_projects_more_info")}
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default RelatedProjects;
