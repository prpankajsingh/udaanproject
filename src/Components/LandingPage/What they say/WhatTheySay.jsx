import React from "react";
import { useTranslation } from "react-i18next";
import "./WhatTheySay.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import img1 from "../../../Images/What They Say/1.png";
import img2 from "../../../Images/What They Say/2.jpg";
import img3 from "../../../Images/What They Say/3.jpg";
SwiperCore.use([Autoplay, Navigation, Pagination]);
function WhatTheySay() {
  const { t } = useTranslation();
  return (
    <div className="WhatTheySay">
      <p className="whattheysay_title">{t("whattheysay_title")}</p>
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={50}
        navigation={true}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div className="whattheysay_slider">
            <div className="whattheysay_slider_left">
              <img src={img1} alt="img1" />
            </div>
            <div className="whattheysay_slider_right">
              <p className="whattheysay_item_title">
                {t("whattheysay_item1_title")}
              </p>
              <p className="whattheysay_subtitle">
                {t("whattheysay_item1_subtitle")}
              </p>
              <p className="whattheysay_description">
                "{t("whattheysay_item1_description")}"
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="whattheysay_slider">
            <div className="whattheysay_slider_left">
              <img src={img2} alt="img2" />
            </div>
            <div className="whattheysay_slider_right">
              <p className="whattheysay_item_title">
                {t("whattheysay_item2_title")}
              </p>
              <p className="whattheysay_subtitle">
                {t("whattheysay_item2_subtitle")}
              </p>
              <p className="whattheysay_description">
                "{t("whattheysay_item2_description")}"
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="whattheysay_slider">
            <div className="whattheysay_slider_left">
              <img src={img3} alt="img3" />
            </div>
            <div className="whattheysay_slider_right">
              <p className="whattheysay_item_title">
                {t("whattheysay_item3_title")}
              </p>
              <p className="whattheysay_subtitle">
                {t("whattheysay_item3_subtitle")}
              </p>
              <p className="whattheysay_description">
                "{t("whattheysay_item3_description")}"
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default WhatTheySay;
