import React from "react";
import "./Github.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import firebase from "firebase";

function Github() {
  const { t } = useTranslation();
  const LinkGithub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    const auth = firebase.auth();
    firebase
      .auth()
      .currentUser.linkWithRedirect(githubProvider)
      .then((result) => {
        const credential = result.credential;
        const user = result.user;
        console.log("signedin");
      })
      .then(() => {
        window.location = "/CreateProject";
      })
      .catch((error) => {
        window.alert(error);
      });
  };
  return (
    <div className="github">
      <div onClick={LinkGithub}>
        <svg
          width="107"
          height="107"
          viewBox="0 0 107 107"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.28125"
            y="0.808105"
            width="104.724"
            height="104.724"
            rx="52.3619"
            stroke="#797979"
          />
          <g clip-path="url(#clip0_827_451)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M54.3667 29.2734C40.7638 29.2734 29.7461 40.2912 29.7461 53.894C29.7461 64.7887 36.7937 73.9906 46.5804 77.2529C47.8115 77.4683 48.2731 76.7297 48.2731 76.0834C48.2731 75.4986 48.2423 73.5598 48.2423 71.4978C42.0564 72.6365 40.4561 69.9898 39.9636 68.6049C39.6867 67.897 38.4864 65.7119 37.44 65.1272C36.5783 64.6656 35.3473 63.5269 37.4093 63.4961C39.3481 63.4653 40.733 65.2811 41.1947 66.0197C43.4105 69.7436 46.9497 68.6972 48.3654 68.0509C48.5809 66.4506 49.2272 65.3734 49.935 64.7579C44.4569 64.1424 38.7326 62.0188 38.7326 52.6015C38.7326 49.924 39.6867 47.7081 41.2562 45.9847C41.01 45.3692 40.1483 42.8455 41.5024 39.4602C41.5024 39.4602 43.5644 38.8139 48.2731 41.9838C50.2428 41.4299 52.3355 41.1529 54.4283 41.1529C56.521 41.1529 58.6138 41.4299 60.5834 41.9838C65.2921 38.7831 67.3541 39.4602 67.3541 39.4602C68.7082 42.8455 67.8465 45.3692 67.6003 45.9847C69.1699 47.7081 70.1239 49.8932 70.1239 52.6015C70.1239 62.0496 64.3688 64.1424 58.8907 64.7579C59.7832 65.5273 60.5526 67.0045 60.5526 69.3127C60.5526 72.6057 60.5219 75.2524 60.5219 76.0834C60.5219 76.7297 60.9835 77.4991 62.2145 77.2529C67.1021 75.6027 71.3491 72.4614 74.358 68.2712C77.3668 64.0809 78.9858 59.0527 78.9873 53.894C78.9873 40.2912 67.9696 29.2734 54.3667 29.2734Z"
              fill="#797979"
            />
          </g>
          <defs>
            <clipPath id="clip0_827_451">
              <rect
                width="49.2412"
                height="49.2412"
                fill="white"
                transform="translate(29.7461 29.2734)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <p className="github_heading">{t("create_project_github")} Github</p>
      <p className="github_subheading1">{t("create_project_github_sub1")}</p>
      <span>
        <p className="github_subheading2">{t("create_project_github_sub2")}</p>
        <p className="github_subheading3">
          <Link to="/" target="_blank">
            {t("create_project_github_sub3")}
          </Link>
        </p>
      </span>
    </div>
  );
}

export default Github;
