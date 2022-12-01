import React, { useState } from "react";
import "./SignUpHeader.css";
import "react-dropdown/style.css";
import Select from "react-select";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import logo from "../../Images/logo.png";
const options = [
  { code: "en", value: "English", label: "English" },
  { code: "hn", value: "Hindi", label: "Hindi" },
];

function SignUpHeader() {
  const [selected, setselected] = useState(null);

  const handlechange = (selected) => {
    setselected(selected);
    localStorage.setItem("language", selected.value);
    i18next.changeLanguage(selected.code);
  };
  const { t } = useTranslation();
  // const defaultoptions = options[0].value;
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
  return (
    <div className="signup_header">
      <div className="signup_header_left">
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
        <span>|</span>
      </div>
      <div className="signup_header_right">
        <Select
          styles={customStyles}
          value={selected}
          options={options}
          placeholder={localStorage.getItem("language") || "English"}
          onChange={handlechange}
        />
      </div>
    </div>
  );
}

export default SignUpHeader;
