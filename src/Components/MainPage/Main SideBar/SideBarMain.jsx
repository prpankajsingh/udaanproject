import React from "react";
import "./SideBarMain.css";
import DownloadIcon from "@mui/icons-material/Download";
import { withRouter } from "react-router-dom";
function SideBarMain({ location: { pathname } }) {
  const active1 = pathname === "/Dashboard";
  const active2 = pathname === "/Analytics";
  const active3 = pathname === "/CreateProject";
  const active4 = pathname === "/Analytics";
  const active5 = pathname === "/Settings";
  const active6 = pathname === "/Downloads";
  return (
    <div className="sidebarmain">
      <div
        className={
          active1 ? "sidebarmain_bg sidebar_active" : " sidebarmain_bg  "
        }
        onClick={() => {
          window.location = "/Dashboard";
        }}
      >
        <svg
          width="40"
          height="43"
          viewBox="0 0 40 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_664_538)">
            <path
              d="M20.3831 3.80627L5.7998 11.3063L20.3831 18.8063L34.9665 11.3063L20.3831 3.80627Z"
              fill="black"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.7998 26.3063L20.3831 33.8063L34.9665 26.3063"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.7998 18.8063L20.3831 26.3063L34.9665 18.8063"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_664_538"
              x="-1.1167"
              y="0.806274"
              width="43"
              height="44"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_664_538"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_664_538"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div
        className={
          active2 ? "sidebarmain_bg sidebar_active" : " sidebarmain_bg  "
        }
        onClick={() => {
          window.location = "/Analytics";
        }}
      >
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_664_25)">
            <path
              d="M36.6351 10.2661L21.5934 25.3078L13.6768 17.3911L1.80176 29.2661"
              stroke="#011633"
              strokeWidth="2"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.1348 10.2661H36.6348V19.7661"
              stroke="#011633"
              strokeWidth="2"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_664_25">
              <rect
                width="38"
                height="38"
                fill="white"
                transform="translate(0.218262 0.766113)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        className={
          active3 ? "sidebarmain_bg sidebar_active" : " sidebarmain_bg  "
        }
        onClick={() => {
          window.location = "/Github";
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.1802 36.4216C29.1548 36.4216 36.4302 29.1463 36.4302 20.1716C36.4302 11.197 29.1548 3.92163 20.1802 3.92163C11.2055 3.92163 3.93018 11.197 3.93018 20.1716C3.93018 29.1463 11.2055 36.4216 20.1802 36.4216Z"
            fill="#011633"
          />
          <path
            d="M20.1802 13.6716V26.6716"
            stroke="#FB5517"
            strokeWidth="2"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.6802 20.1716H26.6802"
            stroke="#FB5517"
            strokeWidth="2"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div
        className={
          active4 ? "sidebarmain_bg sidebar_active" : " sidebarmain_bg  "
        }
        onClick={() => {
          window.location = "/Analytics";
        }}
      >
        <svg
          width="39"
          height="40"
          viewBox="0 0 39 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M34.125 13.554V34.679H4.875V13.554" fill="#011633" />
          <path
            d="M37.375 5.42896H1.625V13.554H37.375V5.42896Z"
            fill="#011633"
          />
          <path
            d="M16.25 20.054H22.75"
            stroke="#FB5517"
            strokeWidth="2"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div
        className={
          active5 ? "sidebarmain_bg sidebar_active" : " sidebarmain_bg  "
        }
        onClick={() => {
          window.location = "/Settings";
        }}
      >
        <svg
          width="37"
          height="36"
          viewBox="0 0 37 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.2421 22.6375C29.0424 23.0773 28.9829 23.5653 29.0711 24.0383C29.1593 24.5114 29.3913 24.948 29.7371 25.2917L29.8271 25.3792C30.106 25.65 30.3273 25.9717 30.4783 26.3258C30.6292 26.6799 30.707 27.0594 30.707 27.4427C30.707 27.826 30.6292 28.2055 30.4783 28.5596C30.3273 28.9137 30.106 29.2354 29.8271 29.5062C29.5485 29.7774 29.2176 29.9926 28.8534 30.1393C28.4892 30.2861 28.0988 30.3617 27.7046 30.3617C27.3103 30.3617 26.92 30.2861 26.5558 30.1393C26.1916 29.9926 25.8607 29.7774 25.5821 29.5062L25.4921 29.4187C25.1386 29.0825 24.6896 28.857 24.203 28.7712C23.7164 28.6855 23.2145 28.7434 22.7621 28.9375C22.3184 29.1224 21.9401 29.4293 21.6735 29.8206C21.407 30.2118 21.264 30.6703 21.2621 31.1396V31.3875C21.2621 32.161 20.946 32.9029 20.3834 33.4499C19.8208 33.9969 19.0577 34.3042 18.2621 34.3042C17.4664 34.3042 16.7034 33.9969 16.1408 33.4499C15.5782 32.9029 15.2621 32.161 15.2621 31.3875V31.2562C15.2505 30.7735 15.0898 30.3054 14.8009 29.9127C14.5119 29.52 14.1082 29.2208 13.6421 29.0542C13.1897 28.86 12.6878 28.8021 12.2012 28.8879C11.7146 28.9737 11.2656 29.1992 10.9121 29.5354L10.8221 29.6229C10.5435 29.8941 10.2126 30.1092 9.84841 30.256C9.48422 30.4028 9.09384 30.4783 8.69959 30.4783C8.30534 30.4783 7.91496 30.4028 7.55077 30.256C7.18657 30.1092 6.85571 29.8941 6.57709 29.6229C6.29816 29.352 6.07688 29.0304 5.92591 28.6763C5.77494 28.3222 5.69723 27.9427 5.69723 27.5594C5.69723 27.1761 5.77494 26.7965 5.92591 26.4425C6.07688 26.0884 6.29816 25.7667 6.57709 25.4958L6.66709 25.4083C7.0129 25.0646 7.24487 24.6281 7.3331 24.155C7.42132 23.6819 7.36176 23.194 7.16209 22.7542C6.97195 22.3228 6.65622 21.955 6.25379 21.6959C5.85135 21.4367 5.37977 21.2977 4.89709 21.2958H4.64209C3.84644 21.2958 3.08338 20.9885 2.52077 20.4416C1.95816 19.8946 1.64209 19.1527 1.64209 18.3792C1.64209 17.6056 1.95816 16.8637 2.52077 16.3168C3.08338 15.7698 3.84644 15.4625 4.64209 15.4625H4.77709C5.27358 15.4512 5.7551 15.295 6.15904 15.0141C6.56298 14.7332 6.87066 14.3406 7.04209 13.8875C7.24176 13.4476 7.30132 12.9597 7.2131 12.4866C7.12487 12.0136 6.8929 11.577 6.54709 11.2333L6.45709 11.1458C6.17816 10.8749 5.95688 10.5533 5.80591 10.1992C5.65494 9.84511 5.57723 9.46558 5.57723 9.08228C5.57723 8.69899 5.65494 8.31945 5.80591 7.96537C5.95688 7.6113 6.17816 7.28962 6.45709 7.01874C6.73571 6.74756 7.06657 6.53243 7.43077 6.38565C7.79496 6.23887 8.18534 6.16332 8.57959 6.16332C8.97384 6.16332 9.36422 6.23887 9.72841 6.38565C10.0926 6.53243 10.4235 6.74756 10.7021 7.01874L10.7921 7.10624C11.1456 7.44244 11.5946 7.66797 12.0812 7.75375C12.5678 7.83953 13.0697 7.78162 13.5221 7.58749H13.6421C14.0857 7.40263 14.4641 7.09568 14.7306 6.70442C14.9971 6.31316 15.1402 5.85468 15.1421 5.38541V5.13749C15.1421 4.36394 15.4582 3.62208 16.0208 3.0751C16.5834 2.52812 17.3464 2.22083 18.1421 2.22083C18.9377 2.22083 19.7008 2.52812 20.2634 3.0751C20.826 3.62208 21.1421 4.36394 21.1421 5.13749V5.26874C21.144 5.73801 21.287 6.1965 21.5536 6.58775C21.8201 6.97901 22.1984 7.28596 22.6421 7.47082C23.0945 7.66495 23.5964 7.72286 24.083 7.63708C24.5696 7.5513 25.0186 7.32577 25.3721 6.98957L25.4621 6.90207C25.7407 6.63089 26.0716 6.41576 26.4358 6.26898C26.8 6.12221 27.1903 6.04666 27.5846 6.04666C27.9788 6.04666 28.3692 6.12221 28.7334 6.26898C29.0976 6.41576 29.4285 6.63089 29.7071 6.90207C29.986 7.17295 30.2073 7.49463 30.3583 7.84871C30.5092 8.20279 30.587 8.58232 30.587 8.96562C30.587 9.34891 30.5092 9.72845 30.3583 10.0825C30.2073 10.4366 29.986 10.7583 29.7071 11.0292L29.6171 11.1167C29.2713 11.4604 29.0393 11.8969 28.9511 12.37C28.8629 12.843 28.9224 13.331 29.1221 13.7708V13.8875C29.3122 14.3188 29.628 14.6867 30.0304 14.9458C30.4328 15.2049 30.9044 15.344 31.3871 15.3458H31.6421C32.4377 15.3458 33.2008 15.6531 33.7634 16.2001C34.326 16.7471 34.6421 17.4889 34.6421 18.2625C34.6421 19.036 34.326 19.7779 33.7634 20.3249C33.2008 20.8719 32.4377 21.1792 31.6421 21.1792H31.5071C31.0244 21.181 30.5528 21.3201 30.1504 21.5792C29.748 21.8383 29.4322 22.2062 29.2421 22.6375Z"
            fill="#011633"
          />
          <path
            d="M18.1421 22.6375C20.6274 22.6375 22.6421 20.6787 22.6421 18.2625C22.6421 15.8462 20.6274 13.8875 18.1421 13.8875C15.6568 13.8875 13.6421 15.8462 13.6421 18.2625C13.6421 20.6787 15.6568 22.6375 18.1421 22.6375Z"
            stroke="#FB5517"
            strokeWidth="2"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div
        className={
          active6 ? "sidebarmain_bg sidebar_active" : " sidebarmain_bg  "
        }
        onClick={() => {
          window.location = "/Downloads";
        }}
      >
        <DownloadIcon />
      </div>
    </div>
  );
}

export default withRouter(SideBarMain);
