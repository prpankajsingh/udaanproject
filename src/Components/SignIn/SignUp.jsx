import React from "react";
import "./SignUp.css";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../Store Features/userSlice";
// import auth from "basic-auth";
import firebase from "firebase";
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(data.Email, data.Password);

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch(
            login({
              email: user.email,
              uid: user.uid,
              name: user.displayName,
            })
          );
          window.location = "./Dashboard";
        }
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const signInWithGoogle = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    await firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            name: user.displayName,
          })
        );
        localStorage.setItem("email", user.email);
        window.location = "/Dashboard";
      }
    });
  };

  

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="signup">
      <div className="signuptop">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signuptopitem1">
            <label>{t("signup_required")}</label>
            <input
              type="text"
              placeholder={t("signup_name")}
              {...register("Name", {
                required: true,
                pattern: /^[A-Za-z ]+$/i,
              })}
            />
          </div>
          <div className="signupformerrors">
            {errors.Name?.type === "required" && "Name is required"}
          </div>
          <div className="signuptopitem2">
            <input
              type="email"
              placeholder={t("signup_email")}
              {...register("Email", { required: true })}
            />
          </div>
          <div className="signupformerrors">
            {errors.Email?.type === "required" && "Email is required"}
          </div>
          <div className="signuptopitem3">
            <input
              type="password"
              placeholder={t("signup_password")}
              {...register("Password", { required: true, min: 8 })}
            />
          </div>
          <div className="signupformerrors">
            {errors.Password?.type === "min" && "Minimum 8 words required"}
          </div>
          <div className="signupformfooter">
            <input
              type="checkbox"
              placeholder="checkbox"
              {...register("checkbox", { required: true })}
            />
            <div className="signupformtextbox">
              <p className="signupformcheckboxitem1">{t("signup_terms1")}</p>
              <p className="signupformcheckboxitem2">{t("signup_terms2")}</p>
              <p className="signupformcheckboxitem3">{t("signup_terms3")}</p>
              <p className="signupformcheckboxitem4">{t("signup_terms4")}</p>
            </div>
          </div>{" "}
          <div className="signupformerrors">
            {errors.checkbox?.type === "required" &&
              "Please accept Terms and Conditions"}
          </div>
          <button type="submit">{t("signup_button1")}</button>
        </form>
        <div className="signup_social_provider">
          <div
            onClick={signInWithGoogle}
            className="signup_social_provider_item"
          >
            <svg
              width="53"
              height="53"
              viewBox="0 0 73 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.8911 33.2255H48.75V33.1667H36V38.8334H44.0063C42.8383 42.1321 39.6996 44.5 36 44.5C31.3059 44.5 27.5 40.6942 27.5 36C27.5 31.3059 31.3059 27.5 36 27.5C38.1668 27.5 40.1381 28.3175 41.6391 29.6527L45.6461 25.6456C43.1159 23.2876 39.7315 21.8334 36 21.8334C28.1765 21.8334 21.8333 28.1765 21.8333 36C21.8333 43.8236 28.1765 50.1667 36 50.1667C43.8236 50.1667 50.1667 43.8236 50.1667 36C50.1667 35.0502 50.0689 34.123 49.8911 33.2255Z"
                fill="#FFC107"
              />
              <path
                d="M23.4668 29.4062L28.1213 32.8196C29.3807 29.7015 32.4308 27.5 36.0001 27.5C38.1669 27.5 40.1382 28.3175 41.6391 29.6527L45.6462 25.6456C43.116 23.2876 39.7316 21.8334 36.0001 21.8334C30.5587 21.8334 25.8397 24.9054 23.4668 29.4062Z"
                fill="#FF3D00"
              />
              <path
                d="M35.9999 50.1669C39.6592 50.1669 42.9841 48.7665 45.498 46.4892L41.1134 42.779C39.6433 43.897 37.8469 44.5017 35.9999 44.5002C32.3152 44.5002 29.1865 42.1507 28.0078 38.8718L23.3881 42.4312C25.7326 47.0191 30.4941 50.1669 35.9999 50.1669Z"
                fill="#4CAF50"
              />
              <path
                d="M49.8911 33.2254H48.75V33.1666H36V38.8333H44.0063C43.4476 40.4033 42.4411 41.7751 41.1113 42.7794L41.1135 42.778L45.498 46.4883C45.1878 46.7702 50.1667 43.0833 50.1667 36C50.1667 35.0501 50.0689 34.1229 49.8911 33.2254Z"
                fill="#1976D2"
              />
              <rect
                x="0.5"
                y="0.5"
                width="72"
                height="72"
                rx="35"
                stroke="#797979"
              />
            </svg>

            <p className="signup_provider_text">
              {t("signup_social_provider")} Google
            </p>
          </div>
          <div className="signup_social_provider_item">
            <svg
              width="53"
              height="53"
              viewBox="0 0 73 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="72"
                height="72"
                rx="35"
                stroke="#797979"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37 20C27.6075 20 20 27.6075 20 37C20 44.5225 24.8662 50.8762 31.6237 53.1287C32.4737 53.2775 32.7925 52.7675 32.7925 52.3213C32.7925 51.9175 32.7712 50.5787 32.7712 49.155C28.5 49.9412 27.395 48.1137 27.055 47.1575C26.8637 46.6687 26.035 45.16 25.3125 44.7563C24.7175 44.4375 23.8675 43.6512 25.2912 43.63C26.63 43.6087 27.5862 44.8625 27.905 45.3725C29.435 47.9437 31.8787 47.2212 32.8562 46.775C33.005 45.67 33.4513 44.9262 33.94 44.5012C30.1575 44.0763 26.205 42.61 26.205 36.1075C26.205 34.2587 26.8637 32.7288 27.9475 31.5388C27.7775 31.1138 27.1825 29.3713 28.1175 27.0338C28.1175 27.0338 29.5412 26.5875 32.7925 28.7762C34.1525 28.3938 35.5975 28.2025 37.0425 28.2025C38.4875 28.2025 39.9325 28.3938 41.2925 28.7762C44.5437 26.5663 45.9675 27.0338 45.9675 27.0338C46.9025 29.3713 46.3075 31.1138 46.1375 31.5388C47.2213 32.7288 47.88 34.2375 47.88 36.1075C47.88 42.6312 43.9062 44.0763 40.1237 44.5012C40.74 45.0325 41.2712 46.0525 41.2712 47.6462C41.2712 49.92 41.25 51.7475 41.25 52.3213C41.25 52.7675 41.5687 53.2987 42.4187 53.1287C45.7935 51.9894 48.726 49.8204 50.8035 46.9271C52.881 44.0338 53.999 40.5619 54 37C54 27.6075 46.3925 20 37 20Z"
                fill="#797979"
              />
            </svg>

            <p className="signup_provider_text">
              {t("signup_social_provider")} Github
            </p>
          </div>
        </div>
      </div>
      <div className="signupbottom">
        <div className="signupbottom_item1">
          <div className="signuplines"></div>
          <p className="signupbottomtext">{t("signup_footer")}</p>
          <div className="signuplines"></div>
        </div>
        <div
          className="signupbottom_button"
          onClick={() => {
            window.location = "./SignIn";
          }}
        >
          {t("signup_button2")}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
