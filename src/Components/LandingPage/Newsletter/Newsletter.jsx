import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import "./Newsletter.css";
import { db } from "../../Store Features/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const emailsubscribe = (data) => {
    senddata(data);
  };
  const senddata = (data) => {
    db.collection("SubscribedData")
      .add({
        email: data.EmailAddress,
      })
      .then(
        toast.success("🦄 Subscribed!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        })
      )
      .then(console.log("success"));
  };
  const { t } = useTranslation();
  return (
    <div className="newsletter">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <p className="newsletter_title">{t("newsletter_title")}</p>
      <p className="newsletter_subheading">{t("newsletter_subheading")}</p>
      <p className="newsletter_description">{t("newsletter_description")}</p>
      <form onSubmit={handleSubmit(emailsubscribe)}>
        <input
          type="email"
          placeholder="Email Address"
          {...register("EmailAddress", { required: true })}
        />

        <button className="NewsletterButton" type="submit">{t("newsletter_button")}</button>
      </form>
    </div>
  );
}

export default Newsletter;
