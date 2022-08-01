import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Form = ({ title = "" }) => {
  const form = useRef();
  const { t } = useTranslation(["contact"]);
  const [done, setDone] = useState(false);
  const send = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fqkds7rmjf",
        "template_vm30dsd9r1f",
        form.current,
        "2BDbTiYm0NQIsddRtv7Of"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setDone(true);
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };
  return (
    <form className="mt-10" ref={form} onSubmit={send}>
      {title && (
        <div>
          <label>{title}</label>
          <input type="hidden" name="product_title" value={title} />
        </div>
      )}
      <input
        className="input"
        type="text"
        name="user_name"
        placeholder={t("name")}
      />
      <input
        className="input"
        type="text"
        name="user_email"
        placeholder={t("email")}
      />
      <input
        className="input"
        type="text"
        name="user_subject"
        placeholder={t("subject")}
      />
      <textarea
        className="textarea"
        rows="5"
        name="message"
        placeholder={t("your-message")}
      />
      <button className="button hover:bg-[#201A59]" type="">
        {t("button")}
      </button>

      {done && (
        <div className="alert">
          <br />
          {t("message")}
        </div>
      )}
    </form>
  );
};

export default Form;
