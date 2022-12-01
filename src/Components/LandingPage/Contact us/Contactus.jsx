import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import "./Contactus.css";
function Contactus() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="contactus" id="Contact">
      <div className="contactusleft">
        <p className="contactus_heading">{t("contact_title")}</p>
        <div className="contactusform">
          <p className="contactusformheading">{t("contact_form_title")}</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              placeholder={t("contact_form_name")}
              {...register("Name", { required: true })}
            />
            <label htmlFor="Email Address">Email address</label>
            <input
              type="email"
              placeholder="Email Address"
              {...register("Email Address", { required: true })}
            />
            <label htmlFor="Category">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              {...register("Subject", { required: true })}
            />
            <label htmlFor="Message">Message</label>
            <textarea
              placeholder={t("contact_form_message")}
              {...register("Message", { required: true })}
            />

            <input type="submit" />
          </form>
        </div>
      </div>
      <div className="contactusright">
        <p className="contact_right_title">{t("contact_right_title")}</p>
        <p className="contact_right_description">
          {t("contact_right_description")}
        </p>
        <div className="contact_right_items">
          <div className="contact_right_icon">
            <svg
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0066 2.63403C14.7522 2.63787 11.6322 3.93238 9.33101 6.23359C7.0298 8.5348 5.7353 11.6548 5.73146 14.9092C5.72756 17.5687 6.59628 20.156 8.20435 22.2743C8.20435 22.2743 8.53913 22.7151 8.59381 22.7787L18.0066 33.8799L27.4239 22.7731C27.473 22.714 27.8089 22.2743 27.8089 22.2743L27.81 22.271C29.4173 20.1536 30.2856 17.5675 30.2818 14.9092C30.278 11.6548 28.9835 8.5348 26.6823 6.23359C24.381 3.93238 21.261 2.63787 18.0066 2.63403ZM18.0066 19.3729C17.1238 19.3729 16.2608 19.1111 15.5267 18.6206C14.7927 18.1302 14.2206 17.433 13.8827 16.6174C13.5449 15.8018 13.4565 14.9043 13.6287 14.0384C13.8009 13.1725 14.2261 12.3772 14.8503 11.7529C15.4746 11.1286 16.2699 10.7035 17.1358 10.5313C18.0017 10.359 18.8992 10.4474 19.7148 10.7853C20.5305 11.1231 21.2276 11.6953 21.7181 12.4293C22.2085 13.1634 22.4703 14.0264 22.4703 14.9092C22.4689 16.0926 21.9981 17.2271 21.1613 18.0639C20.3245 18.9007 19.19 19.3714 18.0066 19.3729Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="contact_right_content">
            SI-A418, KReSIT, IIT-Bombay, Mumbai, Maharastra
          </div>
        </div>
        <div className="contact_right_items">
          <div className="contact_right_icon">
            <svg
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.5128 6.57812H3.49874C2.88149 6.57812 2.38281 7.0768 2.38281 7.69405V30.0126C2.38281 30.6298 2.88149 31.1285 3.49874 31.1285H32.5128C33.13 31.1285 33.6287 30.6298 33.6287 30.0126V7.69405C33.6287 7.0768 33.13 6.57812 32.5128 6.57812ZM29.6951 10.3758L18.6928 18.937C18.4207 19.1497 18.0406 19.1497 17.7686 18.937L6.76282 10.3758C6.72133 10.3437 6.6909 10.2995 6.67579 10.2494C6.66069 10.1992 6.66166 10.1455 6.67858 10.0959C6.6955 10.0463 6.72751 10.0033 6.77013 9.97277C6.81276 9.94228 6.86385 9.92589 6.91626 9.9259H29.5416C29.594 9.92589 29.6451 9.94228 29.6878 9.97277C29.7304 10.0033 29.7624 10.0463 29.7793 10.0959C29.7962 10.1455 29.7972 10.1992 29.7821 10.2494C29.767 10.2995 29.7366 10.3437 29.6951 10.3758Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="contact_right_content">ganesh@cse.iitb.ac.in</div>
        </div>
        <div className="contact_right_items">
          <div className="contact_right_icon">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2486 20.7463C17.3193 22.8469 19.8247 24.4686 22.5889 25.4977L26.3285 22.5219C26.4394 22.4455 26.5708 22.4046 26.7055 22.4046C26.8401 22.4046 26.9715 22.4455 27.0824 22.5219L34.0259 26.9955C34.2895 27.154 34.5127 27.3716 34.6777 27.6311C34.8428 27.8907 34.9452 28.185 34.977 28.491C35.0087 28.7969 34.9689 29.106 34.8607 29.3939C34.7524 29.6818 34.5787 29.9406 34.3533 30.1498L31.0997 33.3637C30.6338 33.8241 30.0611 34.162 29.4328 34.3472C28.8045 34.5324 28.1402 34.5591 27.499 34.4251C21.1032 33.1041 15.2081 30.0105 10.4873 25.4977C5.87137 20.94 2.67714 15.1407 1.29212 8.80343C1.1553 8.17221 1.18386 7.51634 1.37503 6.89939C1.56619 6.28245 1.91349 5.72534 2.38325 5.28207L5.75583 2.02853C5.96453 1.81406 6.21904 1.64959 6.50032 1.54742C6.78159 1.44525 7.08233 1.40804 7.38003 1.43858C7.67772 1.46911 7.96465 1.56659 8.21933 1.72373C8.47401 1.88086 8.68984 2.09358 8.85066 2.34595L13.4731 9.20021C13.5528 9.30784 13.5958 9.43824 13.5958 9.57218C13.5958 9.70613 13.5528 9.83653 13.4731 9.94416L10.4278 13.6044C11.4848 16.3133 13.1316 18.7529 15.2486 20.7463Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="contact_right_content">+91-022-25767728</div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
