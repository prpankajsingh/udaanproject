import React, { useState } from "react";
import "./HeaderMain.css";
import "react-dropdown/style.css";
import Select from "react-select";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { logout } from "../../Store Features/userSlice";
import firebase from "firebase";
import logo from "../../../Images/logo.png";
const options = [
  { code: "en", value: "English", label: "English" },
  { code: "hn", value: "Hindi", label: "Hindi" },
];
function HeaderMain() {
  const [selected, setselected] = useState(null);

  const handlechange = (selected) => {
    setselected(selected);
    localStorage.setItem("language", selected.value);
    i18next.changeLanguage(selected.code);
  };
  const { t } = useTranslation();
  const defaultoptions = options[0].value;
  const customStyles = {
    menuList: (provided, state) => ({
      color: "#011633",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  const dispatch = useDispatch();
  const signout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        firebase
          .auth()
          .signOut()
          .then(() => dispatch(logout()));
      });
    window.location = "/";
    // window.close();
  };
  return (
    <div className="headerMain">
      <div className="headerMainLeft">
        <img
          onClick={() => {
            window.location = "/";
          }}
          src={logo}
          alt="logo"
          className="headerlogo"
        />
        <div className="Junk2">
          <p
            className="headerlogotext"
            onClick={() => {
              window.location = "/";
            }}
          >
            {t("logo")}
          </p>
          <p className="Junk"> An initiative of IIT Bombay</p>
        </div>
      </div>
      <div className="headerMainRight">
        <p onClick={signout}>{t("logout")}</p>
        <span>|</span>
        <Select
          styles={customStyles}
          value={selected}
          options={options}
          placeholder={localStorage.getItem("language") || "English"}
          onChange={handlechange}
        />
        <svg
          width="57"
          height="56"
          viewBox="0 0 57 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.6289 18.6665C42.6289 14.9535 41.1539 11.3925 38.5284 8.76701C35.9029 6.1415 32.3419 4.6665 28.6289 4.6665C24.9159 4.6665 21.3549 6.1415 18.7294 8.76701C16.1039 11.3925 14.6289 14.9535 14.6289 18.6665C14.6289 34.9998 7.62891 39.6665 7.62891 39.6665H49.6289C49.6289 39.6665 42.6289 34.9998 42.6289 18.6665Z"
            fill="#E7F1FF"
          />
          <path
            d="M32.6656 49C32.2554 49.7072 31.6666 50.2942 30.9581 50.7022C30.2497 51.1103 29.4465 51.3251 28.629 51.3251C27.8114 51.3251 27.0082 51.1103 26.2998 50.7022C25.5913 50.2942 25.0025 49.7072 24.5923 49"
            stroke="#E7F1FF"
            strokeWidth="2"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <circle cx="41.1473" cy="8.48163" r="8.48163" fill="#FB5517" />
        </svg>

        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="35.9861"
            cy="36.0002"
            rx="35.8523"
            ry="35.8713"
            fill="#FB5517"
          />
          <path
            d="M37.4204 71.8154L27.499 46.2886L39.6705 25.7827C44.0543 28.1512 63.8806 31.2883 71.8765 34.4462C71.4557 37.8147 70.8244 43.7447 70.5614 46.2886C68.9833 51.201 63.7754 62.131 55.569 66.5521C47.3627 70.9733 40.0506 71.9031 37.4204 71.8154Z"
            fill="#E34509"
          />
          <ellipse
            cx="35.5984"
            cy="23.4463"
            rx="10.6618"
            ry="10.6675"
            fill="#011633"
          />
          <path
            d="M21.0596 42.6571C21.0596 37.0817 25.5793 32.562 31.1546 32.562H40.8177C46.393 32.562 50.9127 37.0817 50.9127 42.6571V54.6728H21.0596V42.6571Z"
            fill="#011633"
          />
        </svg>
      </div>
    </div>
  );
}

export default HeaderMain;
