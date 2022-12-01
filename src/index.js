import React from "react";
import ReactDOM from "react-dom";
import { Suspense } from "react";
import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Components/Store Features/Store";
i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "hn"],
    fallbackLng: "en",
    debug: false,
    // Options for language detector
    detection: {
      order: ["path", "localstorage", "cookie", "htmlTag"],
      caches: ["cookie", "localstorage"],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });
ReactDOM.render(
  <Suspense fallback="...">
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
