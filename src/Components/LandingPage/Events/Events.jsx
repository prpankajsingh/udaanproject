import React from "react";
import "./Events.css";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Navigation } from "swiper";
import "swiper/components/navigation/navigation.scss";
import img1 from "../../../Images/Events/1.png";
import YoutubeEmbed from "../Video Section/YoutubeEmbed";
SwiperCore.use([Navigation]);
function Events() {
  const { t } = useTranslation();
  return (
    <div className="Events">
      <div>
        <p className="event_title">{t("event_title")}</p>
        <Swiper navigation>
          <SwiperSlide>
            <div className="events_slider">
              <div className="events_left">
                <p className="events_project_title">
                  {t("events_project1_title")}
                </p>
                <p className="events_project_description">
                  {t("events_project1_description")}
                </p>
              </div>
              <div className="events_right">
                <YoutubeEmbed embedId="R9fLAgkUGH8" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Events;
