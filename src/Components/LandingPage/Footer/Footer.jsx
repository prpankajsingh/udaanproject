import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
function Footer() {
  const { t } = useTranslation();
  return (
    <div className="Footer">
      <div className="footertop">
        <div className="footertopleft">
          <div className="footertopleftsection1">
            {/* <p className="footertopleftsection1heading">
              {t("footer_left_section1_heading")}
            </p>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              className="active navItems"
              to="About"
            >
              <p className="footertopleftsection1item">
                {t("footer_left_section1_item1")}
              </p>
            </Link>
            <Link to="Team" spy={true} smooth={true} className="navItems">
              <p className="footertopleftsection1item">
                {t("footer_left_section1_item2")}
              </p>
            </Link>
            <Link to="Projects" spy={true} smooth={true} className="navItems">
              <p className="footertopleftsection1item">
                {t("footer_left_section1_item3")}
              </p>
            </Link>
            <Link
              to="Publications"
              spy={true}
              smooth={true}
              className="navItems"
            >
              <p className="footertopleftsection1item">
                {t("footer_left_section1_item4")}
              </p>
            </Link> */}
            <div className="footertopleftsection1bottom">
              <p className="footertopleftseaction1bottom">
                {t("footer_left_section1_footer1")}
              </p>
              <p className="footertopleftseaction1bottom2">
                {t("footer_left_section1_footer2")}
              </p>
            </div>
          </div>
          {/* <div className="footertopleftsection2">
            <p className="footertopleftsection2heading">
              {t("footer_left_section2_heading")}
            </p>
            <Link to="Contact" spy={true} smooth={true} className="navItems">
              <p className="footertopleftsection2item">
                {t("footer_left_section2_item1")}
              </p>
            </Link>
            <Link to="Donate" spy={true} smooth={true} className="navItems">
              <p className="footertopleftsection2item">
                {t("footer_left_section2_item2")}
              </p>
            </Link>
          </div> */}
        </div>
        <div className="footertopright">
          <div className="footertoprightbox1">
            <p className="footertoprightheading">
              {t("footer_right_section1_heading")}
            </p>
            <div className="footertoprightbox1item">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 16.0793C20.011 16.0797 19.0444 16.3709 18.2223 16.9162C17.4002 17.4614 16.7596 18.2362 16.3814 19.1427C16.0032 20.0491 15.9044 21.0463 16.0976 22.0084C16.2907 22.9705 16.7671 23.8542 17.4666 24.5477C18.166 25.2412 19.057 25.7135 20.027 25.9047C20.997 26.0959 22.0023 25.9976 22.916 25.6221C23.8296 25.2466 24.6105 24.6109 25.1599 23.7952C25.7093 22.9795 26.0025 22.0206 26.0025 21.0396C26.0015 19.724 25.4741 18.4626 24.5361 17.5326C23.5981 16.6025 22.3263 16.0798 21 16.0793ZM32.6916 12.2666C32.437 11.6266 32.0526 11.0454 31.5621 10.5589C31.0717 10.0725 30.4858 9.69113 29.8406 9.43861C27.8719 8.6677 23.1844 8.84066 21 8.84066C18.8156 8.84066 14.1328 8.66119 12.1584 9.43861C11.5133 9.69113 10.9273 10.0725 10.4369 10.5589C9.94649 11.0454 9.56207 11.6266 9.3075 12.2666C8.53125 14.2194 8.70469 18.8738 8.70469 21.0387C8.70469 23.2036 8.53125 27.8523 9.31125 29.8117C9.56582 30.4516 9.95024 31.0329 10.4407 31.5193C10.9311 32.0058 11.517 32.3871 12.1622 32.6396C14.1309 33.4105 18.8184 33.2376 21.0037 33.2376C23.1891 33.2376 27.87 33.4171 29.8444 32.6396C30.4895 32.3871 31.0755 32.0058 31.5659 31.5193C32.0563 31.0329 32.4407 30.4516 32.6953 29.8117C33.4781 27.8588 33.2981 23.2045 33.2981 21.0396C33.2981 18.8747 33.4781 14.2269 32.6953 12.2675L32.6916 12.2666ZM21 28.6651C19.4796 28.6651 17.9933 28.2178 16.7291 27.3799C15.4649 26.542 14.4795 25.3511 13.8977 23.9577C13.3158 22.5644 13.1636 21.0311 13.4602 19.5519C13.7568 18.0727 14.489 16.714 15.5641 15.6476C16.6392 14.5811 18.009 13.8548 19.5002 13.5606C20.9915 13.2664 22.5372 13.4174 23.9419 13.9946C25.3466 14.5717 26.5472 15.5491 27.3919 16.8031C28.2366 18.0571 28.6875 19.5314 28.6875 21.0396C28.6887 22.0413 28.4907 23.0335 28.1048 23.9592C27.7189 24.8849 27.1527 25.726 26.4386 26.4343C25.7245 27.1427 24.8766 27.7043 23.9433 28.0871C23.0101 28.4699 22.0099 28.6663 21 28.6651ZM29.0044 14.8741C28.6494 14.8743 28.3024 14.77 28.0072 14.5746C27.712 14.3791 27.4819 14.1012 27.3459 13.776C27.21 13.4508 27.1743 13.0929 27.2434 12.7475C27.3126 12.4022 27.4834 12.085 27.7343 11.8359C27.9852 11.5869 28.3049 11.4173 28.653 11.3486C29.0011 11.2798 29.362 11.315 29.6899 11.4497C30.0178 11.5844 30.2981 11.8125 30.4953 12.1052C30.6926 12.398 30.7978 12.7421 30.7978 13.0942C30.7988 13.328 30.7532 13.5597 30.6638 13.776C30.5743 13.9923 30.4426 14.1889 30.2763 14.3546C30.1101 14.5203 29.9124 14.6519 29.6948 14.7416C29.4772 14.8314 29.2438 14.8777 29.0081 14.8778L29.0044 14.8741ZM37.5 0.208984H4.5C3.30653 0.208984 2.16193 0.679266 1.31802 1.51637C0.474106 2.35348 0 3.48884 0 4.67268L0 37.4065C0 38.5903 0.474106 39.7257 1.31802 40.5628C2.16193 41.3999 3.30653 41.8702 4.5 41.8702H37.5C38.6935 41.8702 39.8381 41.3999 40.682 40.5628C41.5259 39.7257 42 38.5903 42 37.4065V4.67268C42 3.48884 41.5259 2.35348 40.682 1.51637C39.8381 0.679266 38.6935 0.208984 37.5 0.208984ZM35.895 27.1772C35.7741 29.5606 35.2256 31.6725 33.4716 33.4078C31.7175 35.143 29.5903 35.6982 27.1903 35.8116C24.7144 35.9502 17.2913 35.9502 14.8153 35.8116C12.4125 35.6917 10.2909 35.1467 8.53406 33.4078C6.77719 31.6688 6.225 29.556 6.11063 27.1772C5.97094 24.7203 5.97094 17.3561 6.11063 14.902C6.23156 12.5186 6.77344 10.4067 8.53406 8.67142C10.2947 6.93615 12.4219 6.38749 14.8153 6.27404C17.2913 6.13548 24.7144 6.13548 27.1903 6.27404C29.5931 6.394 31.7213 6.93894 33.4716 8.67793C35.2219 10.4169 35.7806 12.5297 35.895 14.9132C36.0347 17.3608 36.0347 24.7184 35.895 27.1772Z"
                  fill="#DFDFDF"
                />
              </svg>
              <svg
                width="40"
                height="42"
                viewBox="0 0 40 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.0325 0.208984H1.58469C0.708158 0.208984 0 0.953678 0 1.87543V40.2037C0 41.1255 0.708158 41.8702 1.58469 41.8702H38.0325C38.9091 41.8702 39.6172 41.1255 39.6172 40.2037V1.87543C39.6172 0.953678 38.9091 0.208984 38.0325 0.208984ZM33.4567 12.3688H30.2923C27.8113 12.3688 27.3309 13.6083 27.3309 15.4309V19.446H33.2537L32.4812 25.7317H27.3309V41.8702H21.1556V25.7369H15.9905V19.446H21.1556V14.8112C21.1556 9.43173 24.2804 6.49983 28.8463 6.49983C31.0351 6.49983 32.912 6.67168 33.4617 6.74979V12.3688H33.4567Z"
                  fill="#DFDFDF"
                />
              </svg>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.4322 0.208984H4.49186C2.01198 0.208984 0 2.20835 0 4.67268V37.4065C0 39.8708 2.01198 41.8702 4.49186 41.8702H37.4322C39.9121 41.8702 41.924 39.8708 41.924 37.4065V4.67268C41.924 2.20835 39.9121 0.208984 37.4322 0.208984ZM32.8561 14.9764C32.8748 15.2368 32.8748 15.5065 32.8748 15.7668C32.8748 23.8294 26.6985 33.1195 15.4127 33.1195C11.9315 33.1195 8.70298 32.1151 5.98915 30.3855C6.48513 30.4413 6.96239 30.4599 7.46772 30.4599C10.3406 30.4599 12.9796 29.4927 15.0852 27.856C12.3901 27.8002 10.1254 26.0426 9.34869 23.6248C10.2939 23.7643 11.1454 23.7643 12.1187 23.5132C9.31126 22.946 7.2057 20.4909 7.2057 17.5244V17.45C8.01985 17.9057 8.97437 18.1847 9.97568 18.2219C9.13385 17.6654 8.44375 16.9105 7.96695 16.0246C7.49014 15.1386 7.24147 14.1491 7.24313 13.1444C7.24313 12.0099 7.54259 10.9684 8.07599 10.0663C11.0986 13.7675 15.6373 16.1853 20.7281 16.4457C19.8578 12.3075 22.974 8.9504 26.7172 8.9504C28.4859 8.9504 30.0768 9.68505 31.1997 10.8754C32.5847 10.615 33.9136 10.1035 35.0927 9.40607C34.6341 10.8196 33.6703 12.0099 32.3976 12.7631C33.6328 12.6329 34.8307 12.2889 35.9349 11.8146C35.102 13.0328 34.0539 14.1116 32.8561 14.9764Z"
                  fill="#DFDFDF"
                />
              </svg>
              <svg
                onClick={() => {
                  window.open(
                    "https://www.youtube.com/channel/UClfK7iC8J7b22bj3GwAUaCw",
                    "_blank"
                  );
                }}
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.441 16.0272L26.3296 21.0582L17.441 26.0891V16.0272ZM41.8286 4.67268V37.4065C41.8286 39.8708 39.8212 41.8702 37.3469 41.8702H4.48163C2.0074 41.8702 0 39.8708 0 37.4065V4.67268C0 2.20835 2.0074 0.208984 4.48163 0.208984H37.3469C39.8212 0.208984 41.8286 2.20835 41.8286 4.67268ZM37.9071 21.0675C37.9071 21.0675 37.9071 15.5251 37.1976 12.8654C36.8054 11.3961 35.657 10.243 34.1911 9.85244C31.5488 9.13638 20.9143 9.13638 20.9143 9.13638C20.9143 9.13638 10.2797 9.13638 7.63745 9.85244C6.17158 10.243 5.02316 11.3961 4.63102 12.8654C3.92143 15.5158 3.92143 21.0675 3.92143 21.0675C3.92143 21.0675 3.92143 26.6099 4.63102 29.2695C5.02316 30.7388 6.17158 31.8455 7.63745 32.236C10.2797 32.9428 20.9143 32.9428 20.9143 32.9428C20.9143 32.9428 31.5488 32.9428 34.1911 32.2267C35.657 31.8362 36.8054 30.7295 37.1976 29.2602C37.9071 26.6099 37.9071 21.0675 37.9071 21.0675Z"
                  fill="#DFDFDF"
                />
              </svg>
            </div>
          </div>
          <div className="footertoprightbox2">
            <p>{t("footer_right_section2_bottom1")}</p>
            <a href="https://acr.iitb.ac.in/donation/" target="_blank" rel="noreferrer">
              <p className="footertoprightbox2specialcolor">
                {t("footer_right_section2_bottom2")}
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="footerbottom">
        <p className="footerbottomtext">{t("footer_bottom1")}</p>
        <p className="footerbottomtext">{t("footer_bottom2")}</p>
      </div>
    </div>
  );
}

export default Footer;